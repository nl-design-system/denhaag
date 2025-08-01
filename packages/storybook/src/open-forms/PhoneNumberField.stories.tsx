import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { SingleFormioComponent } from './StoryUtil';

const meta: Meta = {
  id: 'open-forms-phone-number',
  title: 'Open Formulieren/PhoneNumber',
  component: SingleFormioComponent,
  args: {
    key: 'phone-number',
    type: 'phoneNumber',
    label: 'Telefoonnummer',
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
