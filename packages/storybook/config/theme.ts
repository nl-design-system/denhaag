import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  colorPrimary: '#F8D62A',
  colorSecondary: '#238541',

  // UI
  appBg: '#F8F7F5',
  appContentBg: '#FFFFFF',
  appBorderColor: '#7A7A7A',
  appBorderRadius: 3,

  textColor: '#4B4B4B',

  barTextColor: '#000000',
  barSelectedColor: '#238541',
  barBg: '#D2D2D2',

  brandTitle: 'Gemeente Den Haag',
  brandUrl: 'https://www.denhaag.nl',
  brandImage: 'logo.svg',
});
