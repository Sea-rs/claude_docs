// 動画ファイルの置き場所。プロジェクト直下の public/videos/ に動画（と任意でサムネ画像）を置く。
// ビルドすると dist/videos/ にそのままコピーされる。
export const VIDEO_DIR = 'videos';

/** 動画フォルダ内のファイル名を、ページから読み込める URL にする */
export function videoUrl(file) {
  return `${import.meta.env.BASE_URL}${VIDEO_DIR}/${encodeURI(file)}`;
}
