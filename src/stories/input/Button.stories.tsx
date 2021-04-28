import React from "react";
import { Meta, Story } from "@storybook/react";
import Button, { ButtonProps } from "../../components/Button";
import pkg from "../../components/Button/package.json";
import { ArrowBackRounded, ArrowForwardRounded } from "@material-ui/icons";

export default {
  title: 'Components/Input/Button',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args: ButtonProps) => <Button {...args}>Button</Button>;

/**
 * Default Button
 */
export const Default = Template.bind({});
Default.args = {};

/**
 * Primary Button
 */
export const PrimaryAction: Story<ButtonProps> = Template.bind({});
PrimaryAction.args = {
  variant: "primary-action"
};

/**
 * Secondary Button
 */
export const SecondaryAction: Story<ButtonProps> = Template.bind({});
SecondaryAction.args = {
  variant: "secondary-action"
};

/**
 * Icon left button
 */
export const IconLeft: Story<ButtonProps> = Template.bind({});
IconLeft.args = {
  startIcon: <ArrowBackRounded />
};

/**
 * Icon right button
 */
export const IconRight: Story<ButtonProps> = Template.bind({});
IconRight.args = {
  variant: "secondary-action",
  endIcon: <ArrowForwardRounded />
};

export const Medium: Story<ButtonProps> = Template.bind({});
Medium.args = {
  size: 'medium',
};

/**
 * Large button
 */
export const Large: Story<ButtonProps> = Template.bind({});
Large.args = {
  size: 'large',
};

/**
 * Disabled Button
 */
export const Disabled: Story<ButtonProps> = Template.bind({});
Disabled.args = {
  disabled: true,
};
