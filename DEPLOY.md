# Deployment Guide — Mates Heavy Benchmark

## AWS ECS (Fargate) — Recommended

### 1. Build & Push to ECR

```bash
aws ecr create-repository --repository-name mates-bench --region us-east-1
docker build -t mates-bench .
docker tag mates-bench:latest <account>.dkr.ecr.us-east-1.amazonaws.com/mates-bench:latest
docker push <account>.dkr.ecr.us-east-1.amazonaws.com/mates-bench:latest
```

### 2. Create ECS Cluster & Service

```bash
aws ecs create-cluster --cluster-name mates-bench

# Create task definition (4 CPU, 8GB, 2 replicas)
aws ecs register-task-definition \
  --family mates-bench \
  --network-mode awsvpc \
  --requires-compatibilities FARGATE \
  --cpu 4096 --memory 8192 \
  --execution-role-arn arn:aws:iam::<account>:role/ecsTaskExecutionRole \
  --container-definitions '[
    {
      "name": "mates-bench",
      "image": "<account>.dkr.ecr.us-east-1.amazonaws.com/mates-bench:latest",
      "portMappings": [{"containerPort": 3000}],
      "healthCheck": {
        "command": ["CMD-SHELL", "curl -f http://localhost:3000/health || exit 1"],
        "interval": 10,
        "timeout": 5,
        "retries": 3
      }
    }
  ]'

# Run service with 2 replicas
aws ecs create-service \
  --cluster mates-bench \
  --service-name mates-bench \
  --task-definition mates-bench \
  --desired-count 2 \
  --launch-type FARGATE \
  --network-configuration "awsvpcConfiguration={subnets=[subnet-xxx],securityGroups=[sg-xxx],assignPublicIp=ENABLED}"
```

## AWS Lightsail — Simple Fixed Price

```bash
# Install Lightsail CLI, then:
aws lightsail create-container-service --service-name mates-bench --power small --scale 2
aws lightsail create-container-service-deployment --service-name mates-bench \
  --containers '{"mates-bench":{"image":"<account>.dkr.ecr...","ports":{"3000":"HTTP"}}}' \
  --public-endpoint '{"containerName":"mates-bench","containerPort":3000}'
```

## Direct EC2 — Full Control

```bash
# Launch EC2 instance with Ubuntu 22.04
ssh ubuntu@<ip>
sudo apt update && sudo apt install -y docker.io
sudo docker run -d -p 3000:3000 -e PORT=3000 <account>.dkr.ecr...
```

## Verify

```bash
curl http://<load-balancer-dns>/health
# {"status":"ok","timestamp":"..."}
```

## Benchmarks

```bash
# From your machine:
ab -n 1000 -c 100 -l http://<dns>/page-001
ab -n 1000 -c 500 -l http://<dns>/page-050
```
