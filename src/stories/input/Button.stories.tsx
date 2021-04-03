import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { Button } from "../..";
import { ButtonProps } from "../../components/Button";
import pkg from "../../components/Button/package.json";

export default {
  title: "Components/Input/Button",
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: "dynamic"
      }
    }
  },
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args: ButtonProps) => <Button {...args}>Button</Button>;

/**
 * Default Button
 */
export const Default = Template.bind({});
Default.args = {
  variant: "contained",
};

/**
 * Primary Button
 */
export const Primary: Story<ButtonProps> = Template.bind({});
Primary.args = {
  color: "primary",
  variant: "contained",
};

/**
 * Secondary Button
 */
export const Secondary: Story<ButtonProps> = Template.bind({});
Secondary.args = {
  color: "secondary",
  variant: "contained",
};

/**
 * Outlined Button
 */
export const Outlined: Story<ButtonProps> = Template.bind({});
Outlined.args = {
  variant: "outlined",
};

/**
 * Text button
 */
export const Text: Story<ButtonProps> = Template.bind({});
Text.args = {
  variant: "text",
};

/**
 * Small button
 */
export const Small: Story<ButtonProps> = Template.bind({});
Small.args = {
  size: "small",
};

/**
 * Medium button
 */
export const Medium: Story<ButtonProps> = Template.bind({});
Medium.args = {
  size: "medium",
};

/**
 * Large button
 */
export const Large: Story<ButtonProps> = Template.bind({});
Large.args = {
  size: "large",
};

/**
 * Disabled Button
 */
export const Disabled: Story<ButtonProps> = Template.bind({});
Disabled.args = {
  disabled: true,
};
