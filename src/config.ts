import type { NavItems } from './types';

export const NAV_ITEMS: NavItems = {
  home: {
    path: '/',
    title: 'home',
  },
  blog: {
    path: '/blog',
    title: 'blog',
  },
  tags: {
    path: '/tags',
    title: 'tags',
  },
  about: {
    path: '/about',
    title: 'about',
  },
};

export const SITE = {
  name: 'JABS',
  title: 'Just another blog site',
  description: 'Personal blog for my musings',
  url: 'https://dissurender.github.io',
  githubUrl: 'https://github.com/Dissurender/',
  listDrafts: true,
  image:
    'https://raw.githubusercontent.com/one-aalam/astro-ink/main/public/astro-banner.png',
  // YT video channel Id (used in media.astro)
  ytChannelId: '',
  // Optional, user/author settings (example)
  author: 'Rhyn Ogg', // Example: Fred K. Schott
  // Author: Twitter handler
  authorTwitter: 'RhynOgg', // Example: FredKSchott
  // Author: Image external source
  authorImage:
    'https://pbs.twimg.com/profile_images/1564764104241315841/iS8KM7Zn_400x400.jpg',
  // Author: Bio
  authorBio: 'Techie pondering on unnecessary ideas and utilities.',
};

// Ink - Theme configuration
export const PAGE_SIZE = 8;
export const USE_POST_IMG_OVERLAY = false;
export const USE_MEDIA_THUMBNAIL = true;

export const USE_AUTHOR_CARD = true;
export const USE_SUBSCRIPTION =
  false; /* works only when USE_AUTHOR_CARD is true */
