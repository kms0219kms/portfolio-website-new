import { siteConfig } from './lib/site-config';

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '087bf8634f4d4082ae987c23c82fc42c',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Hello, I’m Minsu Kim.',
  domain: 'devayaan.me',
  author: 'Minsu Kim',

  // open graph metadata (optional)
  description: 'Hello, I’m Minsu Kim.',

  // social usernames (optional)
  twitter: 'kms0219kms',
  github: 'kms0219kms',
  linkedin: 'kms0219kms',
  // newsletter: '#', // optional newsletter URL
  youtube: 'UCTKVrq3rLLyWWkhTPVbKpag', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon:
    'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F20b38eb8-84d2-4216-9c70-8f45c1e8515d%2F%25EA%25B7%25B8%25EB%25A6%25BC1.png?table=block&id=087bf863-4f4d-4082-ae98-7c23c82fc42c&spaceId=d85e8adb-976a-46f1-8de8-5e8516d5f528&width=250&userId=ff9eeeea-cd92-43af-b243-ff264d4520bf&cache=v2',
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: {
    '/blog-ko': '9ef021736d054df5b671090442e5ead7',
    '/resume': '3a39eafc55dc44d799f39e530fd4328c',
    '/ko': '087bf8634f4d4082ae987c23c82fc42c',
    '/en': '1f17207bf68a41cb9aeb049b270415ff'
  },

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  navigationStyle: 'default',
  // navigationStyle: 'custom',
  // navigationLinks: [
  //   {
  //     title: 'About',
  //     pageId: 'f1199d37579b41cbabfc0b5174f4256a'
  //   },
  //   {
  //     title: 'Contact',
  //     pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
  //   }
  // ]

  // -------- custom configs (2skydev) -------------

  // date-fns format string
  dateformat: 'yyyy년 MM월 dd일',

  // post page - hidden properties
  hiddenPostProperties: ['설명', '상태', '최하위 정렬'],

  // contentPosition (table of contents) text align
  contentPositionTextAlign: 'left',

  // default theme color
  defaultTheme: 'system',

  // enable comment
  enableComment: true,
});
