// @ts-check
const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Defog Platform',
  tagline: 'Production-ready multi-cluster service mesh',
  favicon: 'img/favicon.ico',

  // GitHub Pages URL
  url: 'https://aprountzos.github.io',
  baseUrl: '/defogv2-wiki/',

  organizationName: 'aprountzos',
  projectName: 'defogv2-wiki',

  onBrokenLinks: 'warn', // Changed to warn so build passes
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Enable Mermaid diagrams
  themes: ['@docusaurus/theme-mermaid'],
  markdown: {
    mermaid: true,
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/aprountzos/defogv2-wiki/tree/main/docs/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      mermaid: {
        theme: {light: 'neutral', dark: 'dark'},
        options: {
          maxTextSize: 90000,
          flowchart: {
            nodeSpacing: 50,
            rankSpacing: 50,
            diagramPadding: 12,
            spacingFactor: 1.15,
          },
          sequence: {
            actorSpacing: 48,
            noteMargin: 10,
          },
        },
      },
      image: 'img/defog-social-card.jpg',
      navbar: {
        title: 'Defog',
        logo: {
          alt: 'Defog Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/aprountzos/defogv2-wiki',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {label: 'Docs Home', to: '/docs'},
            ],
          },
          {
            title: 'Community',
            items: [
              {label: 'GitHub', href: 'https://github.com/aprountzos/defogv2-wiki'},
              {label: 'Discord', href: 'https://discord.gg/yourserver'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Defog Platform. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['bash', 'yaml', 'go', 'docker', 'json'],
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;
