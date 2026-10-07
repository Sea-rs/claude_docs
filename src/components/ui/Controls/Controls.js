import './Controls.scss';

const ICONS = {
  prev: '<path d="M15 18l-6-6 6-6" />',
  next: '<path d="M9 18l6-6-6-6" />',
  toc: '<path d="M4 6h16M4 12h16M4 18h10" />',
  fullscreen: '<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />',
};

function iconButton(name, label, shortcut) {
  const title = shortcut ? `${label}（${shortcut}）` : label;
  return `
    <button type="button" class="controls__button" data-action="${name}" aria-label="${label}" title="${title}">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]}</svg>
    </button>`;
}

/** 画面右下の操作パネル（前へ / ページ番号 / 次へ / 目次 / 全画面） */
export function createControls({ onPrev, onNext, onToc, onFullscreen }) {
  const el = document.createElement('nav');
  el.className = 'controls';
  el.setAttribute('aria-label', 'スライド操作');
  el.innerHTML = `
    ${iconButton('prev', '前のスライド', '←')}
    <span class="controls__counter" aria-live="polite"></span>
    ${iconButton('next', '次のスライド', '→')}
    <span class="controls__divider" aria-hidden="true"></span>
    ${iconButton('toc', '目次', 'T')}
    ${iconButton('fullscreen', '全画面表示', 'F')}
  `;

  const actions = { prev: onPrev, next: onNext, toc: onToc, fullscreen: onFullscreen };
  el.addEventListener('click', (e) => {
    const button = e.target.closest('[data-action]');
    if (button) actions[button.dataset.action]();
  });

  const counter = el.querySelector('.controls__counter');
  const prevButton = el.querySelector('[data-action="prev"]');
  const nextButton = el.querySelector('[data-action="next"]');

  return {
    el,
    update(index, total) {
      counter.textContent = `${index + 1} / ${total}`;
      prevButton.disabled = index === 0;
      nextButton.disabled = index === total - 1;
    },
  };
}
