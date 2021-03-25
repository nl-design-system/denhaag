import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { RadioGroup, RadioGroupProps } from "@gemeente-denhaag/RadioGroup";
import pkg from "@gemeente-denhaag/RadioGroup/package.json";
import { FormControlLabel } from "@gemeente-denhaag/FormControlLabel";
import { Radio } from "@gemeente-denhaag/Radio";

export default {
  title: "Components/Input/RadioGroup",
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
  },
  component: RadioGroup,
} as Meta;

const Template: Story<RadioGroupProps> = (args: any) => (
  <RadioGroup {...args}>
    <FormControlLabel value="a" label="A" control={<Radio color="default" />} />
    <FormControlLabel value="b" label="B" control={<Radio color="default" />} />
    <FormControlLabel value="c" label="C" control={<Radio color="default" />} />
  </RadioGroup>
);

export const Default: Story<RadioGroupProps> = Template.bind({});

export const Primary: Story<RadioGroupProps> = Template.bind({});

export const SelectDefault: Story<RadioGroupProps> = Template.bind({});
SelectDefault.args = {
  defaultValue: "c",
};

export const Row: Story<RadioGroupProps> = Template.bind({});
Row.args = {
  row: true,
};
