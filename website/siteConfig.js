const users = [
  {
    caption: 'Memorang',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/website/docs/assets/memorang-logo.png',
    infoLink: 'https://memorangapp.com',
    pinned: true,
  },
];


const repos = {};

repos['relay-hooks'] = {
  title: 'relay-hooks',
  description: 'Use Relay as React hooks',
  url: 'https://github.com/relay-tools/relay-hooks/',
  baseDocs: 'https://relay-tools.github.io/relay-hooks/docs/',
  docs: 'https://relay-tools.github.io/relay-hooks/docs/relay-hooks.html',
  categories: [
    {
      title: 'Relay',
      libraries: [
        {
          html: 'relay-hooks.html',
          npm: 'relay-hooks'
      }]
    }],
};

repos['react-relay-offline'] = {
  title: 'react-relay-offline',
  description: 'TypeScript library files for Relay Modern Offline',
  url: 'https://github.com/morrys/react-relay-offline/',
  baseDocs: 'https://morrys.github.io/react-relay-offline/docs/',
  docs: 'https://morrys.github.io/react-relay-offline/docs/react-relay-offline.html',
  categories: [
    {
      title: 'Relay',
      libraries: [
        {
          html: 'react-relay-offline.html',
          npm: 'react-relay-offline'
      }]
    }],
};

repos['offline-examples'] = {
  title: 'offline-examples',
  description: 'Relay (web & react-native) and Apollo (web) Offline Examples',
  url: 'https://github.com/morrys/offline-examples/',
  categories: [],
};

repos['react-relay-appsync'] = {
  title: 'react-relay-appsync',
  description: 'AppSync for Relay',
  url: 'https://github.com/morrys/react-relay-appsync/',
  baseDocs: 'https://morrys.github.io/react-relay-appsync/docs/',
  docs: 'https://morrys.github.io/react-relay-appsync/docs/react-relay-appsync',
  categories: [
    {
      title: 'AWS',
      libraries: [
        {
          html: 'react-relay-upload-s3.html',
          npm: 'react-relay-upload-s3'
        },
        {
          html: 'react-relay-auth-iam.html',
          npm: 'react-relay-auth-iam'
        },
      ]
    }],
};

repos['wora'] = {
  title: 'wora',
  description: 'TypeScript libraries: Write Once, Render Anywhere',
  url: 'https://github.com/morrys/wora/',
  baseDocs: 'https://morrys.github.io/wora/docs/',
  docs: 'https://morrys.github.io/wora/docs/introduction',
  categories: [
    {
      title: 'Caching',
      libraries: [
        {
          html: 'cache-persist.html',
          npm: '@wora/cache-persist'
        },
        {
          html: 'apollo-cache.html',
          npm: '@wora/apollo-cache'
        },
        {
          html: 'relay-store.html',
          npm: '@wora/relay-store'
        },
      ]
    }, {
      title: 'Networking',
      libraries: [
        {
          html: 'netinfo.html',
          npm: '@wora/netinfo'
        },
        {
          html: 'detect-network.html',
          npm: '@wora/detect-network'
        },
      ]
    },
    {
      title: 'Offline',
      libraries: [
        {
          html: 'offline-first.html',
          npm: '@wora/offline-first'
        },
        {
          html: 'apollo-offline.html',
          npm: '@wora/apollo-offline'
        },
        {
          html: 'relay-offline.html',
          npm: '@wora/relay-offline'
        },
      ]
    }],
};







/*
const headerLinks = Object.keys(repos).map(key => ({ href: repos[key].docs + 'introduction', label: 'Docs ' + repos[key].title }));
headerLinks.push({
  href: 'https://github.com/morrys/website',
  label: 'GitHub',
});
headerLinks.push({ languages: false });
*/

const siteConfig = {
  title: 'Morrys Repositories',
  // tagline: 'Collection of libraries usable for the web, react and react-native.',
  url: 'https://morrys.github.io',
  baseUrl: '/website/',
  projectName: 'website',
  organizationName: 'morrys',
  headerLinks: [{ languages: false }],
  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/favicon.ico',
  footerIcon: 'img/favicon.ico',
  favicon: 'img/favicon.ico',
  colors: {
    primaryColor: '#008ed8',
    secondaryColor: '#17afff',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Lorenzo Di Giacomo`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,
  scrollToTop: true,
  scrollToTopOptions: {
    zIndex: 100,
  },
  enableUpdateTime: true,
  enableUpdateBy: true,
  // docsSideNavCollapsible: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/favicon.ico',
  twitterImage: 'img/favicon.ico',
  twitterUsername: "m0rrys",
  repos,

  woraUrl: 'https://morrys.github.io/wora/',
  woraDocs: 'https://morrys.github.io/wora/docs/',
  appsyncUrl: 'https://morrys.github.io/react-relay-appsync/',
  appsyncDocs: 'https://morrys.github.io/wora/docs/',
  woraUrl: 'https://morrys.github.io/wora/',
  woraDocs: 'https://morrys.github.io/wora/docs/'

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //repoUrl: 'https://github.com/morrys/wora',
};

module.exports = siteConfig;