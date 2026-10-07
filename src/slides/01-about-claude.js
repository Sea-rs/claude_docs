import {
  SectionSlide,
  ContentSlide,
  BulletList,
  Callout,
  Card,
  CardGrid,
  Columns,
  CodeBlock,
  CompareTable,
  FlowDiagram,
} from '../components/index.js';

const KICKER = '01 ／ Claude とは？';

export default {
  section: '01 Claude とは？',
  slides: [
    SectionSlide({
      number: '01',
      title: 'Claude とは？',
      lead: 'Claude と Claude Code の全体像をつかもう',
    }),

    ContentSlide({
      kicker: KICKER,
      title: 'Claude は Anthropic が開発した AI アシスタント',
      body: Columns({
        ratio: '3fr 2fr',
        left: BulletList({
          items: [
            '人と自然な文章でやり取りできる<strong>大規模言語モデル（LLM）</strong>',
            '文章作成・要約・翻訳・分析・プログラミングなど幅広い作業に対応',
            '画像や PDF などのファイルも読み取って理解できる',
            '安全性と信頼性を重視して設計されている',
          ],
        }),
        right: Callout({
          type: 'tip',
          title: 'LLM（大規模言語モデル）とは？',
          text: '大量の文章から言葉のつながりを学習し、「次に来る言葉」を予測しながら文章を生み出す AI のこと。Claude の頭脳にあたる部分です。',
        }),
      }),
    }),

    ContentSlide({
      kicker: KICKER,
      title: 'モデルは用途に合わせて3種類',
      lead: '同じ Claude でも「頭脳」の種類を選べます',
      body: [
        CardGrid({
          columns: 3,
          cards: [
            Card({
              badge: '最高性能',
              title: 'Opus',
              text: '複雑な設計や難しい調査など、じっくり考える必要があるタスク向け',
            }),
            Card({
              badge: 'バランス型',
              title: 'Sonnet',
              text: '性能と速さのバランスが良い。日常の開発作業の主力',
              tone: 'blue',
            }),
            Card({
              badge: '高速・軽量',
              title: 'Haiku',
              text: '素早い応答が欲しい作業や、大量の簡単な処理向け',
              tone: 'green',
            }),
          ],
        }),
        Callout({
          type: 'info',
          text: 'Claude Code では <code>/model</code> コマンドでモデルを切り替えられます。高性能なモデルほど、利用量（後述）の消費も大きくなります。',
        }),
      ],
    }),

    ContentSlide({
      kicker: KICKER,
      title: 'Claude を使う3つの入り口',
      body: CardGrid({
        columns: 3,
        cards: [
          Card({
            badge: 'だれでも',
            title: 'claude.ai',
            text: 'Web ブラウザ・デスクトップアプリ・スマホアプリで使えるチャット形式の Claude',
            tone: 'blue',
          }),
          Card({
            badge: '今日の主役',
            title: 'Claude Code',
            text: 'ターミナル・エディタ（VS Code など）・デスクトップアプリで動く、開発者向けのツール',
            highlight: true,
          }),
          Card({
            badge: '開発者向け',
            title: 'Claude API',
            text: '自分たちのサービスやアプリに Claude を組み込むためのプログラム用の窓口',
            tone: 'green',
          }),
        ],
      }),
    }),

    ContentSlide({
      kicker: KICKER,
      title: 'Claude Code とは？',
      lead: 'あなたのパソコンの中で、実際に手を動かしてくれる「エージェント型」のコーディングアシスタント',
      body: Columns({
        ratio: '1fr 1fr',
        left: BulletList({
          heading: 'できること',
          items: [
            'プロジェクトのコードを読んで理解する',
            'ファイルを作成・編集する',
            'テストやビルドなどのコマンドを実行する',
            'Git の操作（差分の確認・コミットなど）',
            '調べものをして、やり方を提案する',
          ],
        }),
        right: [
          Callout({
            type: 'warn',
            title: '勝手に何でもするわけではない',
            text: 'ファイルの変更やコマンドの実行の前には、原則としてあなたに許可を求めます。内容を確認してから「はい」を選びましょう。',
          }),
          Callout({
            type: 'tip',
            text: '指示は日本語で OK。「ログイン画面にパスワード表示ボタンを追加して」のように、やりたいことを普段の言葉で伝えます。',
          }),
        ],
      }),
    }),

    ContentSlide({
      kicker: KICKER,
      title: 'チャット AI との違い',
      body: CompareTable({
        headers: ['', 'チャット（claude.ai）', 'Claude Code'],
        highlightColumn: 2,
        rows: [
          ['作業する場所', 'ブラウザやアプリの画面', 'ターミナル・エディタ'],
          ['コードの扱い', '回答をコピーして自分で貼り付ける', 'ファイルを直接読み書きする'],
          ['コマンド実行', 'あなたのパソコンでは実行しない', '実行して結果まで確認する'],
          ['見られる範囲', '会話に貼り付けた内容', 'プロジェクトのフォルダ全体'],
          ['得意なこと', '相談・文章作成・アイデア出し', '実装・修正・調査・作業の自動化'],
        ],
      }),
    }),

    ContentSlide({
      kicker: KICKER,
      title: 'エージェントはこう動く',
      lead: '1回答えて終わりではなく、目的を達成するまで自分で考えて行動を繰り返します',
      body: [
        FlowDiagram({
          steps: [
            { title: '依頼を受ける', text: 'あなたがやりたいことを伝える' },
            { title: '計画する', text: '何をどの順で進めるか考える' },
            { title: 'ツールを使う', text: 'ファイルを読む・編集する・コマンドを実行する' },
            { title: '結果を確認する', text: 'テスト結果やエラーを見て次の行動を決める' },
          ],
          loopLabel: '目的を達成するまで繰り返す',
        }),
        Callout({
          type: 'tip',
          text: '途中で方向がずれたら <code>Esc</code> キーで止めて、指示を出し直せます。',
        }),
      ],
    }),

    ContentSlide({
      kicker: KICKER,
      title: 'はじめかた',
      body: Columns({
        ratio: '1fr 1fr',
        left: [
          CodeBlock({
            filename: 'ターミナル',
            lang: 'shell',
            code: `
# インストール（macOS / Linux / WSL）
curl -fsSL https://claude.ai/install.sh | bash

# インストール（Windows PowerShell）
irm https://claude.ai/install.ps1 | iex

# プロジェクトのフォルダで起動
cd my-project
claude
`,
          }),
          Callout({
            type: 'info',
            text: '初回起動時にブラウザが開き、Claude のアカウントでログインします。',
          }),
        ],
        right: CompareTable({
          compact: true,
          headers: ['操作', 'できること'],
          rows: [
            ['<code>/help</code>', '使えるコマンドの一覧'],
            ['<code>/init</code>', 'CLAUDE.md のひな形を作る'],
            ['<code>/clear</code>', '会話をリセットする'],
            ['<code>/model</code>', 'モデルを切り替える'],
            ['<code>Esc</code>', '実行中の作業を止める'],
            ['<code>Shift</code>+<code>Tab</code>', 'モード切替（計画モードなど）'],
          ],
        }),
      }),
    }),
  ],
};
