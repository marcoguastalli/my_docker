# aws localstack
Run AWS services locally in a container (S3, SQS, SNS, Lambda, DynamoDB, ...)
- http://app.localstack.cloud

### inspiring links
- https://docs.localstack.cloud/
- https://docs.localstack.cloud/aws/getting-started/installation/#docker
- https://github.com/localstack/localstack

### images
- https://hub.docker.com/r/localstack/localstack

# run
- `cd ~/opt/docker`
- `docker run -p 4566:4566 -v /var/run/docker.sock:/var/run/docker.sock localstack/localstack`

# mount a volume
- `docker run -p 4566:4566 \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v /tmp/localstack:/var/lib/localstack \
  localstack/localstack`

# mount a volume and add PERSISTENCE
- `docker run -p 4566:4566 \
  -e PERSISTENCE=1 \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v ~/opt/docker/volume-localstack:/var/lib/localstack \
  localstack/localstack`

# internal endpoints
- https://docs.localstack.cloud/aws/configuration/networking/internal-endpoints/

##### health and runtime info
- `curl http://localhost:4566/_localstack/health` — state of all services (available/running/disabled) + version
- `curl http://localhost:4566/_localstack/info` — version, edition, uptime, machine id
- `curl http://localhost:4566/_localstack/plugins` — loaded plugins
- `curl http://localhost:4566/_localstack/init` — state of init hook scripts
- `curl http://localhost:4566/_localstack/diagnose` — full diagnostics dump (requires `-e DEBUG=1`)

##### control the runtime
- `curl -X POST http://localhost:4566/_localstack/health -H "Content-Type: application/json" -d '{"action":"restart"}'`
- `curl -X POST http://localhost:4566/_localstack/health -H "Content-Type: application/json" -d '{"action":"kill"}'`

# play with the aws cli
LocalStack accepts any credentials; use the dummy ones below.
- `export AWS_ACCESS_KEY_ID=test AWS_SECRET_ACCESS_KEY=test AWS_DEFAULT_REGION=us-east-1`

##### S3
- `aws --endpoint-url=http://localhost:4566 s3 mb s3://my-bucket`
- `aws --endpoint-url=http://localhost:4566 s3 cp README.md s3://my-bucket/`
- `aws --endpoint-url=http://localhost:4566 s3 ls s3://my-bucket`

##### SQS
- `aws --endpoint-url=http://localhost:4566 sqs create-queue --queue-name my-queue`
- `aws --endpoint-url=http://localhost:4566 sqs send-message --queue-url http://localhost:4566/000000000000/my-queue --message-body "hello"`
- `aws --endpoint-url=http://localhost:4566 sqs receive-message --queue-url http://localhost:4566/000000000000/my-queue`

##### DynamoDB
- `aws --endpoint-url=http://localhost:4566 dynamodb create-table --table-name my-table --attribute-definitions AttributeName=id,AttributeType=S --key-schema AttributeName=id,KeyType=HASH --billing-mode PAY_PER_REQUEST`
- `aws --endpoint-url=http://localhost:4566 dynamodb list-tables`

To skip typing `--endpoint-url` every time, install the `awslocal` wrapper:
- `pip install awscli-local`
- `awslocal s3 ls`
