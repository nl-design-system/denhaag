import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { SingleFormioComponent } from './StoryUtil';

const meta: Meta = {
  id: 'open-forms-postcode',
  title: 'Open Formulieren/PostcodeField',
  component: SingleFormioComponent,
  args: {
    key: 'postcode',
    type: 'postcode',
    label: 'Postcode',
    extraComponentProperties: {
      inputMask: null,
    },
  },
};

export default meta;
type Story = StoryObj<typeof SingleFormioComponent>;

export const Default: Story = {
  render: (args) => <SingleFormioComponent {...args} />,
};
