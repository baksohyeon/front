FROM node:16.18.0-alpine

# 디렉토리 지정
WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

# install dependencies
RUN yarn install --immutable --immutable-cache --check-cache


COPY . .

RUN yarn build

# container port 3000
EXPOSE 3000

CMD ["yarn", "start"]
