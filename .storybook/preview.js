import tuicss from './tuicss.svelte';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'green',
    values: [
      { name: 'white', value: '#fff' },
      { name: 'black', value: '#000' },
      { name: 'green', value: '#00A800' },
      { name: 'blue', value: '#0000A8' },
    ],
  },
}

export const decorators = [() => tuicss];
