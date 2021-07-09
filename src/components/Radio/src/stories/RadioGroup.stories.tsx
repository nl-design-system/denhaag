import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import FormControlLabel from '@gemeente-denhaag/formcontrollabel';

import Radio, { RadioGroup, RadioGroupProps } from '..';
import { FormGroup } from '@gemeente-denhaag/formgroup';
import pkg from '../../package.json';

export default {
  title: 'Components/Input/Radio/RadioGroup',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
  component: RadioGroup,
} as Meta;

const Template: Story<RadioGroupProps> = (args: RadioGroupProps) => (
  <RadioGroup {...args}>
    <FormControlLabel value="a" label="A" control={<Radio onChange={() => console.log('oh yea')} />} />
    <FormControlLabel value="b" label="B" control={<Radio />} />
    <FormControlLabel value="c" label="C" control={<Radio />} />
  </RadioGroup>
);

export const FormGroupStory: Story<RadioGroupProps> = (args: RadioGroupProps) => (
  <FormGroup {...args}>
    <FormControlLabel value="a" label="A" control={<Radio onChange={() => console.log('oh yea')} />} />
    <FormControlLabel value="b" label="B" control={<Radio />} />
    <FormControlLabel value="c" label="C" control={<Radio />} />
  </FormGroup>
);

export const Default: Story<RadioGroupProps> = Template.bind({});

export const Primary: Story<RadioGroupProps> = Template.bind({});

export const SelectDefault: Story<RadioGroupProps> = Template.bind({});
SelectDefault.args = {
  defaultValue: 'c',
};

export const Row: Story<RadioGroupProps> = Template.bind({});
Row.args = {
  row: true,
};
