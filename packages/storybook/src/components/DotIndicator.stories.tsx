import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@gemeente-denhaag/button';
import { DotIndicator } from '@gemeente-denhaag/dotindicator';
import readme from '../../../../components/DotIndicator/README.md?raw';

const exampleArgs = {
  overlap: 'rectangle',
};

const meta = {
  component: DotIndicator,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/eSl0Sclc8t03X76qM1cWyz/%F0%9F%93%95-HDS-Library?node-id=649-11473',
    },
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
