import { ComponentTokensSection } from '@nl-design-system-unstable/theme-toolkit';
import { useOf } from '@storybook/blocks';
import { StoryObj } from '@storybook/react';
import React from 'react';

export function DesignTokensBlock() {
  const resolvedOf = useOf('story', ['story', 'meta', 'component']);
  const storyObj: StoryObj | undefined = (resolvedOf as typeof resolvedOf & { story?: StoryObj })?.story;

  if (typeof storyObj?.parameters?.tokensPrefix === 'string') {
    return (
      <ComponentTokensSection
        component={storyObj.parameters.tokensPrefix}
        tokens={storyObj.parameters.tokens}
        definition={storyObj.parameters.tokensDefinition}
      />
    );
  }

  return null;
}
