import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import Checkbox from "../../components/input/Checkbox/Checkbox";
import FormControlLabel from "../../components/input/FormControlLabel/FormControlLabel";
import FormGroup, { FormGroupProps } from "../../components/input/FormGroup/FormGroup";
import pkg from "../../components/input/FormGroup/package.json";

export default {
  title: "Components/Input/FormGroup",
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
  },
  component: FormGroup,
} as Meta;

const Template: Story<FormGroupProps> = (args: any) => (
  <FormGroup {...args}>
    <FormControlLabel {...args} control={<Checkbox />} label="Checkbox 1" />
    <FormControlLabel {...args} control={<Checkbox />} label="Checkbox 2" />
  </FormGroup>
);

export const Default: Story<FormGroupProps> = Template.bind({});

export const Row: Story<FormGroupProps> = Template.bind({});
Row.args = {
  row: true,
};
