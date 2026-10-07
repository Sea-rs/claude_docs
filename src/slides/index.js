// 章ファイルをこの順番で並べてスライドにする。
// 章を追加・並べ替えるときは、ここの配列を編集する。
import opening from './00-opening.js';
import aboutClaude from './01-about-claude.js';
import tokensSeats from './02-tokens-seats.js';
import limits from './03-limits.js';
import skillsMd from './04-skills-md.js';
import closing from './05-closing.js';

const chapters = [opening, aboutClaude, tokensSeats, limits, skillsMd, closing];

export const slides = chapters.flatMap((chapter) =>
  chapter.slides.map((slide) => ({ ...slide, section: chapter.section })),
);
