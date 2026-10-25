/*
 * 表示処理の共通ファイル。普段の編集は data/*.js と theme.css だけで十分です。
 * サーバー、ビルド、外部ライブラリは不要です（file:// でもデータを読み込めます）。
 * 新しいキャラクターは character.html?id=キャラクターID で自動表示されます。
 */
(() => {
  'use strict';

  const content = window.SiteContent || {};
  const site = content.site || {};
  const characters = content.characters || {};
  const works = content.works || [];
  const linkGroups = content.linkGroups || [];
  const body = document.body;
  const root = body.dataset.root || '';
  const page = body.dataset.page || 'home';
  const main = document.getElementById('content');
  if (!main) return;

  // HTMLを文字列で組み立てず、全てDOMとして作る（文章の特殊文字もそのまま表示）。
  function element(tag, className = '', value = '') {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (value !== '') node.textContent = String(value);
    return node;
  }

  function localUrl(path) {
    return root + path;
  }

  function characterUrl(id) {
    return localUrl(`character.html?id=${encodeURIComponent(id)}`);
  }

  function workAnchor(work, index) {
    // IDを固定しておくと作品を並べ替えてもリンク先が変わりません。
    const id = String(work.id || '').trim();
    return /^[a-zA-Z0-9_-]+$/.test(id) ? `work-${id}` : `work-${index + 1}`;
  }

  function heading(title, description = '') {
    const section = element('section', 'page-heading');
    section.append(element('h1', '', title));
    if (description) section.append(element('p', '', description));
    return section;
  }

  function sectionTitle(title, linkText, href) {
    const wrap = element('div', 'section-heading');
    const inner = element('div');
    inner.append(element('h2', '', title));
    const link = element('a', 'more', linkText);
    link.href = localUrl(href);
    wrap.append(inner, link);
    return wrap;
  }

  function renderSharedLayout() {
    const header = document.getElementById('site-header');
    const footer = document.getElementById('site-footer');
    const name = site.name || '創作サイト';

    document.title = page === 'home' ? name : `${pageTitle()} | ${name}`;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = site.description || '';

    if (header) {
      // タイトル左側だけに表示するアイコン。ナビゲーションやリンク一覧には表示しない。
      const brand = element('div', 'site-brand');
      const titleIconPath = String(site.titleIcon || '').trim();
      if (titleIconPath) {
        const titleIcon = element('img', 'site-title-icon');
        titleIcon.src = localUrl(titleIconPath);
        titleIcon.alt = ''; // サイト名の読み上げが重複しないよう装飾画像として扱う
        titleIcon.decoding = 'async';
        brand.append(titleIcon);
      }
      const logo = element('a', 'logo', name);
      logo.href = localUrl('index.html');
      brand.append(logo);
      const nav = element('nav', 'site-nav');
      nav.setAttribute('aria-label', 'メインメニュー');
      [
        ['home', 'トップ', 'index.html'],
        ['characters', 'キャラクター', 'characters.html'],
        ['works', '作品一覧', 'works.html'],
        ['links', 'リンク', 'links.html'],
      ].forEach(([key, label, url]) => {
        const link = element('a', '', label);
        link.href = localUrl(url);
        if (page === key || (page === 'character' && key === 'characters')) {
          link.setAttribute('aria-current', 'page');
        }
        nav.append(link);
      });
      header.replaceChildren(brand, nav);
    }

    if (footer) {
      const link = element('a', '', 'このサイトについて');
      link.href = localUrl('about.html');
      footer.replaceChildren(link);
    }
  }

  function selectedCharacterId() {
    return body.dataset.character || new URLSearchParams(window.location.search).get('id') || '';
  }

  function pageTitle() {
    if (page === 'character') {
      return (characters[selectedCharacterId()] || {}).name || 'キャラクター';
    }
    return ((site.headings || {})[page]) || '創作サイト';
  }

  // images に複数の画像パスを並べると順番に切り替わる。
  // 従来の image: '...' 形式もそのまま有効。images があればそちらを優先する。
  function characterImagePaths(character) {
    const images = Array.isArray(character.images)
      ? character.images.filter(path => typeof path === 'string').map(path => path.trim()).filter(Boolean)
      : [];
    if (images.length) return images;
    const oldImage = typeof character.image === 'string' ? character.image.trim() : '';
    return oldImage ? [oldImage] : [];
  }

  // 切替間隔は個別の imageIntervalMs → サイト共通の characterImageIntervalMs → 5000ms の順で決定。
  function imageIntervalMs(character) {
    const value = character.imageIntervalMs ?? site.characterImageIntervalMs ?? 5000;
    const milliseconds = Number(value);
    return Number.isFinite(milliseconds) && milliseconds >= 1000 ? milliseconds : 5000;
  }

  // 2枚の画像を重ね、読み込みが完了した段階でフェード切替する。
  function enableImageSlideshow(wrapper, frames, paths, intervalMs) {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let activeFrame = 0;
    let imageIndex = 0;
    let loading = false;
    let intervalId = null;

    function nextImage() {
      if (document.hidden || loading || !wrapper.isConnected) return;
      const nextIndex = (imageIndex + 1) % paths.length;
      const nextFrameIndex = 1 - activeFrame;
      const target = frames[nextFrameIndex];
      const path = localUrl(paths[nextIndex]);

      function switchFrames() {
        target.onload = null;
        target.onerror = null;
        frames[activeFrame].classList.remove('is-visible');
        target.classList.add('is-visible');
        activeFrame = nextFrameIndex;
        imageIndex = nextIndex;
        loading = false;
      }

      // すでに読み込んだ画像に戻る場合、load イベントが再発火しない環境もある。
      if (target.getAttribute('src') === path && target.complete && target.naturalWidth > 0) {
        switchFrames();
        return;
      }

      loading = true;
      target.onload = switchFrames;
      target.onerror = () => {
        target.onload = null;
        target.onerror = null;
        imageIndex = nextIndex; // 読み込めない画像は次の周期で飛ばす
        loading = false;
      };
      target.src = path;
    }

    function setActive(visible) {
      if (visible && intervalId === null) {
        intervalId = window.setInterval(nextImage, intervalMs);
      } else if (!visible && intervalId !== null) {
        window.clearInterval(intervalId);
        intervalId = null;
      }
    }

    // 画面に見えている画像だけ切り替え、画面外では余分な読み込みをしない。
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        setActive(entries.some(entry => entry.isIntersecting));
      }, { rootMargin: '40px' });
      observer.observe(wrapper);
    } else {
      setActive(true);
    }
  }

  function characterImage(character, large = false) {
    const className = large ? 'character-art' : 'mini-art';
    const paths = characterImagePaths(character);

    // 画像なし・1枚のみの表示は旧形式との互換性を維持する。
    if (paths.length === 1) {
      const img = element('img', className);
      img.src = localUrl(paths[0]);
      img.alt = character.name || 'キャラクター画像';
      img.loading = 'lazy';
      return img;
    }
    if (paths.length > 1) {
      const wrapper = element('div', `${className} character-slideshow`);
      wrapper.setAttribute('role', 'img');
      wrapper.setAttribute('aria-label', `${character.name || 'キャラクター'}の画像`);
      const first = element('img', 'slideshow-frame is-visible');
      first.src = localUrl(paths[0]);
      first.alt = '';
      first.loading = 'lazy';
      const second = element('img', 'slideshow-frame');
      second.alt = '';
      wrapper.append(first, second);
      enableImageSlideshow(wrapper, [first, second], paths, imageIntervalMs(character));
      return wrapper;
    }
    const blank = element('div', className, large ? '立ち絵未登録' : '画像未登録');
    blank.setAttribute('aria-label', large ? '立ち絵未登録' : '画像未登録');
    return blank;
  }

  function characterCard(id, character) {
    const card = element('a', 'item-link');
    card.href = characterUrl(id);
    card.append(characterImage(character));
    const body = element('div', 'item-body');
    body.append(element('strong', '', character.name || id));
    if (character.summary) body.append(element('p', '', character.summary));
    card.append(body);
    return card;
  }

  function characterList(entries) {
    const list = element('div', 'character-list');
    entries.forEach(([id, character]) => list.append(characterCard(id, character)));
    return list;
  }

  // 動画URLはYouTubeとニコニコ動画の公式ドメインのみを受け付ける。
  // platform は英語の識別名、日本語表記のいずれにも対応。
  function resolveVideo(platform, value) {
    const kind = String(platform || '').trim().toLowerCase();
    const raw = String(value || '').trim();
    if (!raw) return null;
    let url;
    try { url = new URL(raw); } catch { return null; }
    if (url.protocol !== 'https:') return null;

    const host = url.hostname.toLowerCase();
    const segments = url.pathname.split('/').filter(Boolean);
    let id = '';

    if (kind === 'youtube') {
      if (['youtu.be', 'www.youtu.be'].includes(host)) {
        id = segments[0] || '';
      } else if (['youtube.com', 'www.youtube.com', 'm.youtube.com',
                  'youtube-nocookie.com', 'www.youtube-nocookie.com'].includes(host)) {
        if (segments[0] === 'watch') id = url.searchParams.get('v') || '';
        if (['embed', 'shorts', 'live'].includes(segments[0])) id = segments[1] || '';
      }
      if (!/^[A-Za-z0-9_-]{11}$/.test(id)) return null;
      return {
        player: `https://www.youtube-nocookie.com/embed/${id}`,
        original: `https://www.youtube.com/watch?v=${id}`,
        label: 'YouTube',
      };
    }

    if (['niconico', 'ニコニコ動画', 'ニコニコ'].includes(kind)) {
      if (['nicovideo.jp', 'www.nicovideo.jp', 'embed.nicovideo.jp'].includes(host)) {
        id = segments[0] === 'watch' ? (segments[1] || '') : '';
      } else if (['nico.ms', 'www.nico.ms'].includes(host)) {
        id = segments[0] || '';
      }
      if (!/^(sm|so|nm)\d+$/i.test(id)) return null;
      id = id.toLowerCase();
      return {
        player: `https://embed.nicovideo.jp/watch/${id}`,
        original: `https://www.nicovideo.jp/watch/${id}`,
        label: 'ニコニコ動画',
      };
    }
    return null;
  }

  function videoPlayer(work, video, source) {
    const entry = element('div', 'video-source');
    const providerText = video.title ? `${source.label}｜${video.title}` : source.label;
    const provider = element('p', 'video-provider', providerText);
    const frameBox = element('div', 'video-embed');
    // file:// から埋め込むとブラウザがHTTP Refererを送れず、
    // YouTubeのエラー153になる。失敗するプレーヤーは表示せず、
    // ローカルサーバー経由で開く方法を案内する。
    if (source.label === 'YouTube' && window.location.protocol === 'file:') {
      const notice = element('div', 'video-placeholder');
      notice.append(element('strong', '', 'ローカルファイルからはYouTubeを埋め込めません'));
      notice.append(element('small', '',
        'エラー153を避けるため、このプレーヤーは表示していません。サイトのフォルダにある start_site.bat から開くと、埋め込みに必要な参照元情報を送信できます。'));
      frameBox.append(notice);
    } else {
      const frame = element('iframe');
      frame.src = source.player;
      frame.title = `${work.title}（${providerText}）`;
      frame.loading = 'lazy';
      // HTTP(S)で公開・プレビューしたページの参照元をYouTubeに送信する。
      frame.referrerPolicy = 'strict-origin-when-cross-origin';
      frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      frame.allowFullscreen = true;
      frameBox.append(frame);
    }

    const original = element('a', 'video-origin-link', '配信元で開く');
    original.href = source.original;
    original.target = '_blank';
    original.rel = 'noopener noreferrer';
    entry.append(provider, frameBox, original);
    return entry;
  }

  // 一つの登場人物タグを、YouTube版・ニコニコ動画版など複数の投稿先で共有できる。
  // 新形式: { tags: [...], sources: [{ platform, url }, ...] }
  // 旧形式: { platform, url, tags: [...] } も読み込める。
  function videoSources(video) {
    if (!video || typeof video !== 'object') return [];
    const links = Array.isArray(video.sources) ? video.sources : [video];
    return links.map(link => {
      if (!link || typeof link !== 'object') return null;
      const source = resolveVideo(link.platform, link.url);
      if (!source) return null;
      return {
        video: { title: link.title || video.title || '' },
        source,
      };
    }).filter(Boolean);
  }

  // 共通作品カード。tags で抽出した動画群だけを人物別ページに渡す。
  function workEntry(work, videos) {
    const article = element('article', 'appearance-entry');
    article.append(element('h3', '', work.title || '無題の作品'));
    const sources = (videos || []).flatMap(videoSources);

    if (!sources.length) {
      article.append(element('p', 'video-intro', '動画URLはまだ登録されていません。'));
      return article;
    }
    const grid = element('div', 'video-grid');
    sources.forEach(({video, source}) => grid.append(videoPlayer(work, video, source)));
    article.append(grid);
    return article;
  }

  function renderHome() {
    const home = site.home || {};
    const hero = element('section', 'hero');
    hero.append(element('h1', '', home.heading || site.name));
    hero.append(element('p', '', home.introduction || ''));
    main.append(hero);

    const charactersSection = element('section', 'section');
    charactersSection.append(sectionTitle('キャラクター', '全員を見る →', 'characters.html'));
    const featured = (home.featuredCharacters || []).filter(id => characters[id])
      .map(id => [id, characters[id]]);
    charactersSection.append(characterList(featured));
    main.append(charactersSection);

    const worksSection = element('section', 'section');
    worksSection.append(sectionTitle('作品一覧', '作品一覧 →', 'works.html'));
    const ul = element('ul', 'works-index');
    works.forEach((work, index) => {
      const li = element('li');
      const link = element('a', '', work.title || '無題の作品');
      link.href = localUrl(`works.html#${workAnchor(work, index)}`);
      li.append(link);
      ul.append(li);
    });
    if (!works.length) ul.append(element('li', '', '作品はまだ登録されていません。'));
    worksSection.append(ul);
    main.append(worksSection);

    const linkSection = element('section', 'section');
    const panel = element('div', 'link-panel');
    panel.append(element('h2', '', home.linkHeading || 'リンク'));
    panel.append(element('p', '', home.linkDescription || ''));
    const a = element('a', '', 'リンク一覧を見る →');
    a.href = localUrl('links.html');
    panel.append(a);
    linkSection.append(panel);
    main.append(linkSection);
  }

  function renderCharacters() {
    const titles = site.headings || {};
    main.append(heading(titles.characters || 'キャラクター紹介', titles.charactersDescription));
    main.append(characterList(Object.entries(characters)));
  }

  function renderWorks() {
    const titles = site.headings || {};
    main.append(heading(titles.works || '作品一覧', titles.worksDescription));
    const entries = element('div', 'appearance-entries');
    works.forEach((work, index) => {
      const entry = workEntry(work, work.videos);
      entry.id = workAnchor(work, index);
      // 元サイトの #work-1 や #ramen などへの既存リンクも維持。
      [`work-${index + 1}`, String(work.id || '')].forEach(alias => {
        if (alias && alias !== entry.id) {
          const target = element('span', 'anchor-target');
          target.id = alias;
          entry.prepend(target);
        }
      });
      entries.append(entry);
    });
    if (!works.length) entries.append(element('p', 'video-intro', '作品はまだ登録されていません。'));
    main.append(entries);

    // ページ初回表示時、動的に生成した作品見出しの位置へ移動。
    if (window.location.hash) {
      let targetId;
      try { targetId = decodeURIComponent(window.location.hash.slice(1)); }
      catch { targetId = window.location.hash.slice(1); }
      const target = document.getElementById(targetId);
      if (target) target.scrollIntoView();
    }
  }

  function backLink() {
    const back = element('a', 'back', '← キャラクター一覧へ');
    back.href = localUrl('characters.html');
    return back;
  }

  function renderCharacter() {
    const id = selectedCharacterId();
    const character = characters[id];
    if (!character) {
      main.append(heading('キャラクターが見つかりません', 'characters.js のIDとURLのidを確認してください。'));
      main.append(backLink());
      return;
    }
    main.append(backLink());

    const layout = element('div', 'profile-layout');
    const portrait = element('div', 'portrait-panel');
    portrait.append(characterImage(character, true));
    const copy = element('div', 'profile-copy');
    const head = element('div', 'profile-head');
    head.append(element('h1', '', character.name || id));
    if (character.summary) head.append(element('p', '', character.summary));
    copy.append(head);

    const description = element('section', 'profile-block');
    description.append(element('h2', '', '紹介'));
    description.append(element('p', 'description', character.description || '紹介文はまだ登録されていません。'));
    copy.append(description);

    const profileBlock = element('section', 'profile-block');
    profileBlock.append(element('h2', '', 'プロフィール'));
    const profile = element('dl', 'profile-list');
    (character.profile || []).forEach(row => {
      const item = element('div');
      item.append(element('dt', '', row.label || ''), element('dd', '', row.value || ''));
      profile.append(item);
    });
    if (!profile.children.length) profileBlock.append(element('p', 'note', 'プロフィールはまだ登録されていません。'));
    else profileBlock.append(profile);
    copy.append(profileBlock);
    layout.append(portrait, copy);
    main.append(layout);

    const appearances = element('section', 'section appearances-section');
    appearances.id = 'appearances';
    appearances.setAttribute('aria-labelledby', 'appearances-title');
    const h2 = element('h2', '', '登場作品');
    h2.id = 'appearances-title';
    appearances.append(h2);
    const entries = element('div', 'appearance-entries');
    let found = 0;
    works.forEach(work => {
      const matched = (work.videos || []).filter(video =>
        Array.isArray(video.tags) && video.tags.includes(id)
      );
      if (!matched.length) return;
      entries.append(workEntry(work, matched));
      found += 1;
    });
    if (!found) entries.append(element('p', 'video-intro', '登場作品はまだ登録されていません。'));
    appearances.append(entries);
    main.append(appearances, backLink());
  }

  function safeLink(url) {
    const value = String(url || '').trim();
    if (!value) return null;
    if (/^https:\/\//i.test(value)) return {url: value, external: true};
    // 相対パスのみ。リンク設定欄への意図しないスクリプトURI混入も防止。
    if (/^(?!\/)(?!.*:)(?!.*\\)[\w.\-\/#?=&%]+$/.test(value)) {
      return {url: localUrl(value), external: false};
    }
    return null;
  }

  function renderLinks() {
    const titles = site.headings || {};
    main.append(heading(titles.links || 'リンク', titles.linksDescription));
    linkGroups.forEach(group => {
      const section = element('section', 'links-group');
      section.append(element('h2', '', group.heading || 'リンク'));
      const list = element('div', 'link-list');
      (group.links || []).forEach(item => {
        const linkInfo = safeLink(item.url);
        const row = element(linkInfo ? 'a' : 'div', `link-row${linkInfo ? '' : ' unset'}`);
        if (linkInfo) {
          row.href = linkInfo.url;
          if (linkInfo.external) {
            row.target = '_blank';
            row.rel = 'noopener noreferrer';
          }
        }
        const content = element('span', 'link-content');
        content.append(element('strong', '', item.title || '名称未設定'));
        content.append(element('small', '', item.description || (linkInfo ? '' : '公開URL未設定')));
        row.append(content);
        list.append(row);
      });
      section.append(list);
      main.append(section);
    });
    main.append(element('div', 'about-box', 'URLを登録していないリンクは、クリックできない表示になります。'));
  }

  function renderAbout() {
    const titles = site.headings || {};
    main.append(heading(titles.about || 'このサイトについて', titles.aboutDescription));
    const about = element('div', 'about-box');
    about.append(element('strong', '', site.name || '創作サイト'));
    (site.about || []).forEach(paragraph => about.append(element('p', '', paragraph)));
    main.append(about);

    const section = element('section', 'work-section');
    section.append(element('h2', '', '各ページ'));
    const links = element('div', 'appearances');
    [
      ['キャラクター紹介', 'characters.html'],
      ['作品一覧', 'works.html'],
      ['リンク集', 'links.html'],
    ].forEach(([label, path]) => {
      const a = element('a', 'appearance', label + ' ');
      a.href = localUrl(path);
      a.append(element('span', 'go', '↗'));
      links.append(a);
    });
    section.append(links);
    main.append(section);
  }

  renderSharedLayout();
  if (page === 'home') renderHome();
  else if (page === 'characters') renderCharacters();
  else if (page === 'works') renderWorks();
  else if (page === 'links') renderLinks();
  else if (page === 'about') renderAbout();
  else if (page === 'character') renderCharacter();
})();
