import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';
import theme from './theme';

addons.setConfig({
  theme: create({
    ...theme,
  }),
});
