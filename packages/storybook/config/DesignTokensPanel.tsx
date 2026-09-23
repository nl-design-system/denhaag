import { useAddonState, useChannel, useStorybookState } from 'storybook/manager-api';
import { AddonPanel } from 'storybook/internal/components';
import { createEmptyDesignTokenTree } from '@nl-design-system-unstable/theme-toolkit/dist/design-tokens.js';
import React from 'react';
import { CodePanel } from './CodePanel';
import { DESIGN_TOKENS_ADDON_ID, DESIGN_TOKENS_UPDATE_EVENT } from './designTokensConstants';

type TokenDefinition = Parameters<typeof createEmptyDesignTokenTree>[0];

type DesignTokensState = {
  storyId?: string;
  tokensDefinition?: TokenDefinition;
};

type DesignTokensPanelProps = {
  active?: boolean;
};

export function DesignTokensPanel({ active = false }: DesignTokensPanelProps) {
  const { storyId } = useStorybookState();
  const [tokensState, setTokensState] = useAddonState<DesignTokensState>(DESIGN_TOKENS_ADDON_ID, {});

  useChannel({
    [DESIGN_TOKENS_UPDATE_EVENT]: (nextState: DesignTokensState) => setTokensState(nextState),
  });

  const tokensDefinition = tokensState.storyId === storyId ? tokensState.tokensDefinition : undefined;
  const codeWithValues = tokensDefinition ? JSON.stringify(tokensDefinition, null, 2) : undefined;
  const codeWithoutValues = tokensDefinition
    ? JSON.stringify(createEmptyDesignTokenTree(tokensDefinition), null, 2)
    : undefined;

  return (
    <AddonPanel active={active}>
      {tokensDefinition && codeWithValues && codeWithoutValues ? (
        <CodePanel
          actions={[
            { label: 'Copy JSON', ariaLabel: 'Copy token JSON with values', value: codeWithValues },
            { label: 'Copy empty JSON', ariaLabel: 'Copy empty token JSON', value: codeWithoutValues },
          ]}
          language="json"
        >
          {codeWithValues}
        </CodePanel>
      ) : (
        <div style={{ padding: '1rem' }}>No design tokens are available for this component.</div>
      )}
    </AddonPanel>
  );
}
