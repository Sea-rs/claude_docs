// 章ファイルをこの順番で並べてスライドにする。
// 章を追加・並べ替えるときは、ここの配列を編集する。
import opening from './00-opening.js';
import aboutClaude from './01-about-claude.js';
import claudeAi from './02-claude-ai.js';
import commands from './03-commands.js';
import tokensSeats from './04-tokens-seats.js';
import limits from './05-limits.js';
import skillsMd from './06-skills-md.js';
import closing from './07-closing.js';

const chapters = [opening, aboutClaude, claudeAi, commands, tokensSeats, limits, skillsMd, closing];

export const slides = chapters.flatMap((chapter) =>
  chapter.slides.map((slide) => ({ ...slide, section: chapter.section })),
);
