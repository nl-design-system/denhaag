<<<<<<< HEAD
import React from "react";
import { Meta, Story } from "@storybook/react";
import Button, { ButtonProps } from "../../components/Button";
import pkg from "../../components/Button/package.json";
import { ArrowBackRounded, ArrowForwardRounded } from "@material-ui/icons";
=======
import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import Button, { ButtonProps } from '../../components/Button';
import pkg from '../../components/Button/package.json';
>>>>>>> development

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

<<<<<<< HEAD
const Template: Story<ButtonProps> = (args: any) => <Button {...args}>label</Button>;
=======
const Template: Story<ButtonProps> = (args: ButtonProps) => <Button {...args}>Button</Button>;
>>>>>>> development

/**
 * Default Button
 */
export const Default = Template.bind({});
<<<<<<< HEAD
Default.args = {};
=======
Default.args = {
  variant: 'contained',
};
>>>>>>> development

/**
 * Primary Button
 */
<<<<<<< HEAD
export const PrimaryAction: Story<ButtonProps> = Template.bind({});
PrimaryAction.args = {
  variant: "primary-action"
=======
export const Primary: Story<ButtonProps> = Template.bind({});
Primary.args = {
  color: 'primary',
  variant: 'contained',
>>>>>>> development
};

/**
 * Secondary Button
 */
<<<<<<< HEAD
export const SecondaryAction: Story<ButtonProps> = Template.bind({});
SecondaryAction.args = {
  variant: "secondary-action"
};

/**
 * Medium button
 */
export const Medium: Story<ButtonProps> = Template.bind({});
Medium.args = {
  size: "medium"
=======
export const Secondary: Story<ButtonProps> = Template.bind({});
Secondary.args = {
  color: 'secondary',
  variant: 'contained',
};

/**
 * Outlined Button
 */
export const Outlined: Story<ButtonProps> = Template.bind({});
Outlined.args = {
  variant: 'outlined',
};

/**
 * Text button
 */
export const Text: Story<ButtonProps> = Template.bind({});
Text.args = {
  variant: 'text',
>>>>>>> development
};

/**
 * Icon left button
 */
<<<<<<< HEAD
export const IconLeft: Story<ButtonProps> = Template.bind({});
IconLeft.args = {
  startIcon: <ArrowBackRounded />
=======
export const Small: Story<ButtonProps> = Template.bind({});
Small.args = {
  size: 'small',
>>>>>>> development
};

/**
 * Icon right button
 */
<<<<<<< HEAD
export const IconRight: Story<ButtonProps> = Template.bind({});
IconRight.args = {
  variant: "secondary-action",
  endIcon: <ArrowForwardRounded />
=======
export const Medium: Story<ButtonProps> = Template.bind({});
Medium.args = {
  size: 'medium',
>>>>>>> development
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
