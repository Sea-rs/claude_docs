import {
  SectionSlide,
  ContentSlide,
  BulletList,
  Callout,
  Card,
  CardGrid,
  Columns,
  CompareTable,
  FlowDiagram,
  ScopeTag,
  Timeline,
} from '../components/index.js';

const KICKER = '01 ／ Claude とは？';

export default {
  section: '01 Claude とは？',
  slides: [
    SectionSlide({
      number: '01',
      title: 'Claude とは？',
      lead: 'claude.ai と Claude Code、2つの使い方の全体像をつかもう',
      scope: 'both',
    }),

    ContentSlide({
      kicker: KICKER,
      scope: 'both',
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
      scope: 'both',
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
          text: 'claude.ai では入力欄のモデル選択から、Claude Code では <code>/model</code> でモデルを切り替えられます。高性能なモデルほど、利用量（後述）の消費も大きくなります。',
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
            text: 'Web ブラウザ・デスクトップアプリ・スマホアプリで使えるチャット形式の Claude（第2章）',
            tone: 'blue',
          }),
          Card({
            badge: 'コードを書く人に',
            title: 'Claude Code',
            text: 'VS Code などのエディタ拡張やターミナルで動く、コードを書く人向けのツール（第3章）',
            highlight: true,
          }),
          Card({
            badge: 'システム連携',
            title: 'Claude API',
            text: '自分たちのサービスやアプリに Claude を組み込むためのプログラム用の窓口',
            tone: 'green',
          }),
        ],
      }),
    }),

    ContentSlide({
      kicker: KICKER,
      scope: 'code',
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
            text: 'ファイルの変更やコマンドの実行の前には、原則として許可を求めます。VS Code では変更前後を並べた差分が開くので、内容を確認して承認・却下を選びましょう。',
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
          ['作業する場所', 'ブラウザやアプリの画面', 'VS Code などのエディタ内（ターミナルも可）'],
          ['コードの扱い', '回答をコピーして自分で貼り付ける', 'ファイルを直接読み書きする'],
          ['コマンド実行', 'あなたのパソコンでは実行しない', '実行して結果まで確認する'],
          ['見られる範囲', '会話に貼り付けた内容', 'プロジェクトのフォルダ全体'],
          ['得意なこと', '相談・文章作成・アイデア出し', '実装・修正・調査・作業の自動化'],
        ],
      }),
    }),

    ContentSlide({
      kicker: KICKER,
      scope: 'code',
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
          text: '途中で方向がずれたら、Stop ボタンか <code>Esc</code> キーで止めて、指示を出し直せます。',
        }),
      ],
    }),

    ContentSlide({
      kicker: KICKER,
      scope: 'both',
      title: 'Claude の得意なこと・苦手なこと',
      lead: '得意・不得意を知っておくと、任せどころと確認どころが分かります',
      body: [
        Columns({
          ratio: '1fr 1fr',
          left: Card({
            badge: '得意',
            title: '任せるとはかどる',
            items: [
              '知らないコードを読んで説明する',
              'テスト・ドキュメントなど定型的な作成',
              '同じ変更を多数のファイルに繰り返す',
              'エラーの原因調査と修正案の提示',
              '文章の要約・翻訳・整理',
            ],
            tone: 'green',
            highlight: true,
          }),
          right: Card({
            badge: '苦手・注意',
            title: '人の確認や補助が必要',
            items: [
              '書かれていない社内ルールや背景は分からない',
              '知識カットオフ（学習データの期限）より新しい情報は知らない',
              'もっともらしい間違いを言うことがある',
              '長い作業で、最初の指示を忘れることがある',
              '画面の見た目や実機での動作は自分で確かめられない',
            ],
            tone: 'yellow',
            highlight: true,
          }),
        }),
        Callout({
          type: 'warn',
          text: '最終的な判断と責任は人にあります。特に本番環境・お金・セキュリティに関わる変更は、必ず自分の目で確認しましょう。',
        }),
      ],
    }),

    ContentSlide({
      kicker: KICKER,
      scope: 'both',
      title: '知識カットオフ：Claude が知らない「最近のこと」',
      lead: 'Claude は、学習に使ったデータの「期限」までのことしか知りません。この期限を知識カットオフと呼びます',
      body: [
        Timeline({
          items: [
            { time: '学習', title: 'データを集めて学習', text: 'Web 上の文章などから学ぶ' },
            { time: 'カットオフ', title: '知識の期限', text: 'ここまでの出来事は知っている', tone: 'green' },
            { time: '公開', title: 'モデルが公開される', text: '通常は期限の数か月あとになる', tone: 'blue' },
            { time: '現在', title: 'あなたが使う時点', text: '期限より新しい出来事は知らない', tone: 'yellow' },
          ],
        }),
        Columns({
          ratio: '1fr 1fr',
          left: Callout({
            type: 'warn',
            title: 'たとえば',
            text: '最近のニュース、新しい料金プラン、新しく出たライブラリの機能を聞くと、古い情報で自信ありげに答えてしまうことがあります。',
          }),
          right: Callout({
            type: 'info',
            title: '期限はモデルごとに違う',
            text: '新しいモデルほど、新しい情報まで知っています。具体的な時期は、公式のモデル一覧で確認できます。',
          }),
        }),
      ],
    }),

    ContentSlide({
      kicker: KICKER,
      scope: 'both',
      title: '知識カットオフへの対策',
      lead: '「知らないかもしれない」と考えて、必要な情報は自分で渡しましょう',
      body: CompareTable({
        compact: true,
        headers: ['困りごと', '例', '対策'],
        highlightColumn: 2,
        rows: [
          ['最新の情報を知らない', '新製品・料金の改定・最近のニュース', `Web 検索を使わせる ${ScopeTag('both', { compact: true })}`],
          ['新しい仕様を知らない', 'ライブラリの新バージョンの書き方や設定名', `公式ドキュメントの URL や該当ページを渡す。claude.ai は添付、Claude Code は <code>@</code> や URL `],
          ['古い書き方を提案する', '廃止された機能や、古い設定方法', `使っているバージョンを伝える。実際に動かして確認する ${ScopeTag('code', { compact: true })}`],
          ['「今日」を取り違える', '年や日付が関わる計算・判断', '今日の日付を会話に書いておく'],
        ],
      }),
      note: '※ 知識カットオフは、会話の長さの上限（コンテキストウィンドウ、第4章）とは別のものです。',
    }),

    ContentSlide({
      kicker: KICKER,
      scope: 'both',
      title: '苦手なことは、使い方で補える',
      body: CompareTable({
        headers: ['苦手なこと', 'こう補う', '関連する章'],
        highlightColumn: 1,
        rows: [
          ['社内ルールや背景を知らない', `Project instructions に書く ${ScopeTag('chat', { compact: true })}<br>CLAUDE.md に書く ${ScopeTag('code', { compact: true })}`, '第6章'],
          ['知識カットオフ以降の情報を知らない', 'Web 検索を使う・公式ドキュメントの URL を渡す', '次の2ページ'],
          ['もっともらしい間違い', 'テストを実行させる・根拠を聞く', '—'],
          ['長い作業で指示を忘れる', '小さく区切る・新しい会話で仕切り直す', '第4章'],
          ['見た目や実機の確認', '画面は自分で確認する・スクリーンショットを見せる', '—'],
        ],
      }),
    }),
  ],
};
