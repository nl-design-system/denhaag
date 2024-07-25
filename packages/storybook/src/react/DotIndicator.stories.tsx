import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button } from '@gemeente-denhaag/button';
import { DotIndicator } from '@gemeente-denhaag/dotindicator';
import readme from '../../../../components/DotIndicator/README.md?raw';

const exampleArgs = {
  overlap: 'rectangle',
};

const meta = {
  id: 'react-data-display-dot-indicator',
  title: 'React/Data Display/Dot indicator',
  component: DotIndicator,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof DotIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <DotIndicator {...args}>
      <Button>Read messages</Button>
    </DotIndicator>
  ),
};
