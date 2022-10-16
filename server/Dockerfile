FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . ./

ENV MONGO_URL={secrets.MONGO_URL}
ENV GOOGLE_CLIENT_ID={secrets.GOOGLE_CLIENT_ID}
ENV GOOGLE_CLIENT_SECRET={secrets.GOOGLE_CLIENT_SECRET}
ENV AWS_S3_ACCESS_KEY={secrets.AWS_S3_ACCESS_KEY}
ENV AWS_S3_SECRET_KEY={secrets.AWS_S3_SECRET_KEY}
ENV MAILGUN__API__KEY={secrets.MAILGUN__API__KEY}
ENV MAILGUN__DOMAIN={secrets.MAILGUN__DOMAIN}
ENV rzp_secret={secrets.rzp_secret}
ENV rzp_id={secrets.rzp_id}


CMD ["npm", "run", "start"]


