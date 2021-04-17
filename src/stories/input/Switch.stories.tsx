import React from "react";
import { Meta, Story } from "@storybook/react";
import pkg from "../../components/Switch/package.json";
import Switch, { SwitchProps } from "../../components/Switch";
import FormControlLabel from "../../components/FormControlLabel";

export default {
  title: "Components/Input/Switch",
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: "dynamic",
      }
    }
  },
  component: Switch
} as Meta;

const Template: Story<SwitchProps> = (args: any) => {
  return (
    <div>
      <FormControlLabel label="Switch" control={<Switch {...args} />} />
    </div>
  );
};

/**
 * Default Switch
 */
export const Default: Story<SwitchProps> = Template.bind({});

/**
 * Default Checked Switch
 */
export const DefaultChecked: Story<SwitchProps> = Template.bind({});
DefaultChecked.args = {
  defaultChecked: true
};

/**
 * Primary Switch
 */
export const Primary: Story<SwitchProps> = Template.bind({});
Primary.args = {
  color: "primary"
};

/**
 * Secondary Switch
 */
export const Secondary: Story<SwitchProps> = Template.bind({});
Secondary.args = {
  color: "secondary"
};

/**
 * Disabled Switch
 */
export const Disabled: Story<SwitchProps> = Template.bind({});
Disabled.args = {
  disabled: true
};
