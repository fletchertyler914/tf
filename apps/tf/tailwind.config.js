const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, 'pages/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    join(__dirname, 'public/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
  presets: [require('../../tailwind-workspace-preset.config.js')],
};
