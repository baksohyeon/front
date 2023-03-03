FROM node:16.18.0-alpine

# 디렉토리 지정
WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn


COPY . .

RUN yarn build

# container port 3000
EXPOSE 3000

ENV NODE_ENV=production
CMD ["yarn", "start"]
