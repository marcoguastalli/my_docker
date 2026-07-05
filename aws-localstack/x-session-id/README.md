# x-session-id
CloudFront injects the Http Header x-session-id via a Lambda@Edge function

The Lambda only generates an id when the request does not already carry one.
Note for real AWS: on `origin-request` the function only runs on cache misses;
a production session id would run on `viewer-request` and be sent back to the
client as a cookie so it survives across requests.

CloudFront is a LocalStack **Pro** service: with the community image the setup
script creates the IAM role and the Lambda, then skips the distribution — the
Lambda can still be invoked directly (see play).

### 1st time setup
- `brew list | grep awscli`
- `brew install awscli`
- `brew info awscli`
- `pipx install awscli-local`

### run localstack
- `cd ./aws-localstack/x-session-id`
- `docker-compose up -d`

### build
- `chmod +x setup-localstack.sh`
- `./setup-localstack.sh`

### play
- `awslocal lambda invoke \
  --function-name session-id-generator \
  --payload fileb://test-event.json \
  output.json`
- `cat output.json | python3 -m json.tool`
- http://localhost:4566/_localstack/health

### clean-up
- `awslocal lambda delete-function --function-name session-id-generator`
- `awslocal iam delete-role --role-name lambda-edge-role`
- `docker-compose down`
