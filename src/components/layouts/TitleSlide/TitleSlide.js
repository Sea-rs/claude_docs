import { html } from '../../../core/html.js';
import './TitleSlide.scss';

/**
 * 表紙・最終ページ用のスライド
 * @param {{ eyebrow?: string, title: string, subtitle?: string, meta?: string }} props
 */
export function TitleSlide({ eyebrow, title, subtitle, meta }) {
  return {
    title,
    layout: 'title',
    html: html`
      <div class="title-slide">
        <div class="title-slide__decor" aria-hidden="true"></div>
        ${eyebrow && html`<p class="title-slide__eyebrow">${eyebrow}</p>`}
        <h1 class="title-slide__title">${title}</h1>
        ${subtitle && html`<p class="title-slide__subtitle">${subtitle}</p>`}
        ${meta && html`<p class="title-slide__meta">${meta}</p>`}
      </div>
    `,
  };
}
