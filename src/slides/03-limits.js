import {
  SectionSlide,
  ContentSlide,
  BulletList,
  Callout,
  Card,
  CardGrid,
  Columns,
  CodeBlock,
  Timeline,
} from '../components/index.js';

const KICKER = '03 ／ 利用制限';

export default {
  section: '03 利用制限',
  slides: [
    SectionSlide({
      number: '03',
      title: '利用制限',
      lead: '「使い放題」ではない理由と、上手な付き合い方',
    }),

    ContentSlide({
      kicker: KICKER,
      title: 'なぜ利用制限があるの？',
      body: Columns({
        ratio: '3fr 2fr',
        left: BulletList({
          items: [
            'AI を動かすには、大量の計算資源（GPU）が必要',
            'すべての利用者が快適に使えるよう、1人あたりの利用量に上限がある',
            {
              text: '上限は「メッセージの回数」ではなく<strong>処理したトークン量</strong>で決まる',
              sub: ['短いやり取りなら多く、重い作業なら少なく使える'],
            },
            '上限はプランによって異なる（Max は Pro の約5倍・約20倍）',
          ],
        }),
        right: Callout({
          type: 'warn',
          title: '利用枠は共通',
          text: 'claude.ai のチャットと Claude Code は、同じ利用枠を使います。チャットでたくさん使うと、Claude Code で使える量も減ります。',
        }),
      }),
    }),

    ContentSlide({
      kicker: KICKER,
      title: '上限は2種類ある',
      body: [
        CardGrid({
          columns: 2,
          cards: [
            Card({
              badge: '短期の上限',
              title: '5時間ごとの上限',
              text: '最初のメッセージを送った時点から5時間の枠。5時間たつとリセットされます',
            }),
            Card({
              badge: '長期の上限',
              title: '週ごとの上限',
              text: '7日間の合計利用量の上限。毎日長時間使い続ける場合に関係してきます',
              tone: 'blue',
            }),
          ],
        }),
        Timeline({
          items: [
            { time: '10:00', title: '最初のメッセージ', text: 'ここから5時間の枠が始まる' },
            { time: '12:30', title: '作業中', text: '枠の中で自由に使える', tone: 'blue' },
            { time: '14:10', title: '上限に到達', text: 'リセットまで一時的に使えない', tone: 'yellow' },
            { time: '15:00', title: 'リセット', text: '次のメッセージで新しい枠が始まる', tone: 'green' },
          ],
        }),
      ],
    }),

    ContentSlide({
      kicker: KICKER,
      title: '利用量を多く消費するもの',
      body: [
        CardGrid({
          columns: 2,
          cards: [
            Card({
              title: '長く続いた会話',
              text: '履歴が毎回読み直されるため、後半ほど1回あたりの消費が大きくなる',
            }),
            Card({
              title: '大きなファイルの読み込み',
              text: '巨大なログやデータファイルをそのまま読ませると、一気に消費する',
              tone: 'blue',
            }),
            Card({
              title: '高性能なモデル（Opus）',
              text: '同じ作業でも、軽いモデルより多くの利用量を消費する',
              tone: 'yellow',
            }),
            Card({
              title: '複数のエージェントの同時実行',
              text: 'サブエージェントを並行して動かすと、その分だけ消費が増える',
              tone: 'green',
            }),
          ],
        }),
      ],
    }),

    ContentSlide({
      kicker: KICKER,
      title: '利用状況を確認する',
      body: Columns({
        ratio: '1fr 1fr',
        align: 'center',
        left: CodeBlock({
          filename: 'Claude Code の中で入力',
          lang: 'shell',
          code: `
/usage     # プランの利用状況とリセット時刻
/context   # コンテキストウィンドウの使用状況
`,
        }),
        right: BulletList({
          items: [
            'claude.ai の「設定 → 使用量」からも確認できる',
            '上限が近づくと、Claude Code の画面に警告が表示される',
            '上限に達したときは、リセットされる時刻が表示される',
          ],
        }),
      }),
    }),

    ContentSlide({
      kicker: KICKER,
      title: '上限に達してしまったら？',
      body: [
        CardGrid({
          columns: 2,
          cards: [
            Card({
              badge: '1',
              title: 'リセットを待つ',
              text: '表示されたリセット時刻を待てば、また使えるようになります',
            }),
            Card({
              badge: '2',
              title: '軽いモデルに切り替える',
              text: '<code>/model</code> で Sonnet などに切り替えると、消費を抑えながら作業を続けられます',
              tone: 'blue',
            }),
            Card({
              badge: '3',
              title: '追加利用を使う',
              text: '設定で追加利用を有効にすると、上限を超えた分を従量課金で続けられます（プランにより異なります）',
              tone: 'yellow',
            }),
            Card({
              badge: '4',
              title: 'プランを見直す',
              text: 'いつも足りないなら、Max プランや Premium シートへの変更を検討しましょう',
              tone: 'green',
            }),
          ],
        }),
      ],
      note: '※ 上限の具体的な量は、Anthropic によって随時見直されています。',
    }),
  ],
};
