// 章ファイルをこの順番で並べてスライドにする。
// 章を追加・並べ替えるときは、ここの配列を編集する。
import opening from './00-opening.js';
import aboutClaude from './01-about-claude.js';
import commands from './02-commands.js';
import tokensSeats from './03-tokens-seats.js';
import limits from './04-limits.js';
import skillsMd from './05-skills-md.js';
import closing from './06-closing.js';

const chapters = [opening, aboutClaude, commands, tokensSeats, limits, skillsMd, closing];

export const slides = chapters.flatMap((chapter) =>
  chapter.slides.map((slide) => ({ ...slide, section: chapter.section })),
);
