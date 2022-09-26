FROM node:14.16.0-alpine

WORKDIR /usr/src/app

RUN apk update && \
    apk add python && \
    apk add make && \
    apk add g++ && \
    yarn global add @vue/cli@4.5.11

CMD [ "/bin/sh" ]