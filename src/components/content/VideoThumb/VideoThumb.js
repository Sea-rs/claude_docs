import { html, escapeHtml } from '../../../core/html.js';
import { videoUrl } from '../../../core/media.js';
import './VideoThumb.scss';

/**
 * 動画のサムネイル。クリックすると、画面中央のモーダルで動画を再生する
 * （モーダルの処理は ui/VideoModal と core/Deck が担当）。
 * 動画は public/videos/ に置き、ここにはそのフォルダ内のファイル名を渡す。
 *
 * @param {{
 *   file: string,        動画のファイル名（例: 'install.mp4'）
 *   title: string,       モーダルの見出し・サムネの読み上げ名
 *   poster?: string,     サムネ画像のファイル名（例: 'install.jpg'）。省略すると動画の最初のコマを使う
 *   caption?: string,    サムネの下に出す説明
 *   width?: number       サムネの幅（px）。省略すると親の幅いっぱい
 * }} props
 */
export function VideoThumb({ file, title, poster, caption, width }) {
  const src = videoUrl(file);
  const frame = poster
    ? html`<img class="video-thumb__image" src="${videoUrl(poster)}" alt="" loading="lazy" />`
    : html`<video class="video-thumb__image" src="${src}#t=0.1" preload="metadata" muted playsinline tabindex="-1"></video>`;

  return html`
    <figure class="video-thumb" style="${width ? `--thumb-width: ${width}px` : ''}">
      <button
        type="button"
        class="video-thumb__button"
        data-video-src="${src}"
        data-video-title="${escapeHtml(title)}"
        aria-label="動画を再生: ${escapeHtml(title)}"
      >
        ${frame}
        <span class="video-thumb__missing">動画ファイルが見つかりません<br /><code>${escapeHtml(file)}</code></span>
        <span class="video-thumb__play" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M8 5.5v13l11-6.5z" /></svg>
        </span>
      </button>
      ${caption && html`<figcaption class="video-thumb__caption">${caption}</figcaption>`}
    </figure>
  `;
}
