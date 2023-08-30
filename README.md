# docomo-hack-tameB-frontend

ドコモハッカソン 2023 チーム B のフロントエンドリポジトリです。

# 制作のきっかけ

# 提案サービス

1. 背景と課題
2. システム概要

# 開発環境

VScode の拡張機能である Dev Containers を利用すると、快適に開発が行えます。Windows で導入する場合の概要は以下の通りです。

1. Visual Studio Code のインストール
2. WSL2 のインストール(Docker Desktop のインストールまで書いてあります。Mac の場合は不要です。)
3. Docker Desktop のインストール
4. Dev Container 拡張をインストール（なくても問題ありません。）

# 起動コマンド

```bash
docker compose up -d
docker-compose exec vue-app bash
yarn install
yarn serve
```
