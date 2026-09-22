import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import * as Icons from '@gemeente-denhaag/icons';
import { SvgIcon, ArrowLeftIcon } from '@gemeente-denhaag/icons';
import readme from '../../../../components/Icons/README.md?raw';

const allIcons = Object.entries(Icons).filter(([key]) => (key === 'default' ? false : true));

const exampleArgs = {};

const meta = {
  component: SvgIcon,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof SvgIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// TODO: add controls to select icon
export const Default: Story = {
  args: { ...exampleArgs, component: ArrowLeftIcon },
};

export const All: Story = {
  render: (args) => {
    const children = allIcons.map<React.ReactElement>(([key, value]) => {
      const IconElement = value;

      return (
        <div key={key} style={{ flexBasis: '16.666667%' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <IconElement {...args} />
          </div>
          <p style={{ textAlign: 'center', color: '#4B4B4B', fontFamily: 'monospace' }}>{key}</p>
        </div>
      );
    });

    return <div style={{ display: 'flex', flexWrap: 'wrap' }}>{children}</div>;
  },
};
