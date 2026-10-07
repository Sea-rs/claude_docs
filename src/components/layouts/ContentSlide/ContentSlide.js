import { html } from '../../../core/html.js';
import { ScopeTag } from '../../content/ScopeTag/ScopeTag.js';
import './ContentSlide.scss';

/**
 * 見出し + 本文の標準スライド。body にはコンテンツ部品（CardGrid など）を並べて渡す。
 * scope を渡すと、見出しの上にその内容がどの製品で使えるかのラベルを表示する。
 * @param {{ kicker?: string, title: string, lead?: string, body: string | string[], note?: string, scope?: 'code'|'chat'|'both' }} props
 */
export function ContentSlide({ kicker, title, lead, body, note, scope }) {
  return {
    title,
    layout: 'content',
    html: html`
      <header class="content-slide__header">
        ${(kicker || scope) &&
        html`
          <div class="content-slide__meta">
            <p class="content-slide__kicker">${kicker}</p>
            ${scope && ScopeTag(scope)}
          </div>
        `}
        <h2 class="content-slide__title">${title}</h2>
        ${lead && html`<p class="content-slide__lead">${lead}</p>`}
      </header>
      <div class="content-slide__body">${body}</div>
      ${note && html`<p class="content-slide__note">${note}</p>`}
    `,
  };
}
