import {
  SectionSlide,
  ContentSlide,
  BulletList,
  Callout,
  Columns,
  CodeBlock,
  CompareTable,
  FileTree,
  FlowDiagram,
  VennDiagram,
} from '../components/index.js';

const KICKER = '05 ／ スキルと md ファイル';

export default {
  section: '05 スキルと md ファイル',
  slides: [
    SectionSlide({
      number: '05',
      title: 'スキルと md ファイル',
      lead: 'Markdown ファイルに書いて、Claude Code を自分たち好みに「育てる」',
    }),

    ContentSlide({
      kicker: KICKER,
      title: 'Markdown（.md）ファイルとは？',
      body: Columns({
        ratio: '1fr 1fr',
        left: [
          BulletList({
            items: [
              '<code>#</code> で見出し、<code>-</code> で箇条書き……と、記号で文章の構造を表すシンプルなテキスト形式',
              '人にも AI にも読みやすい',
              'Claude Code は決まった場所にある .md ファイルを読んで、ふるまいを変える',
            ],
          }),
          Callout({
            type: 'tip',
            text: '特別なツールは不要。メモ帳や VS Code で編集できます。',
          }),
        ],
        right: CodeBlock({
          filename: 'example.md',
          lang: 'markdown',
          code: `
# 見出し

普通の文章はそのまま書きます。

## 小見出し

- 箇条書き その1
- 箇条書き その2

1. 番号付きリスト
2. \`コード\` はバッククォートで囲む
`,
        }),
      }),
    }),

    ContentSlide({
      kicker: KICKER,
      title: 'Claude Code で使う主なファイル',
      body: Columns({
        ratio: '3fr 2fr',
        left: FileTree({
          entries: [
            { name: '~/.claude/', dir: true, note: 'あなた個人の設定（全プロジェクト共通）' },
            { name: 'CLAUDE.md', depth: 1, note: '自分用の共通ルール' },
            { name: 'skills/', depth: 1, dir: true, note: '個人用のスキル' },
            { name: 'my-project/', dir: true, note: 'プロジェクトのフォルダ' },
            { name: 'CLAUDE.md', depth: 1, note: 'プロジェクトのルール', highlight: true },
            { name: '.claude/', depth: 1, dir: true },
            { name: 'settings.json', depth: 2, note: '権限などの設定' },
            { name: 'skills/', depth: 2, dir: true },
            { name: 'review/', depth: 3, dir: true },
            { name: 'SKILL.md', depth: 4, note: 'スキル本体', highlight: true },
            { name: 'agents/', depth: 2, dir: true },
            { name: 'tester.md', depth: 3, note: 'サブエージェント', highlight: true },
          ],
        }),
        right: [
          BulletList({
            items: [
              '<strong>CLAUDE.md</strong><br>常に守ってほしいルール',
              '<strong>SKILL.md</strong><br>特定の作業の手順書',
              '<strong>agents/*.md</strong><br>作業を任せる専門家',
            ],
          }),
          Callout({
            type: 'info',
            text: '.claude フォルダを Git で管理すれば、チーム全員で同じ設定を共有できます。',
          }),
        ],
      }),
    }),

    ContentSlide({
      kicker: KICKER,
      title: 'CLAUDE.md ＝ プロジェクトの取扱説明書',
      body: Columns({
        ratio: '1fr 1fr',
        left: [
          BulletList({
            items: [
              'Claude Code の起動時に<strong>自動で読み込まれる</strong>',
              'プロジェクトの概要・ルール・よく使うコマンドを書く',
              '<code>/init</code> で、コードを解析したひな形を自動生成できる',
              '新しく入ったメンバーに渡す「引き継ぎメモ」のイメージ',
            ],
          }),
          Callout({
            type: 'warn',
            text: '毎回読み込まれてトークンを消費するので、長くなりすぎないように。',
          }),
        ],
        right: CodeBlock({
          filename: 'CLAUDE.md',
          lang: 'markdown',
          code: `
# プロジェクト概要
社内向けの勤怠管理 Web アプリ（React + Node.js）

## よく使うコマンド
- 開発サーバー起動: \`npm run dev\`
- テスト: \`npm test\`

## ルール
- 回答とコメントは日本語で書く
- 新しい関数には必ずテストを追加する
- \`.env\` ファイルは編集しない
`,
        }),
      }),
    }),

    ContentSlide({
      kicker: KICKER,
      title: 'CLAUDE.md は置く場所で効く範囲が変わる',
      body: Columns({
        ratio: '3fr 2fr',
        align: 'center',
        left: [
          CompareTable({
            compact: true,
            headers: ['置き場所（CLAUDE.md）', '効く範囲', '向いている内容'],
            rows: [
              ['<code>~/.claude/</code>', 'すべてのプロジェクト', '自分の好み（言語など）'],
              ['<code>./</code>', 'そのプロジェクト', 'チーム共通のルール'],
              ['<code>./src/api/</code>', 'そのフォルダでの作業', '機能ごとのルール'],
            ],
          }),
          Callout({
            type: 'tip',
            text: '<code>@docs/coding-rules.md</code> のように書くと別のファイルも読み込ませられます。<code>/memory</code> で開いて編集もできます。',
          }),
        ],
        right: VennDiagram({
          size: 260,
          layers: [
            { label: '全プロジェクト', sub: '~/.claude/' },
            { label: 'このプロジェクト', sub: './' },
            { label: 'このフォルダ', sub: './src/api/' },
          ],
          caption: '内側で作業しているときは、外側のルールも一緒に効きます',
        }),
      }),
    }),

    ContentSlide({
      kicker: KICKER,
      title: 'スキルとは？',
      lead: '特定の作業のやり方をまとめた「手順書」のパッケージ',
      body: Columns({
        ratio: '1fr 1fr',
        left: BulletList({
          items: [
            '<code>.claude/skills/スキル名/SKILL.md</code> に置く',
            '依頼内容に合えば Claude が<strong>自動で使う</strong>',
            '<code>/スキル名</code> と入力して直接呼び出すこともできる',
            'スクリプトやテンプレートなどの補助ファイルも同じフォルダに置ける',
          ],
        }),
        right: FlowDiagram({
          direction: 'vertical',
          steps: [
            { title: '起動時', text: 'スキルの「名前と説明」だけを読む（軽い）' },
            { title: '依頼を受ける', text: '説明と依頼内容が合うスキルを探す' },
            { title: '必要なときだけ', text: 'SKILL.md の本文を読み込んで手順どおりに実行' },
          ],
        }),
      }),
    }),

    ContentSlide({
      kicker: KICKER,
      title: 'SKILL.md の書き方',
      body: Columns({
        ratio: '1fr 1fr',
        left: CodeBlock({
          filename: '.claude/skills/commit-message/SKILL.md',
          lang: 'markdown',
          code: `
---
name: commit-message
description: 変更内容から日本語のコミットメッセージを作る。コミットするときに使う。
---

# コミットメッセージの作り方

1. \`git diff --staged\` で変更内容を確認する
2. 1行目に50文字以内の要約を書く
3. 3行目以降に「なぜ変えたか」を書く
4. 作ったメッセージを見せて確認をもらう
`,
        }),
        right: BulletList({
          items: [
            {
              text: '<strong>name</strong>：スキルの名前',
              sub: ['<code>/commit-message</code> で呼び出せるようになる', '小文字・数字・ハイフンのみ'],
            },
            {
              text: '<strong>description</strong>：何をするか・いつ使うか',
              sub: ['Claude はこれを見て使うかどうか判断する', '一番大事な部分！'],
            },
            {
              text: '<strong>本文</strong>：具体的な手順やルール',
              sub: ['Markdown で自由に書く'],
            },
          ],
        }),
      }),
    }),

    ContentSlide({
      kicker: KICKER,
      title: 'サブエージェント（.claude/agents/*.md）',
      lead: '特定の役割を持った「専門家」を定義して、作業を任せる仕組み',
      body: Columns({
        ratio: '1fr 1fr',
        left: [
          BulletList({
            items: [
              'メインの会話とは<strong>別の作業机</strong>で動く',
              'メイン側には結果の要約だけが返ってくるので、机が散らからない',
              '調査・コードレビュー・テストなどを任せるのに便利',
            ],
          }),
          Callout({
            type: 'tip',
            text: '<code>/agents</code> コマンドを使うと、対話しながら作成できます。',
          }),
        ],
        right: CodeBlock({
          filename: '.claude/agents/code-reviewer.md',
          lang: 'markdown',
          code: `
---
name: code-reviewer
description: コードの変更をレビューし、バグや改善点を指摘する
tools: Read, Grep, Glob
---

あなたは経験豊富なレビュアーです。
変更点を確認し、重要なものから順に
理由とあわせて指摘してください。
`,
        }),
      }),
    }),

    ContentSlide({
      kicker: KICKER,
      title: '使い分けのまとめ',
      body: [
        CompareTable({
          headers: ['種類', 'ファイル', '読み込まれるタイミング', '向いている内容'],
          rows: [
            ['CLAUDE.md', '<code>CLAUDE.md</code>', '毎回（起動時）', '常に守ってほしいルール'],
            ['スキル', '<code>.claude/skills/*/SKILL.md</code>', '必要になったときだけ', '特定の作業の手順・ノウハウ'],
            ['サブエージェント', '<code>.claude/agents/*.md</code>', '作業を任せたとき', '独立して任せたい調査や確認'],
            ['設定', '<code>.claude/settings.json</code>', '毎回（起動時）', '権限などの動作設定（md ではなく JSON）'],
          ],
        }),
        Callout({
          type: 'info',
          text: '以前からある「カスタムコマンド」（<code>.claude/commands/*.md</code>）も使えますが、今は同じことをスキルで作るのがおすすめです。',
        }),
      ],
    }),
  ],
};
