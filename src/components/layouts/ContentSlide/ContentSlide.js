import { html } from '../../../core/html.js';
import './ContentSlide.scss';

/**
 * 見出し + 本文の標準スライド。body にはコンテンツ部品（CardGrid など）を並べて渡す。
 * @param {{ kicker?: string, title: string, lead?: string, body: string | string[], note?: string }} props
 */
export function ContentSlide({ kicker, title, lead, body, note }) {
  return {
    title,
    layout: 'content',
    html: html`
      <header class="content-slide__header">
        ${kicker && html`<p class="content-slide__kicker">${kicker}</p>`}
        <h2 class="content-slide__title">${title}</h2>
        ${lead && html`<p class="content-slide__lead">${lead}</p>`}
      </header>
      <div class="content-slide__body">${body}</div>
      ${note && html`<p class="content-slide__note">${note}</p>`}
    `,
  };
}
