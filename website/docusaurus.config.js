/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Seed UI' /* title for your website */,
  tagline: 'Cross Platform React Native UI Toolkit',
  url: 'https://reactnativeelements.com/' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  projectName: 'react-native-elements',
  organizationName: 'react-native-elements',
  clientModules: [require.resolve('./snackPlayerInitializer.js')],
  /* path to images for header/footer */
  favicon: '/img/website/logo.png',

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  scripts: [
    'https://buttons.github.io/buttons.js',
    { src: 'https://snack.expo.io/embed.js', defer: true },
  ],
  themes: ['@docusaurus/theme-live-codeblock'],
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        fromExtensions: ['html'],
      },
    ],
    './plugins/react-native-elements-web.js',
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        /** https://github.com/facebook/docusaurus/pull/5832 */
        googleAnalytics: {
          trackingID: 'UA-173589068-1',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['**/component_usage/**'],
        },
        docs: {
          exclude: ['**/component_usage/**'],
          path: 'docs',
          versions: {
            current: {
              label: 'Bleeding Edge 🚧',
            },
          },
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.ts'),
          remarkPlugins: [require('./plugins/remark-snackplayer')],
          editUrl:
            'https://github.com/react-native-elements/react-native-elements/edit/next/website/',
        },
        theme: {
          customCss: require.resolve('./static/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    image: '/img/website/seo.png',
    metadata: [
      {
        name: 'description',
        content: 'Cross-Platform React Native UI Toolkit | backed by community',
      },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'https://reactnativeelements.com/' },
      { name: 'og:title', content: 'Seed UI' },
      {
        name: 'og:description',
        content: 'Cross-Platform React Native UI Toolkit | backed by community',
      },
      {
        name: 'og:image',
        content: 'https://reactnativeelements.com/img/website/seo.png',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: 'https://reactnativeelements.com/' },
      { name: 'twitter:title', content: 'Seed UI' },
      {
        name: 'twitter:description',
        content: 'Cross-Platform React Native UI Toolkit | backed by community',
      },
      {
        name: 'twitter:image',
        content: 'https://reactnativeelements.com/img/website/seo.png',
      },
    ],

    liveCodeBlock: {
      playgroundPosition: 'top',
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
    },
    navbar: {
      title: 'Seed UI',
      logo: {
        alt: 'Seed UI Logo',
        src: '/img/website/logo.png',
      },
      hideOnScroll: true,
      items: [
        // { to: 'docs/', label: 'Docs', position: 'right' },
        // { to: 'help', label: 'Help', position: 'right' },
        // { to: 'blog', label: 'Blog', position: 'right' },
        { type: 'search', position: 'right' },
        {
          href: 'https://twitter.com/devjnt_',
          // label: 'Sponsor',
          position: 'right',
          className: 'header-twitter-link',
          'aria-label': 'Twitter',
        },
        {
          href: 'https://github.com/JonatasAlves9/seed_ui',
          // label: 'GitHub',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/shadesOfPurple'),
      defaultLanguage: 'typescript',
    },
    algolia: {
      appId: 'RE3E65KUI0',
      apiKey: 'dbc0364e21346919060006f77fd462f1',
      indexName: 'react_native_elements',
    },
    footer: {
      style: 'dark',
      logo: {
        src: 'img/logo.png',
      },
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
            {
              label: 'Components',
              to: 'docs/overview',
            },
            {
              label: 'Contribution Guide',
              to: 'docs/contributing',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Chat with us on Slack',
              to: 'https://react-native-elements-slack.herokuapp.com/',
            },
            {
              label: 'Submit a bug or feature',
              to: 'https://github.com/react-native-elements/react-native-elements/issues/',
            },
            {
              label: 'Support us on Open Collective',
              to: 'https://opencollective.com/react-native-elements',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              to: 'https://github.com/react-native-elements/react-native-elements',
            },
            {
              label: 'StackOverflow',
              to: 'https://stackoverflow.com/questions/tagged/react-native-elements',
            },
            {
              label: 'VS Code Extension',
              to: 'https://marketplace.visualstudio.com/items?itemName=rne.snippets',
            },
          ],
        },
      ],
    },
  },
  baseUrlIssueBanner: false,
  trailingSlash: false,
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
      },
    },
  },
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  onDuplicateRoutes: 'warn',
  staticDirectories: ['static'],
};

module.exports = config;
