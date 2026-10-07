import {
  SectionSlide,
  ContentSlide,
  BulletList,
  Callout,
  Card,
  CardGrid,
  Columns,
  CompareTable,
  Meter,
  TokenDemo,
} from '../components/index.js';

const KICKER = '02 ／ トークンとシート';

export default {
  section: '02 トークンとシート',
  slides: [
    SectionSlide({
      number: '02',
      title: 'トークンとシート',
      lead: 'AI の「量」と「契約」を表す、2つの基本用語',
    }),

    ContentSlide({
      kicker: KICKER,
      title: 'トークンとは？',
      lead: 'AI が文章を読み書きするときの最小単位。文章は細かい「かけら」に分けて処理されます',
      body: [
        TokenDemo({
          examples: [
            { label: '英語', tokens: ['Hello', ',', ' world', '!'] },
            { label: '日本語', tokens: ['Claude', 'で', '開発', 'を', '効率', '化', 'しよう'] },
          ],
        }),
        Callout({
          type: 'info',
          title: '目安',
          text: '英語は 1単語 ≒ 1〜1.5トークン、日本語は 1文字 ≒ 1トークン前後。分け方はモデルによって異なります（上の図はイメージです）。',
        }),
      ],
    }),

    ContentSlide({
      kicker: KICKER,
      title: '入力トークンと出力トークン',
      lead: 'AI の利用量や料金は「どれだけのトークンを処理したか」で決まります',
      body: [
        CardGrid({
          columns: 2,
          cards: [
            Card({
              badge: '入力（Input）',
              title: 'Claude が読む量',
              items: [
                'あなたの指示',
                '読み込んだファイルの中身',
                'これまでの会話の履歴',
                'CLAUDE.md などの設定',
              ],
              tone: 'blue',
            }),
            Card({
              badge: '出力（Output）',
              title: 'Claude が書く量',
              items: ['Claude の回答', '作成・編集したコード', '作業の途中で考えた内容'],
              tone: 'green',
            }),
          ],
        }),
        Callout({
          type: 'warn',
          text: '会話を続けるほど、それまでの履歴も入力として毎回読み直されます。<strong>長い会話ほど1回あたりの消費が増える</strong>点に注意しましょう。',
        }),
      ],
    }),

    ContentSlide({
      kicker: KICKER,
      title: 'コンテキストウィンドウ = AI の作業机',
      lead: 'Claude が一度に覚えておける情報量の上限。標準的なモデルで約20万トークン',
      body: [
        Meter({
          label: 'コンテキストウィンドウの使われ方（例）',
          total: 200000,
          segments: [
            { label: 'システム・ツールの説明', value: 20000, tone: 'yellow' },
            { label: 'CLAUDE.md・スキル一覧', value: 8000, tone: 'green' },
            { label: '読み込んだファイル', value: 52000, tone: 'blue' },
            { label: '会話の履歴', value: 60000, tone: 'accent' },
            { label: '空き', value: 60000 },
          ],
        }),
        Callout({
          type: 'info',
          text: '机がいっぱいになると、古い会話が自動で要約されて場所が空けられます（自動コンパクト）。そのとき細かい情報が抜け落ちることも。<code>/context</code> で今の使用状況を確認できます。',
        }),
      ],
    }),

    ContentSlide({
      kicker: KICKER,
      title: 'トークンを節約するコツ',
      body: CardGrid({
        columns: 2,
        cards: [
          Card({
            badge: '/clear',
            title: '作業ごとに会話を区切る',
            text: '別の作業に移るときは会話をリセット。関係ない履歴を読み直さずに済みます',
          }),
          Card({
            badge: '/compact',
            title: '長い会話は要約する',
            text: '続きの作業が必要なときは、会話を要約して机の上を片付けます',
            tone: 'blue',
          }),
          Card({
            badge: '具体的に',
            title: '場所や対象をはっきり伝える',
            text: '「src/login.js の送信処理」のように指定すると、余計なファイルを探し回らずに済みます',
            tone: 'green',
          }),
          Card({
            badge: 'CLAUDE.md',
            title: '設定ファイルは簡潔に',
            text: '毎回読み込まれるので、本当に必要なルールだけを書きます',
            tone: 'yellow',
          }),
        ],
      }),
    }),

    ContentSlide({
      kicker: KICKER,
      title: 'シートとは？',
      lead: '組織向けプランでの「1人分の利用権（ライセンス）」のこと',
      body: Columns({
        ratio: '1fr 1fr',
        left: [
          BulletList({
            items: [
              'Team / Enterprise プランは「シート数」単位で契約する',
              '管理者がメンバーにシートを割り当てる',
              'シートの種類によって、使える機能や利用量が変わる',
              '個人プラン（Pro / Max）にはシートの考え方はない',
            ],
          }),
          Callout({
            type: 'tip',
            text: '映画館の「座席（シート）」をイメージ。確保した座席の数だけ、メンバーが利用できます。',
          }),
        ],
        right: [
          Card({
            badge: 'Standard シート',
            title: 'チャット中心の標準シート',
            text: 'claude.ai でのチャットや共同作業機能が中心。費用を抑えたいメンバー向け',
            tone: 'blue',
          }),
          Card({
            badge: 'Premium シート',
            title: 'Claude Code まで使えるシート',
            text: 'Claude Code を含み、利用量も多い。開発者にはこちらを割り当てます',
            highlight: true,
          }),
        ],
      }),
    }),

    ContentSlide({
      kicker: KICKER,
      title: 'プランの全体像',
      body: CompareTable({
        compact: true,
        headers: ['プラン', '対象', '料金の目安', 'Claude Code'],
        highlightColumn: 3,
        rows: [
          ['Free', 'お試し', '無料', '×'],
          ['Pro', '個人', '月額 $20', '○'],
          ['Max', 'たくさん使う個人', '月額 $100 / $200', '○（Pro の約5倍 / 約20倍）'],
          ['Team', '5名以上の組織', 'シート単位', '○（Premium シート）'],
          ['Enterprise', '大規模な組織', '要問い合わせ', '○'],
          ['API', '開発者・システム連携', 'トークン量に応じた従量課金', '○（API キーで利用）'],
        ],
      }),
      note: '※ 2026年時点の概要です。料金や内容は変わることがあるため、最新情報は公式サイト（claude.com/pricing）で確認してください。',
    }),
  ],
};
