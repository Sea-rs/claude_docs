import { html } from '../../../core/html.js';
import './SectionSlide.scss';

/**
 * 章の区切り（中扉）スライド
 * @param {{ number: string, title: string, lead?: string }} props
 */
export function SectionSlide({ number, title, lead }) {
  return {
    title,
    layout: 'section',
    html: html`
      <div class="section-slide">
        <p class="section-slide__number" aria-hidden="true">${number}</p>
        <p class="section-slide__label">Chapter ${number}</p>
        <h2 class="section-slide__title">${title}</h2>
        ${lead && html`<p class="section-slide__lead">${lead}</p>`}
      </div>
    `,
  };
}
