import { addons, types } from 'storybook/manager-api';
import { create } from 'storybook/theming';
import theme from './theme';

addons.setConfig({
  theme: create({
    ...theme,
  }),
});

// Keep the addon panels in a predictable order and give the built-in Docs code
// panel a framework-specific title so it pairs clearly with the rendered HTML panel.
addons.register('denhaag/react-code-panel-title', () => {
  const panels = addons.getElements(types.PANEL);
  const panelOrder = [
    'storybook/controls/panel',
    'storybook/actions/panel',
    'storybook/interactions/panel',
    'storybook/docs/panel',
    'storybook/html/panel',
    'storybook/a11y/panel',
  ];
  const registeredPanels = { ...panels };

  for (const panelId of panelOrder) {
    const panel = registeredPanels[panelId];
    if (panel) {
      delete panels[panelId];
      addons.add(panelId, panel);
    }
  }

  const codePanel = panels['storybook/docs/panel'];
  if (codePanel) {
    addons.add('storybook/docs/panel', {
      ...codePanel,
      title: 'React',
    });
  }
});
