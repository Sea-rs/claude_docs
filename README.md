# はじめての Claude Code（入門スライド）

claude.ai（チャット）と Claude Code を初めて使う人向けの、ブラウザで見られるスライド資料です。
Claude Code の操作説明は、VS Code の拡張機能で使う前提です（ターミナル版は第3章の最後で紹介）。
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
public/
└── videos/                 スライドで使う動画（とサムネ画像）を置くフォルダ
src/
├── main.js                 エントリーポイント
├── core/
│   ├── Deck.js / .scss     ページ送り・拡大縮小・キーボード操作・動画モーダルの連携
│   ├── html.js             HTML を組み立てる小さなヘルパー
│   └── media.js            動画フォルダの場所と URL の組み立て
├── components/
│   ├── index.js            部品をまとめて export
│   ├── layouts/            スライドの型（表紙・中扉・本文）
│   ├── content/            スライドの中に置く部品（カード・表・図・動画サムネなど）
│   └── ui/                 操作パネル・進捗バー・目次・動画モーダル
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
| `VideoThumb` | 動画のサムネ。クリックでモーダルを開いて再生（`public/videos/` の動画を呼び出す） |
| `ScopeTag` / `ScopeLegend` | 「Claude Code 専用 / claude.ai 専用 / 共通」のラベルと、その凡例 |
| `VscodeMock` | VS Code と Claude パネルのイメージ図（番号つき） |

### 動画を載せる

動画は **`public/videos/`** フォルダに置き、スライドからはファイル名で呼び出します。
サムネをクリックすると、画面中央のモーダルで再生されます（Esc・×・背景クリックで閉じる）。

```js
import { ContentSlide, Columns, BulletList, VideoThumb } from '../components/index.js';

ContentSlide({
  title: 'インストールの流れ',
  body: Columns({
    left: BulletList({ items: ['拡張機能を入れる', 'サインインする'] }),
    right: VideoThumb({
      file: 'install.mp4',        // public/videos/install.mp4
      poster: 'install.jpg',      // 省略可。省略すると動画の最初のコマをサムネにする
      title: 'インストールのデモ',  // モーダルの見出し
      caption: 'クリックで再生',    // 省略可
    }),
  }),
});
```

- ファイルが見つからないときは、サムネに「動画ファイルが見つかりません」と表示されます。
- `npm run build` で `dist/videos/`、`npm run build:single` で `dist-single/videos/` にコピーされます。
  **`build:single` の HTML は、同じ場所の `videos/` フォルダごと配布してください**（動画は HTML に埋め込まれません）。
- 動画は容量が大きくなりがちです。GitHub は 1 ファイル 100MB までなので、大きい場合は圧縮するか、リポジトリに入れずに別途配布してください。
- ブラウザで再生できる形式（mp4 / H.264 がおすすめ）を使ってください。

### 対応製品のラベル

スライド・カード・章扉・表の中に、「その内容がどの製品で使えるか」を示すラベルを付けられます。

| ラベル | 値 | 意味 |
| --- | --- | --- |
| Claude Code 専用 | `'code'` | Claude Code（VS Code 拡張機能・ターミナル）でだけ使える |
| claude.ai 専用 | `'chat'` | claude.ai（Web・デスクトップ・モバイルのチャット）でだけ使える |
| どちらでも使える（共通） | `'both'` | どちらでも使える |

```js
ContentSlide({ scope: 'code', title: '…', body: … });   // スライドの右上に表示
Card({ scope: 'chat', title: '…' });                      // カードの右上に表示
SectionSlide({ scope: 'both', number: '01', title: '…' }); // 章扉に表示
```

表やリストの文中に入れるときは `ScopeTag('code', { compact: true })` を文字列に埋め込みます。

色は `tone`（`accent` / `blue` / `green` / `yellow`）で指定できます。

## 内容について

料金・利用上限などは 2026年時点の情報をもとにしています。変更されることがあるので、発表前に
[料金プラン](https://claude.com/pricing) や [Claude Code ドキュメント](https://code.claude.com/docs) で確認してください。
