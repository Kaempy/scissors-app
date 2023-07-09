const plugin = require('tailwindcss/plugin');
/** @type {import('tailwindcss').Config} */

module.exports = {
  important: true,
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#005AE2',
        secondary: '#141414',
        section: '#F9FBFD',
      },
      fontFamily: {
        gilroy: ['var(--font-gilroy)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-grad':
          'linear-gradient(160deg, rgba(214,5,5,0.095) 0%, rgba(234,200,31,0.0975) 35%, rgba(0,0,0,0) 75%)',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'mobile-md': '375px',
        'mobile-lg': '425px',
        tablet: '640px',
        laptop: '1024px',
        'laptop-md': '1440px',
        desktop: '1280px',
      },
    },
  },
  plugins: [
    plugin(function groupPeer({ addVariant }) {
      const pseudoVariants = [
        // ... Any other pseudo variants you want to support.
        // See https://github.com/tailwindlabs/tailwindcss/blob/6729524185b48c9e25af62fc2372911d66e7d1f0/src/corePlugins.js#L78
        'checked',
      ].map((variant) =>
        Array.isArray(variant) ? variant : [variant, `&:${variant}`]
      );

      for (const [variantName, state] of pseudoVariants) {
        addVariant(`group-peer-${variantName}`, (ctx) => {
          const result = typeof state === 'function' ? state(ctx) : state;
          return result.replace(/&(\S+)/, ':merge(.peer)$1 ~ .group &');
        });
      }
    }),
    require('flowbite/plugin'),
  ],
};
