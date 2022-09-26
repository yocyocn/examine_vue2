# examine_vue2

vue2の習得と技術検証のためのリポジトリ

## 方針

- docker-composeで作成した環境を使う
  - 参考：https://github.com/miolab/vue_container

## 使い方

- `docker-compose up -d`
  - で、vue-cliが起動する（はず）
- `docker exec -it dev_vue_app_1 /bin/sh`
  - で、コンテナの中に入って操作
  - OSはAlpine
