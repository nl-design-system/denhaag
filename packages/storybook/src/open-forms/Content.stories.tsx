import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { SingleFormioComponent } from './StoryUtil';

const meta: Meta = {
  id: 'open-forms-content',
  title: 'Open Formulieren/Content',
  component: SingleFormioComponent,
  args: {
    key: 'content',
    type: 'content',
    extraComponentProperties: {
      html: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Quisque a felis ante. Nunc dictum, <b>dui et scelerisque euismod</b>, ex dui sodales magna,
    quis vehicula nulla justo sed urna. <i>Integer maximus tempus tellus</i> vel commodo.
    Orci varius natoque penatibus et magnis <a href="#">dis parturient montes.</a></p>`,
    },
  },
};

export default meta;
type Story = StoryObj<typeof SingleFormioComponent>;

export const Default: Story = {
  render: (args) => <SingleFormioComponent {...args} />,
};
