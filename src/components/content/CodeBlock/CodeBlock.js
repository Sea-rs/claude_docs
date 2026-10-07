import { html, escapeHtml } from '../../../core/html.js';
import './CodeBlock.scss';

// 資料用の簡易ハイライト（行はエスケープ済みの文字列を受け取る）
const highlighters = {
  shell(lines) {
    return lines.map((line) => {
      if (/^\s*#/.test(line)) return `<span class="tok-comment">${line}</span>`;
      return line.replace(/(\s#\s.*)$/, '<span class="tok-comment">$1</span>');
    });
  },

  markdown(lines) {
    let inFrontmatter = false;
    return lines.map((line, i) => {
      if (line === '---' && (i === 0 || inFrontmatter)) {
        inFrontmatter = i === 0;
        return `<span class="tok-muted">${line}</span>`;
      }
      if (inFrontmatter) {
        return line.replace(/^([\w-]+):/, '<span class="tok-key">$1</span>:');
      }
      if (/^#{1,6}\s/.test(line)) return `<span class="tok-heading">${line}</span>`;
      return line
        .replace(/^(\s*)([-*]|\d+\.)\s/, '$1<span class="tok-muted">$2</span> ')
        .replace(/`([^`]+)`/g, '<span class="tok-inline">`$1`</span>');
    });
  },
};

/**
 * コード・設定ファイルの表示
 * @param {{ code: string, filename?: string, lang?: 'shell'|'markdown'|'plain' }} props
 */
export function CodeBlock({ code, filename, lang = 'plain' }) {
  const lines = escapeHtml(code.trim()).split('\n');
  const highlighted = highlighters[lang] ? highlighters[lang](lines) : lines;

  return html`
    <figure class="code-block">
      ${filename &&
      html`<figcaption class="code-block__filename"><span class="code-block__dots" aria-hidden="true"></span>${filename}</figcaption>`}
      <pre class="code-block__pre"><code>${highlighted.join('\n')}</code></pre>
    </figure>
  `;
}
