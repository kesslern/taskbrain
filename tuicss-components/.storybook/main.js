const path = require('path');
const preprocess = require('svelte-preprocess');

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: [
    '../stories/**/*.stories.js',
    '../stories/**/*.stories.svelte',
  ],
  addons: [
    "@storybook/addon-essentials",
    '@storybook/addon-svelte-csf',
  ],
  preprocess: preprocess(),
  webpackFinal: async (config) => {
    const svelteLoader = config.module.rules.find( (r) => r.loader && r.loader.includes('svelte-loader'))
    svelteLoader.options.preprocess = require('svelte-preprocess')()
    config.resolve = {
      ...config.resolve,
      // see below for an explanation
      alias: {
        svelte: path.resolve("node_modules", "svelte"),
      },
      extensions: [".mjs", ".js", ".svelte"],
      mainFields: ["svelte", "browser", "module", "main"],
    };
    return config
  },
};
