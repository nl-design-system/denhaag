import { addons, types } from 'storybook/manager-api';
import { create } from 'storybook/theming';
import React from 'react';
import { DesignTokensPanel } from './DesignTokensPanel';
import { HtmlPanel } from './HtmlPanel';
import { ReactPanel } from './ReactPanel';
import { DESIGN_TOKENS_PANEL_ID } from './designTokensConstants';
import theme from './theme';

addons.setConfig({
  theme: create({
    ...theme,
  }),
});

// Keep the addon panels in a predictable order and give the built-in Docs code
// panel a framework-specific title so it pairs clearly with the HTML and Tokens panels.
addons.register('denhaag/react-code-panel-title', (api) => {
  addons.add(DESIGN_TOKENS_PANEL_ID, {
    type: types.PANEL,
    title: 'Tokens',
    match: ({ viewMode }) => viewMode === 'story',
    render: ({ active }) => React.createElement(DesignTokensPanel, { active }),
  });

  const panels = addons.getElements(types.PANEL);
  const panelOrder = [
    'storybook/controls/panel',
    'storybook/actions/panel',
    'storybook/interactions/panel',
    'storybook/docs/panel',
    'storybook/html/panel',
    DESIGN_TOKENS_PANEL_ID,
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
      render: ({ active }: { active?: boolean }) => {
        const channel = api.getChannel();
        const currentStory = api.getCurrentStoryData();
        const lastEvent = channel?.last('storybook/docs/snippet-rendered')?.[0];

        return React.createElement(ReactPanel, {
          active,
          currentStoryId: currentStory?.id,
          lastEvent,
        });
      },
    });
  }

  const htmlPanel = panels['storybook/html/panel'];
  if (htmlPanel) {
    addons.add('storybook/html/panel', {
      ...htmlPanel,
      render: ({ active }: { active?: boolean }) => React.createElement(HtmlPanel, { active }),
    });
  }
});
