import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { SingleFormioComponent } from './story-util';

const meta: Meta = {
  id: 'open-forms-bsn',
  title: 'Open Formulieren/BSN',
  component: SingleFormioComponent,
  args: {
    key: 'bsn',
    type: 'bsn',
    label: 'Burgerservicenummer (BNS)',
  },
};

export default meta;
type Story = StoryObj<typeof SingleFormioComponent>;

export const Default: Story = {
  render: (args) => <SingleFormioComponent {...args} />,
};
