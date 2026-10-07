/**
 * コンポーネントで HTML 文字列を組み立てるためのタグ付きテンプレート。
 * - 配列はそのまま連結（map の結果を埋め込める）
 * - null / undefined / false は空文字（条件付き表示に使える）
 * 埋め込む値はエスケープしないので、ユーザー入力ではなく資料の内容だけを渡すこと。
 */
export function html(strings, ...values) {
  let out = strings[0];
  values.forEach((value, i) => {
    out += toString(value) + strings[i + 1];
  });
  return out;
}

function toString(value) {
  if (value == null || value === false) return '';
  if (Array.isArray(value)) return value.map(toString).join('');
  return String(value);
}

export function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function stripTags(text) {
  return String(text).replace(/<[^>]*>/g, '');
}
