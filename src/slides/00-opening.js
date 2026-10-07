import {
  TitleSlide,
  ContentSlide,
  Card,
  CardGrid,
  Callout,
  Columns,
  ScopeLegend,
} from '../components/index.js';

export default {
  section: 'はじめに',
  slides: [
    TitleSlide({
      eyebrow: '初心者向け入門講座',
      title: 'はじめての<br>Claude と Claude Code',
      subtitle: 'claude.ai と VS Code で AI と一緒に仕事をするための基礎知識',
      meta: '← → キーでページ送り ／ T キーで目次 ／ F キーで全画面',
    }),

    ContentSlide({
      kicker: 'AGENDA',
      title: '今日お話しすること',
      body: CardGrid({
        columns: 3,
        cards: [
          Card({
            badge: '01',
            title: 'Claude とは？',
            text: 'Claude の全体像、モデル、得意・不得意',
          }),
          Card({
            badge: '02',
            title: 'claude.ai の使い方',
            text: 'チャットでできること、Projects、Artifacts、メモリー',
            tone: 'blue',
          }),
          Card({
            badge: '03',
            title: 'VS Code での操作',
            text: 'Claude Code のパネルの使い方、@ と / の入力、巻き戻し',
          }),
          Card({
            badge: '04',
            title: 'トークンとシート',
            text: 'AI の「量」を表すトークンと、組織向けプランの「シート」',
            tone: 'green',
          }),
          Card({
            badge: '05',
            title: '利用制限',
            text: '5時間・週ごとの上限と、利用量が増える使い方の例',
            tone: 'yellow',
          }),
          Card({
            badge: '06',
            title: 'スキルと md ファイル',
            text: 'CLAUDE.md・SKILL.md など、Claude を自分好みに育てる仕組み',
            tone: 'blue',
          }),
        ],
      }),
    }),

    ContentSlide({
      kicker: 'HOW TO READ',
      title: 'この資料の見かた：ラベルに注目',
      lead: 'Claude には「claude.ai」と「Claude Code」があり、使える機能が少し違います。各ページの右上に、対象を示すラベルを付けています',
      body: Columns({
        ratio: '3fr 2fr',
        align: 'center',
        left: ScopeLegend(),
        right: Callout({
          type: 'tip',
          title: '迷ったら',
          text: '自分が使っているのがチャット画面なら「claude.ai 専用」と「共通」、VS Code なら「Claude Code 専用」と「共通」のページを読めば OK です。',
        }),
      }),
    }),
  ],
};
