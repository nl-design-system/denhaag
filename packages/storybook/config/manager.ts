import { addons, types } from 'storybook/manager-api';
import { create } from 'storybook/theming';
import theme from './theme';

addons.setConfig({
  theme: create({
    ...theme,
  }),
});

// The built-in Docs code panel contains the React/JSX source. Give it a
// framework-specific title so it pairs clearly with the rendered HTML panel.
addons.register('denhaag/react-code-panel-title', () => {
  const panels = addons.getElements(types.PANEL);
  const codePanel = panels['storybook/docs/panel'];

  if (codePanel) {
    addons.add('storybook/docs/panel', {
      ...codePanel,
      title: 'React',
    });
  }
});
