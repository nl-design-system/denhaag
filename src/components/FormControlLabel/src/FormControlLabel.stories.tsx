import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import Checkbox from '../../Checkbox';
import FormControlLabel, { FormControlLabelProps } from '.';
import pkg from '../package.json';

export default {
  title: 'Components/Input/FormControlLabel',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
  component: FormControlLabel,
} as Meta;

const Template: Story<FormControlLabelProps> = (args: FormControlLabelProps) => (
  <FormControlLabel {...args} label="Checkbox" control={<Checkbox {...args} />} />
);

// language=JS
const defaultCode = `
<FormControlLabel
  label="Checkbox"
  control='{<Checkbox onChange={} />}'
  onChange='{() => {}}'
/>
`;

/**
 * Default FormControlLabel
 */
export const Default: Story<FormControlLabelProps> = Template.bind({});
Default.parameters = {
  docs: {
    source: {
      code: defaultCode,
    },
  },
};
