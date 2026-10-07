import { TitleSlide, ContentSlide, Card, CardGrid } from '../components/index.js';

export default {
  section: 'はじめに',
  slides: [
    TitleSlide({
      eyebrow: '初心者向け入門講座',
      title: 'はじめての<br>Claude Code',
      subtitle: 'AI と一緒に開発するための基礎知識',
      meta: '← → キーでページ送り ／ T キーで目次 ／ F キーで全画面',
    }),

    ContentSlide({
      kicker: 'AGENDA',
      title: '今日お話しすること',
      body: CardGrid({
        columns: 2,
        cards: [
          Card({
            badge: '01',
            title: 'Claude とは？',
            text: 'Claude と Claude Code の全体像、チャット AI との違い',
          }),
          Card({
            badge: '02',
            title: 'トークンとシート',
            text: 'AI の「量」を表すトークンと、組織向けプランの「シート」',
            tone: 'blue',
          }),
          Card({
            badge: '03',
            title: '利用制限',
            text: '5時間・週ごとの上限の仕組みと、上手な付き合い方',
            tone: 'yellow',
          }),
          Card({
            badge: '04',
            title: 'スキルと md ファイル',
            text: 'CLAUDE.md・SKILL.md など、Claude Code を育てる設定ファイル',
            tone: 'green',
          }),
        ],
      }),
    }),
  ],
};
