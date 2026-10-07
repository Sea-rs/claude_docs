import { TitleSlide, ContentSlide, Card, CardGrid } from '../components/index.js';

export default {
  section: 'はじめに',
  slides: [
    TitleSlide({
      eyebrow: '初心者向け入門講座',
      title: 'はじめての<br>Claude Code',
      subtitle: 'VS Code で AI と一緒に開発するための基礎知識',
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
            text: 'Claude と Claude Code の全体像、得意・不得意',
          }),
          Card({
            badge: '02',
            title: 'VS Code での操作とコマンド',
            text: 'パネルの使い方、@ と / の入力、ショートカット、巻き戻し',
            tone: 'blue',
          }),
          Card({
            badge: '03',
            title: 'トークンとシート',
            text: 'AI の「量」を表すトークンと、組織向けプランの「シート」',
            tone: 'green',
          }),
          Card({
            badge: '04',
            title: '利用制限',
            text: '5時間・週ごとの上限と、コストが重くなる作業の例',
            tone: 'yellow',
          }),
          Card({
            badge: '05',
            title: 'スキルと md ファイル',
            text: 'CLAUDE.md・SKILL.md など、Claude Code を育てる設定ファイル',
          }),
        ],
      }),
    }),
  ],
};
