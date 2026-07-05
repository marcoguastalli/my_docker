#!/bin/bash
set -e

echo "=== 1. Creating IAM execution role ==="
awslocal iam create-role \
  --role-name lambda-edge-role \
  --assume-role-policy-document '{
    "Version": "2012-10-17",
    "Statement": [{
      "Effect": "Allow",
      "Principal": {"Service": ["lambda.amazonaws.com","edgelambda.amazonaws.com"]},
      "Action": "sts:AssumeRole"
    }]
  }'

echo ""
echo "=== 2. Packaging Lambda function ==="
zip -j function.zip index.js

echo ""
echo "=== 3. Creating Lambda function ==="
awslocal lambda create-function \
  --function-name session-id-generator \
  --runtime nodejs18.x \
  --role arn:aws:iam::000000000000:role/lambda-edge-role \
  --handler index.handler \
  --zip-file fileb://function.zip

echo ""
echo "=== 4. Publishing Lambda version (required for Lambda@Edge) ==="
LAMBDA_VERSION=$(awslocal lambda publish-version \
  --function-name session-id-generator \
  --query 'Version' --output text)
echo "Published version: $LAMBDA_VERSION"

LAMBDA_ARN="arn:aws:lambda:us-east-1:000000000000:function:session-id-generator:${LAMBDA_VERSION}"
echo "Lambda ARN: $LAMBDA_ARN"

# CloudFront is a LocalStack Pro service; on the community image stop here
if ! curl -s http://localhost:4566/_localstack/health | grep -q '"cloudfront"'; then
  echo ""
  echo "========================================="
  echo "  CloudFront not available (LocalStack Pro required)."
  echo "  Skipping distribution setup."
  echo ""
  echo "  Test the Lambda directly:"
  echo "  awslocal lambda invoke \\"
  echo "    --function-name session-id-generator \\"
  echo "    --payload fileb://test-event.json output.json"
  echo "========================================="
  exit 0
fi

echo ""
echo "=== 5. Creating S3 origin bucket ==="
awslocal s3 mb s3://my-origin-bucket
echo "<h1>Hello</h1>" | awslocal s3 cp - s3://my-origin-bucket/index.html \
  --content-type text/html

echo ""
echo "=== 6. Creating CloudFront distribution with Lambda@Edge ==="
DISTRIBUTION=$(awslocal cloudfront create-distribution \
  --distribution-config "{
    \"CallerReference\": \"ref-$(date +%s)\",
    \"Origins\": {
      \"Quantity\": 1,
      \"Items\": [{
        \"Id\": \"s3-origin\",
        \"DomainName\": \"my-origin-bucket.s3.localhost.localstack.cloud:4566\",
        \"S3OriginConfig\": { \"OriginAccessIdentity\": \"\" }
      }]
    },
    \"DefaultCacheBehavior\": {
      \"TargetOriginId\": \"s3-origin\",
      \"ViewerProtocolPolicy\": \"allow-all\",
      \"ForwardedValues\": { \"QueryString\": false, \"Cookies\": { \"Forward\": \"none\" } },
      \"LambdaFunctionAssociations\": {
        \"Quantity\": 1,
        \"Items\": [{
          \"LambdaFunctionARN\": \"${LAMBDA_ARN}\",
          \"EventType\": \"origin-request\",
          \"IncludeBody\": false
        }]
      },
      \"MinTTL\": 0
    },
    \"Enabled\": true,
    \"Comment\": \"Session ID test distribution\"
  }")

DIST_ID=$(echo "$DISTRIBUTION" | python3 -c 'import json,sys; print(json.load(sys.stdin)["Distribution"]["Id"])')
DOMAIN=$(echo "$DISTRIBUTION" | python3 -c 'import json,sys; print(json.load(sys.stdin)["Distribution"]["DomainName"])')

echo ""
echo "========================================="
echo "  Setup complete!"
echo "========================================="
echo "  Distribution ID: $DIST_ID"
echo "  Domain: $DOMAIN"
echo ""
echo "  Test with:"
echo "  curl -v http://${DIST_ID}.cloudfront.localhost.localstack.cloud:4566/index.html"
echo "========================================="
