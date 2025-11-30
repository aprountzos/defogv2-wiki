// @ts-check
const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Defog Platform',
  tagline: 'Production-ready multi-cluster service mesh',
  favicon: 'img/favicon.ico',

  url: 'https://your-domain.com',
  baseUrl: '/',

  organizationName: 'yourorg',
  projectName: 'defog-platform',

  onBrokenLinks: 'throw',
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
          editUrl: 'https://github.com/yourorg/defog-platform/tree/main/docs/',
        },
        blog: false, // Disable blog for now
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Mermaid theme configuration
      mermaid: {
        theme: {light: 'neutral', dark: 'dark'},
        options: {
          maxTextSize: 90000, // Increased limit for complex diagrams
          // Global flowchart and sequence options to reduce clipping & improve spacing
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
            to: '/docs/getting-started/prerequisites',
            label: 'Get Started',
            position: 'left',
          },
          {
            to: '/docs/components/service-auto-exporter',
            label: 'Components',
            position: 'left',
          },
          {
            href: 'https://github.com/yourorg/defog-platform',
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
              {
                label: 'Get Started',
                to: '/docs',
              },
              {
                label: 'Architecture',
                to: '/docs/architecture/overview',
              },
              {
                label: 'Installation',
                to: '/docs/installation/cluster-setup',
              },
            ],
          },
          {
            title: 'Components',
            items: [
              {
                label: 'Service Auto-Exporter',
                to: '/docs/components/service-auto-exporter',
              },
              {
                label: 'Linkerd Setup',
                to: '/docs/components/linkerd-configuration',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/yourorg/defog-platform',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/yourserver',
              },
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