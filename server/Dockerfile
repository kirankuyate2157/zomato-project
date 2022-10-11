FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . ./

ENV MONGO_URL=mongodb+srv://kiran_2157:Kiran2157@zomato.ucg9gxn.mongodb.net/?retryWrites=true&w=majority
ENV GOOGLE_CLIENT_ID=883305892137-qnbunfjhanhvjifjjh1ac7he62iak5uf.apps.googleusercontent.com
ENV GOOGLE_CLIENT_SECRET=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
ENV AWS_S3_ACCESS_KEY=AKIAQA4DA3OOWK5ZTAMG
ENV AWS_S3_SECRET_KEY=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
ENV MAILGUN__API__KEY=012be3b44ea7dc27175a7eb4a2e0964f-07e2c238-415e5b15
ENV MAILGUN__DOMAIN=sandboxfbe81d6f5c3e4480b1b5aca6a889db56.mailgun.org
ENV rzp_secret=C94k79IKuALkwILTFTM5zccG
ENV rzp_id=rzp_test_LHbhzBnKOdTaVY

CMD ["npm","run","start",]