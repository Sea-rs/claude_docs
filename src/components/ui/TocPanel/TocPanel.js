import { html, escapeHtml, stripTags } from '../../../core/html.js';
import './TocPanel.scss';

/** 章ごとにスライドをまとめる */
function groupBySection(slides) {
  const groups = [];
  slides.forEach((slide, index) => {
    const last = groups[groups.length - 1];
    if (last && last.section === slide.section) {
      last.items.push({ slide, index });
    } else {
      groups.push({ section: slide.section, items: [{ slide, index }] });
    }
  });
  return groups;
}

/** 目次パネル（T キーまたは目次ボタンで開閉） */
export function createTocPanel({ slides, onSelect }) {
  const el = document.createElement('div');
  el.className = 'toc';
  el.innerHTML = html`
    <div class="toc__backdrop" data-close></div>
    <aside class="toc__panel" aria-label="目次">
      <div class="toc__header">
        <p class="toc__title">目次</p>
        <button type="button" class="toc__close" data-close aria-label="目次を閉じる">×</button>
      </div>
      <ol class="toc__groups">
        ${groupBySection(slides).map(
          (group) => html`
            <li class="toc__group">
              <p class="toc__section">${escapeHtml(group.section)}</p>
              <ol class="toc__items">
                ${group.items.map(
                  ({ slide, index }) => html`
                    <li>
                      <button type="button" class="toc__item" data-index="${index}">
                        <span class="toc__number">${index + 1}</span>
                        <span>${escapeHtml(stripTags(slide.title))}</span>
                      </button>
                    </li>
                  `,
                )}
              </ol>
            </li>
          `,
        )}
      </ol>
    </aside>
  `;

  const items = [...el.querySelectorAll('.toc__item')];

  const api = {
    el,
    isOpen: () => el.classList.contains('is-open'),
    open() {
      el.classList.add('is-open');
      el.querySelector('.toc__item[aria-current]')?.focus();
    },
    close() {
      el.classList.remove('is-open');
    },
    toggle() {
      api.isOpen() ? api.close() : api.open();
    },
    update(index) {
      items.forEach((item, i) => {
        if (i === index) item.setAttribute('aria-current', 'step');
        else item.removeAttribute('aria-current');
      });
    },
  };

  el.addEventListener('click', (e) => {
    if (e.target.closest('[data-close]')) {
      api.close();
      return;
    }
    const item = e.target.closest('.toc__item');
    if (item) onSelect(Number(item.dataset.index));
  });

  return api;
}
