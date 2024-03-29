module.exports = {
  title: "Source Pocket",
  tagline: "Your source pocket for development",
  url: "https://sourcepocket.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Source-pocket",
  projectName: "source-pocket",
  themeConfig: {
    navbar: {
      logo: {
        alt: "Source Pocket Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Source Pocket",
          position: "left",
        },
        {
          href: "https://github.com/Source-pocket/source-pocket",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Pockets",
          items: [
            {
              label: "Contribute",
              to: "docs/",
            },
            {
              label: "Programming Languages Pocket",
              to: "docs/programming-languages/computer-science",
            },
            {
              label: "Web Development Pocket",
              to: "docs/web-development/hosting-and-servers",
            },
            {
              label: "Development Tools Pocket",
              to: "docs/development-tools/azure",
            },
            {
              label: "Operating Systems Pocket",
              to: "docs/operating-systems/macos",
            },
            {
              label: "Mobile Development Pocket",
              to: "docs/mobile-development/android",
            },
          ],
        },
        {
          items: [
            {
              label: "Graphic Design Pocket",
              to: "docs/graphic-design/general-design",
            },
            {
              label: "Embedded Systems Pocket",
              to: "docs/embedded-systems/arm",
            },
            {
              label: "Databases Pocket",
              to: "docs/databases/mssql",
            },
            {
              label: "Data Science Pocket",
              to: "docs/data-science/big-data",
            },
            {
              label: "Artificial Intelligence Pocket",
              to: "docs/artificial-intelligence/artificial-intelligence",
            },
            {
              label: "Game Development Pocket",
              to: "docs/game-development/unreal-engine",
            },
            {
              label: "Network Programming Pocket",
              to: "docs/network-programming/ipv4-ipv6",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Made with 💜 by the members of Source Pocket Team",
              href: "https://github.com/source-pocket/source-pocket",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SourcePocket, Inc. Built with Docusaurus.`,
    },
    algolia: {
      apiKey: process.env.API_KEY,
      indexName: "sourcepocket",
      placeholder: "search in Source Pocket",
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/Source-Pocket/source-pocket/blob/dev/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
