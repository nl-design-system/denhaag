import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import Checkbox, { CheckboxProps } from '.';
import FormControlLabel from '../../FormControlLabel';
import pkg from '../package.json';

export default {
  title: 'Components/Input/Checkbox',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
  component: Checkbox,
} as Meta;

const Template: Story<CheckboxProps> = (args: CheckboxProps) => (
  <FormControlLabel label="Checkbox" control={<Checkbox {...args} />} />
);

// language=JS
const defaultCode = `
<FormControlLabel label='Checkbox'>
  <Checkbox onChange='{}'/>
</FormControlLabel>
`;

// language=JS
const disabledCode = `
<FormControlLabel label="Checkbox">
  <Checkbox onChange="{}" disabled/>
</FormControlLabel>
`;

/**
 * Default Checkbox
 */
export const Default: Story<CheckboxProps> = Template.bind({});
Default.parameters = {
  docs: {
    source: {
      code: defaultCode,
    },
  },
};

/**
 * Disabled Checkbox
 */
export const Disabled: Story<CheckboxProps> = Template.bind({});
Disabled.args = {
  disabled: true,
};

Disabled.parameters = {
  docs: {
    source: {
      code: disabledCode,
    },
  },
};

/**
 * Error Checkbox
 */
export const Error: Story<CheckboxProps> = Template.bind({});
Error.args = {
  color: 'error',
};

Error.parameters = {
  docs: {
    source: {
      code: disabledCode,
    },
  },
};
