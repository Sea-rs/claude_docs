import './ProgressBar.scss';

/** 画面上部の進捗バー */
export function createProgressBar() {
  const el = document.createElement('div');
  el.className = 'progress-bar';
  el.setAttribute('aria-hidden', 'true');
  el.innerHTML = '<div class="progress-bar__fill"></div>';

  const fill = el.firstElementChild;

  return {
    el,
    update(index, total) {
      fill.style.transform = `scaleX(${(index + 1) / total})`;
    },
  };
}
