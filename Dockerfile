FROM node:18.17.1

ENV TZ Asia/Tokyo

WORKDIR /src

RUN yarn global add @vue/cli
