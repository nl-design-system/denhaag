import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { Button, ButtonProps } from 'nlds-react-components';


export default {
  title: 'Example/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args: any) => <Button {...args}>Button</Button>;

export const Primary : Story<ButtonProps> = Template.bind({});
Primary.args = {
  onClick: () => {action('Primary button clicked')},
  color: 'primary',
  variant: 'contained',
};

export const Secondary: Story<ButtonProps> = Template.bind({});
Secondary.args = {
  onClick: () => {action('Secondary button clicked')},
  color: 'secondary',
  variant: 'contained',
};
