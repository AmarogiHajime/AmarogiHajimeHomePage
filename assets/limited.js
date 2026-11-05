/*
 * キーワード入力ページの表示処理です。
 * 動画・キーワードを追加するときは data/limited.js だけを編集してください。
 */
(() => {
  'use strict';

  const main = document.getElementById('content');
  if (!main) return;
  const groups = Array.isArray(window.SiteContent?.limitedGroups)
    ? window.SiteContent.limitedGroups : [];

  function element(tag, className = '', text = '') {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== '') node.textContent = String(text);
    return node;
  }

  // 通常の作品一覧と同じく、公式の動画URLのみ埋め込みに変換します。
  function videoSource(platform, address) {
    let kind = String(platform || '').trim().toLowerCase();
    const value = String(address || '').trim();
    let url;
    try { url = new URL(value); } catch { return null; }
    if (url.protocol !== 'https:') return null;

    const host = url.hostname.toLowerCase();
    // url: '...' の簡単な登録形式では、URLから投稿先を自動判別。
    if (!kind) {
      if (['youtu.be', 'www.youtu.be', 'youtube.com', 'www.youtube.com',
           'm.youtube.com', 'youtube-nocookie.com', 'www.youtube-nocookie.com'].includes(host)) {
        kind = 'youtube';
      } else if (['nicovideo.jp', 'www.nicovideo.jp', 'embed.nicovideo.jp',
                  'nico.ms', 'www.nico.ms'].includes(host)) {
        kind = 'niconico';
      }
    }
    const parts = url.pathname.split('/').filter(Boolean);
    let id = '';
    if (kind === 'youtube') {
      if (['youtu.be', 'www.youtu.be'].includes(host)) {
        id = parts[0] || '';
      } else if (['youtube.com', 'www.youtube.com', 'm.youtube.com',
                  'youtube-nocookie.com', 'www.youtube-nocookie.com'].includes(host)) {
        if (parts[0] === 'watch') id = url.searchParams.get('v') || '';
        else if (['embed', 'shorts', 'live'].includes(parts[0])) id = parts[1] || '';
      }
      if (!/^[a-zA-Z0-9_-]{11}$/.test(id)) return null;
      return {
        label: 'YouTube',
        embed: `https://www.youtube-nocookie.com/embed/${id}`,
        original: `https://www.youtube.com/watch?v=${id}`,
      };
    }
    if (['niconico', 'ニコニコ', 'ニコニコ動画'].includes(kind)) {
      if (['nicovideo.jp', 'www.nicovideo.jp', 'embed.nicovideo.jp'].includes(host)) {
        if (parts[0] === 'watch') id = parts[1] || '';
      } else if (['nico.ms', 'www.nico.ms'].includes(host)) {
        id = parts[0] || '';
      }
      if (!/^(sm|so|nm)\d+$/i.test(id)) return null;
      id = id.toLowerCase();
      return {
        label: 'ニコニコ動画',
        embed: `https://embed.nicovideo.jp/watch/${id}`,
        original: `https://www.nicovideo.jp/watch/${id}`,
      };
    }
    return null;
  }

  const heading = element('section', 'page-heading');
  heading.append(element('h1', '', '今回のキーワード入力ページ'));
  main.append(heading);

  const panel = element('section', 'limited-form-panel');
  panel.append(element('h2', '', '今回のキーワード'));
  panel.append(element('p', '', 'キーワードを入力すると、対応する動画が下に表示されます。'));
  const form = element('form', 'limited-form');
  const input = element('input', 'limited-keyword');
  input.type = 'text';
  input.name = 'keyword';
  input.placeholder = 'キーワードを入力';
  input.autocomplete = 'off';
  input.spellcheck = false;
  input.setAttribute('aria-label', '今回のキーワード');
  input.required = true;
  const submit = element('button', 'limited-button', '表示');
  submit.type = 'submit';
  const error = element('p', 'limited-error');
  error.setAttribute('role', 'status');
  form.append(input, submit);
  panel.append(form, error);
  main.append(panel);

  const result = element('section', 'limited-result');
  result.hidden = true;
  main.append(result);

  function renderPlayer(work, link) {
    const info = videoSource(link.platform, link.url);
    if (!info) return null;
    const item = element('div', 'video-source');
    item.append(element('p', 'video-provider', info.label));
    const holder = element('div', 'video-embed');
    if (info.label === 'YouTube' && window.location.protocol === 'file:') {
      const msg = element('div', 'video-placeholder',
        'HTMLファイルを直接開いているため、YouTubeの埋め込みは表示していません。');
      holder.append(msg);
    } else {
      const frame = element('iframe');
      frame.src = info.embed;
      frame.title = `${work.title || '限定動画'}（${info.label}）`;
      frame.loading = 'lazy';
      frame.referrerPolicy = 'strict-origin-when-cross-origin';
      frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      frame.allowFullscreen = true;
      holder.append(frame);
    }
    const external = element('a', 'video-origin-link', '配信元で開く');
    external.href = info.original;
    external.target = '_blank';
    external.rel = 'noopener noreferrer';
    item.append(holder, external);
    return item;
  }

  function renderWork(work) {
    const article = element('article', 'limited-work');
    article.append(element('h3', '', work.title || '無題の動画'));
    // 動画ごとの概要。既存のグループ説明とは別に表示する。
    if (work.description) {
      const description = element('p', 'limited-description', work.description);
      description.style.whiteSpace = 'pre-line';
      description.style.marginTop = '8px';
      article.append(description);
    }
    const grid = element('div', 'video-grid');
    // 4項目の簡単な {title, description, url} と、従来の sources に両対応。
    const links = Array.isArray(work.sources) && work.sources.length ? work.sources : [work];
    links.forEach(link => {
      if (!link || typeof link !== 'object') return;
      const player = renderPlayer(work, link);
      if (player) grid.append(player);
    });
    if (grid.children.length) article.append(grid);
    else article.append(element('p', 'limited-placeholder', '動画URLがまだ登録されていません。'));
    return article;
  }

  function showGroup(group) {
    result.replaceChildren();
    const head = element('div', 'limited-result-head');
    const info = element('div');
    info.append(element('h2', '', group.title || '限定動画'));
    if (group.description) info.append(element('p', 'limited-description', group.description));
    head.append(info);
    result.append(head);

    const videos = Array.isArray(group.videos) ? group.videos : [];
    if (videos.length) videos.forEach(work => {
      if (work && typeof work === 'object') result.append(renderWork(work));
    });
    else result.append(element('p', 'limited-placeholder', 'このキーワードに動画はまだ登録されていません。'));
    // 入力欄は隠さず、入力したキーワードも保持する。
    result.hidden = false;
  }

  form.addEventListener('submit', event => {
    event.preventDefault();
    const keyword = input.value.trim();
    // 新形式 keyword と従来形式 password の両方に対応。
    const group = groups.find(item => {
      if (!item || typeof item !== 'object') return false;
      const value = typeof item.keyword === 'string' ? item.keyword : item.password;
      return typeof value === 'string' && value === keyword;
    });
    if (!group) {
      error.textContent = '該当するキーワードがありません。';
      result.hidden = true;
      result.replaceChildren();
      return;
    }
    error.textContent = '';
    showGroup(group);
  });
})();
