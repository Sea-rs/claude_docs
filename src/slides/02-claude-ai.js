import {
  SectionSlide,
  ContentSlide,
  BulletList,
  Callout,
  Card,
  CardGrid,
  Columns,
  CompareTable,
} from '../components/index.js';

const KICKER = '02 ／ claude.ai の使い方';

export default {
  section: '02 claude.ai の使い方',
  slides: [
    SectionSlide({
      number: '02',
      title: 'claude.ai の使い方',
      lead: 'ブラウザやアプリで使う、チャット形式の Claude',
      scope: 'chat',
    }),

    ContentSlide({
      kicker: KICKER,
      scope: 'chat',
      title: 'claude.ai はどこで使える？',
      lead: '同じアカウントなら、どこから使っても会話の履歴は共通です',
      body: [
        CardGrid({
          columns: 3,
          cards: [
            Card({
              badge: 'いちばん手軽',
              title: 'Web ブラウザ',
              text: 'claude.ai にログインするだけ。インストール不要で、すぐに使い始められる',
              tone: 'blue',
            }),
            Card({
              badge: 'PC で常用',
              title: 'デスクトップアプリ',
              text: 'Windows / Mac 用のアプリ。ブラウザとは別に、いつでも呼び出して使える',
            }),
            Card({
              badge: '外出先で',
              title: 'モバイルアプリ',
              text: 'iPhone / Android 用。スマホで撮った写真を見せて質問することもできる',
              tone: 'green',
            }),
          ],
        }),
        Callout({
          type: 'warn',
          text: 'claude.ai のチャットと Claude Code は、<strong>同じ利用枠</strong>を使います。チャットでたくさん使うと、Claude Code で使える量も減ります（第5章）。',
        }),
      ],
    }),

    ContentSlide({
      kicker: KICKER,
      scope: 'chat',
      title: 'チャットでできること',
      lead: '話しかけるだけでなく、ファイルや外部サービスも使えます',
      body: CardGrid({
        columns: 3,
        cards: [
          Card({
            title: '相談・文章づくり',
            text: '要約・翻訳・下書き・アイデア出し。まずはここから',
          }),
          Card({
            title: 'ファイルを添付',
            text: 'PDF・画像・表計算・コードなどを添付して、内容について質問できる',
            tone: 'blue',
          }),
          Card({
            title: 'Web 検索',
            text: '最新の情報をネットで調べて、回答に反映する',
            tone: 'green',
          }),
          Card({
            badge: '有料プラン',
            title: 'リサーチ',
            text: '複数の情報源をまとめて調べ、整理したレポートにする。そのぶん利用量は多め',
            tone: 'yellow',
          }),
          Card({
            title: 'ファイルを作る・直す',
            text: '資料やデータファイルを作成・編集して、ダウンロードできる（コード実行を有効にして使う）',
          }),
          Card({
            title: 'コネクタ',
            text: 'カレンダーや社内ツールなど、外部のアプリにつないで情報を取得・操作する',
            tone: 'blue',
          }),
        ],
      }),
    }),

    ContentSlide({
      kicker: KICKER,
      scope: 'chat',
      title: 'Projects：資料と指示をまとめて覚えさせる',
      lead: '案件やテーマごとの「専用の作業部屋」を作れます',
      body: Columns({
        ratio: '1fr 1fr',
        left: [
          BulletList({
            items: [
              'プロジェクトごとに、<strong>資料</strong>と<strong>指示</strong>を登録できる',
              'そのプロジェクトの中のチャットすべてに、同じ前提が効く',
              '毎回同じ説明を貼り直さなくてよくなる',
            ],
          }),
          Callout({
            type: 'tip',
            text: '同じ資料を使い回すと、2回目以降は利用量が少なめに数えられます（キャッシュ。しばらく使わないと失効）。',
          }),
        ],
        right: [
          Card({
            badge: 'Project knowledge',
            title: '資料（ナレッジ）',
            text: '仕様書・議事録・コードなどのファイル。必要な部分が参照される',
            tone: 'blue',
          }),
          Card({
            badge: 'Project instructions',
            title: '指示',
            text: '「丁寧語で答える」「この役割で答える」など、このプロジェクトでのルール',
            highlight: true,
          }),
        ],
      }),
    }),

    ContentSlide({
      kicker: KICKER,
      scope: 'chat',
      title: 'Artifacts：作ったものが横に開く',
      lead: '会話の中で作った成果物が、チャットの横に開いて、その場で直したり共有したりできます',
      body: [
        CardGrid({
          columns: 3,
          cards: [
            Card({
              title: '文書・スライド・図',
              text: 'レポート、プレゼン資料、フローチャートなど。有料プランではテンプレートから始められる',
            }),
            Card({
              title: 'ダッシュボード',
              text: 'データを貼ると、グラフ付きの画面を作ってくれる',
              tone: 'blue',
            }),
            Card({
              title: '小さなアプリ',
              text: 'ツールやミニゲームなど、操作できるものを会話だけで作れる',
              tone: 'green',
            }),
          ],
        }),
        Callout({
          type: 'info',
          text: '作ったものはサイドバーの「Artifacts」にまとまり、あとから開き直せます。Free プランでも使えます。',
        }),
      ],
    }),

    ContentSlide({
      kicker: KICKER,
      scope: 'chat',
      title: 'メモリー・履歴検索・シークレットチャット',
      lead: '「覚えてほしいこと」と「残したくないこと」を使い分けます',
      body: [
        CardGrid({
          columns: 3,
          cards: [
            Card({
              badge: 'メモリー',
              title: '好みや前提を覚える',
              text: '会話から役割や書き方の好みを覚え、次回以降に活かす。Team / Enterprise では管理者の許可が必要',
            }),
            Card({
              badge: '有料プラン',
              title: '過去のチャットを検索',
              text: '「前に相談したあの件」を、チャット履歴から探して続きができる',
              tone: 'blue',
            }),
            Card({
              badge: 'シークレット',
              title: '履歴にもメモリーにも残さない',
              text: '一時的な会話。履歴には出ないが、サーバー側には一定期間（標準で30日）保管される',
              tone: 'yellow',
            }),
          ],
        }),
        Callout({
          type: 'warn',
          text: '仕事の機密情報や個人情報をどこまで入力してよいかは、会社のルールに従ってください。',
        }),
      ],
    }),

    ContentSlide({
      kicker: KICKER,
      scope: 'both',
      title: 'claude.ai と Claude Code の使い分け',
      lead: '同じアカウントで両方使えます。作業に合わせて選びましょう',
      body: CompareTable({
        compact: true,
        headers: ['やりたいこと', 'claude.ai', 'Claude Code'],
        rows: [
          ['文章の相談・要約・翻訳', '◎', '○'],
          ['調べもの（Web 検索・リサーチ）', '◎', '○'],
          ['資料・スライド・小さなアプリを作る', '◎（Artifacts）', '△'],
          ['コードを読んで修正し、テストまで実行する', '△', '◎'],
          ['手元のプロジェクトのファイルをまとめて編集する', '△', '◎'],
          ['繰り返し作業の自動化（スクリプトなど）', '—', '◎'],
        ],
      }),
      note: '◎ 得意　○ できる　△ 手間がかかる／向かない　— できない（またはほぼ使わない）',
    }),
  ],
};
