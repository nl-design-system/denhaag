import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@gemeente-denhaag/button';
import { DotIndicator } from '@gemeente-denhaag/dotindicator';
import readme from '../../../../components/DotIndicator/README.md?raw';
import { getComponentDescription } from '../utils/getPackage';
import pkg from '../../../../components/DotIndicator/package.json';

const exampleArgs = {
  overlap: 'rectangle',
};

const meta = {
  component: DotIndicator,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: getComponentDescription(pkg.name, pkg.version, readme),
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
