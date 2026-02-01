// Tailwind CDN configuration shared across pages
// Keep before the CDN script tag so Tailwind picks it up at load time.
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1DA1F2',
        secondary: '#14171A',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.project-card': {
          '@apply rounded-2xl shadow-lg overflow-hidden transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:-translate-y-2 hover:shadow-2xl': {},
        },
      });
    },
  ],
};
