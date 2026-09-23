import { useAddonState, useChannel, useStorybookState } from 'storybook/manager-api';
import { AddonPanel, Button, SyntaxHighlighter } from 'storybook/internal/components';
import { createEmptyDesignTokenTree } from '@nl-design-system-unstable/theme-toolkit/dist/design-tokens.js';
import React, { useState } from 'react';
import { DESIGN_TOKENS_ADDON_ID, DESIGN_TOKENS_UPDATE_EVENT } from './designTokensConstants';

type TokenDefinition = Parameters<typeof createEmptyDesignTokenTree>[0];
type CopyTarget = 'values' | 'empty';

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
  const [copiedTarget, setCopiedTarget] = useState<CopyTarget>();

  useChannel({
    [DESIGN_TOKENS_UPDATE_EVENT]: (nextState: DesignTokensState) => setTokensState(nextState),
  });

  const tokensDefinition = tokensState.storyId === storyId ? tokensState.tokensDefinition : undefined;
  const codeWithValues = tokensDefinition ? JSON.stringify(tokensDefinition, null, 2) : undefined;
  const codeWithoutValues = tokensDefinition
    ? JSON.stringify(createEmptyDesignTokenTree(tokensDefinition), null, 2)
    : undefined;

  const copyJson = async (value: string, target: CopyTarget) => {
    await navigator.clipboard.writeText(value);
    setCopiedTarget(target);
    window.setTimeout(() => setCopiedTarget(undefined), 1500);
  };

  return (
    <AddonPanel active={active}>
      {tokensDefinition && codeWithValues && codeWithoutValues ? (
        <div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', padding: '0.75rem 1rem' }}>
            <Button
              size="medium"
              variant="outline"
              onClick={() => copyJson(codeWithValues, 'values')}
              ariaLabel="Copy token JSON with values"
            >
              {copiedTarget === 'values' ? 'Copied!' : 'Copy JSON'}
            </Button>
            <Button
              size="medium"
              variant="outline"
              onClick={() => copyJson(codeWithoutValues, 'empty')}
              ariaLabel="Copy empty token JSON"
            >
              {copiedTarget === 'empty' ? 'Copied!' : 'Copy empty JSON'}
            </Button>
          </div>
          <SyntaxHighlighter language="json" padded format={false} showLineNumbers={false} wrapLongLines>
            {codeWithValues}
          </SyntaxHighlighter>
        </div>
      ) : (
        <div style={{ padding: '1rem' }}>No design tokens are available for this component.</div>
      )}
    </AddonPanel>
  );
}
