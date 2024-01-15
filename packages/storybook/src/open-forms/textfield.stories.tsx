import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { SingleFormioComponent } from './story-util';

const meta: Meta = {
  id: 'open-forms-textfield',
  title: 'Open Formulieren/Textfield',
  component: SingleFormioComponent,
  args: {
    key: 'textfield',
    type: 'textfield',
    label: 'Voornaam',
  },
};

export default meta;
type Story = StoryObj<typeof SingleFormioComponent>;

export const Default: Story = {
  render: (args) => <SingleFormioComponent {...args} />,
};
