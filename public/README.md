# 常温保存豆腐.com 試作サイト

Cloudflare Pagesで公開できる静的サイトです。ビルド作業は不要です。

## アフィリエイトリンクの追加

`products.js` の各商品の `url` と `store` を変更します。

```js
url: "https://example.com/affiliate-link",
store: "Amazonで見る"
```

商品名、賞味期限、内容量、価格はメーカー公式情報と現物表示を確認してから掲載してください。

## イメージキャラクター

サイト案内役は「とうふ店長」です。`assets/tofu-tencho.png` が背景透過済みの共通素材です。手に持つパッケージは架空の汎用デザインで、特定メーカーの商品を示すものではありません。

## Cloudflare Pagesへの公開

CloudflareダッシュボードのWorkers & PagesからPagesプロジェクトを作成し、このフォルダをDirect Uploadします。

- ビルドコマンド：不要
- 公開ディレクトリ：このフォルダ全体
- 最初はCloudflareのサブドメインで確認
- 確認後に独自ドメインを設定

Git連携を使う場合も、このフォルダをリポジトリのルートとして設定できます。
