set -f
ssh "ubuntu@ec2-65-1-144-62.ap-south-1.compute.amazonaws.com" "cd app/ zomato-project && git pull origin main && docker-compose up --build"