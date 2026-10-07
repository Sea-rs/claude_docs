import { html } from '../../../core/html.js';
import { ScopeTag } from '../ScopeTag/ScopeTag.js';
import './Card.scss';

/**
 * 小見出し付きの箱。scope を渡すと右上に「どの製品で使えるか」のラベルを表示する。
 * @param {{ badge?: string, title: string, text?: string, items?: string[], tone?: 'accent'|'blue'|'green'|'yellow', highlight?: boolean, scope?: 'code'|'chat'|'both' }} props
 */
export function Card({ badge, title, text, items, tone = 'accent', highlight = false, scope }) {
  return html`
    <article class="card card--${tone} ${highlight ? 'is-highlight' : ''}">
      ${scope && html`<span class="card__scope">${ScopeTag(scope, { compact: true })}</span>`}
      ${badge && html`<p class="card__badge">${badge}</p>`}
      <h3 class="card__title">${title}</h3>
      ${text && html`<p class="card__text">${text}</p>`}
      ${items && html`<ul class="card__list">${items.map((item) => html`<li>${item}</li>`)}</ul>`}
    </article>
  `;
}

/**
 * Card を等間隔に並べるグリッド
 * @param {{ columns?: number, cards: string[] }} props
 */
export function CardGrid({ columns = 3, cards }) {
  return html`<div class="card-grid" style="--columns: ${columns}">${cards}</div>`;
}
