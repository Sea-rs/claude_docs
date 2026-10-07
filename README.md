# はじめての Claude Code（入門スライド）

Claude Code を初めて使う人向けの、ブラウザで見られるスライド資料です。
操作の説明は、VS Code の拡張機能で使う前提です（ターミナル版は第2章の最後で紹介）。
HTML / SCSS / JavaScript（フレームワークなし）で作り、Vite でビルドします。

## 使い方

```bash
npm install          # 初回のみ
npm run dev          # 開発サーバー（保存すると自動で再読み込み）
npm run build        # dist/ に出力（Web サーバーに置く用）
npm run build:single # dist-single/index.html に1ファイルで出力（ダブルクリックで開ける配布用）
npm run preview      # ビルド結果の確認
```

### スライドの操作

| 操作 | キー |
| --- | --- |
| 次へ / 前へ | `→` `←`（`Space` `PageDown` `PageUp` も可）、スマホはスワイプ |
| 最初 / 最後 | `Home` / `End` |
| 目次 | `T` |
| 全画面 | `F` |

URL の `#/5` のような部分がページ番号になっているので、特定のスライドへのリンクを共有できます。
ブラウザの印刷機能で「PDF に保存」すると、1スライド1ページの PDF になります。

## フォルダ構成

```
src/
├── main.js                 エントリーポイント
├── core/
│   ├── Deck.js / .scss     ページ送り・拡大縮小・キーボード操作
│   └── html.js             HTML を組み立てる小さなヘルパー
├── components/
│   ├── index.js            部品をまとめて export
│   ├── layouts/            スライドの型（表紙・中扉・本文）
│   ├── content/            スライドの中に置く部品（カード・表・図など）
│   └── ui/                 操作パネル・進捗バー・目次
├── slides/                 スライドの内容（章ごとに1ファイル）
└── styles/
    ├── _tokens.scss        サイズ・フォントなどのデザイントークン
    ├── _theme.scss         色（ライト / ダーク）
    ├── _mixins.scss        共通の mixin
    └── _base.scss          リセット・基本スタイル
```

各コンポーネントは「JS（HTML を返す関数）」と「同名の SCSS」をペアで1フォルダに置いています。
SCSS は JS から import しているので、使った部品のスタイルだけが読み込まれます。

## スライドを追加・編集する

`src/slides/` の章ファイルを編集します。スライドは部品を組み合わせて書きます。

```js
import { ContentSlide, Columns, BulletList, Callout } from '../components/index.js';

ContentSlide({
  kicker: '01 ／ Claude とは？',
  title: 'スライドのタイトル',
  lead: 'タイトル下の説明文（省略可）',
  body: Columns({
    left: BulletList({ items: ['項目1', '項目2'] }),
    right: Callout({ type: 'tip', text: '補足の説明' }),
  }),
  note: '※ 下部の注記（省略可）',
});
```

新しい章を作るときは、`src/slides/` にファイルを追加して `src/slides/index.js` の `chapters` 配列に並べます。

### 使える部品

| 部品 | 用途 |
| --- | --- |
| `TitleSlide` / `SectionSlide` / `ContentSlide` | スライドの型（表紙 / 中扉 / 本文） |
| `Card` / `CardGrid` | 小見出し付きの箱と、その並び |
| `BulletList` | 箇条書き（入れ子・番号付き対応） |
| `Callout` | ポイント・補足・注意の囲み |
| `Columns` | 2カラムレイアウト |
| `CodeBlock` | コード・設定ファイルの表示（shell / markdown の簡易ハイライト） |
| `CompareTable` | 比較表 |
| `FlowDiagram` | 処理の流れ図（横 / 縦、繰り返し矢印） |
| `FileTree` | フォルダ構成図 |
| `TokenDemo` | トークン分割の図 |
| `Meter` | 積み上げバー（コンテキストウィンドウの使用量など） |
| `Timeline` | 横向きのタイムライン |
| `VennDiagram` | 入れ子の円（範囲の包含関係を示す補足図） |
| `VscodeMock` | VS Code と Claude パネルのイメージ図（番号つき） |

色は `tone`（`accent` / `blue` / `green` / `yellow`）で指定できます。

## 内容について

料金・利用上限などは 2026年時点の情報をもとにしています。変更されることがあるので、発表前に
[料金プラン](https://claude.com/pricing) や [Claude Code ドキュメント](https://code.claude.com/docs) で確認してください。
