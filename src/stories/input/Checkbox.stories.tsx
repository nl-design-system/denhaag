import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import Checkbox, { CheckboxProps } from '../../components/Checkbox';
import FormControlLabel from '../../components/FormControlLabel';
import pkg from '../../components/Checkbox/package.json';

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

const Template: Story<CheckboxProps> = (args: any) => (
  <FormControlLabel label="Checkbox" control={<Checkbox {...args} />} />
);

// language=JS
const defaultCode = `
<FormControlLabel label='Checkbox'>
  <Checkbox onChange='{}'/>
</FormControlLabel>
`;

// language=JS
const primaryCode = `
<FormControlLabel label="Checkbox">
  <Checkbox onChange="{}" color="primary"/>
</FormControlLabel>
`;

// language=JS
const secondaryCode = `
<FormControlLabel label="Checkbox">
  <Checkbox onChange="{}" color="secondary"/>
</FormControlLabel>
`;

// language=JS
const checkedDefault = `
<FormControlLabel label="Checkbox">
  <Checkbox onChange="{}" defaultChecked/>
</FormControlLabel>
`;

// language=JS
const smallCode = `
<FormControlLabel label="Checkbox">
  <Checkbox onChange="{}" size="small"/>
</FormControlLabel>
`;

// language=JS
const indeterminateCode = `
<FormControlLabel label="Checkbox">
  <Checkbox onChange="{}" indeterminate/>
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
 * Primary Checkbox
 */
export const Primary: Story<CheckboxProps> = Template.bind({});
Primary.args = {
  color: 'primary',
};

Primary.parameters = {
  docs: {
    source: {
      code: primaryCode,
    },
  },
};

/**
 * Secondary Checkbox
 */
export const Secondary: Story<CheckboxProps> = Template.bind({});
Secondary.args = {
  color: 'secondary',
};

Secondary.parameters = {
  docs: {
    source: {
      code: secondaryCode,
    },
  },
};

/**
 * Default Checked Checkbox
 */
export const CheckedByDefault: Story<CheckboxProps> = Template.bind({});
CheckedByDefault.args = {
  defaultChecked: true,
};

CheckedByDefault.parameters = {
  docs: {
    source: {
      code: checkedDefault,
    },
  },
};

/**
 * Small Checkbox
 */
export const Small: Story<CheckboxProps> = Template.bind({});
Small.args = {
  size: 'small',
};

Small.parameters = {
  docs: {
    source: {
      code: smallCode,
    },
  },
};

/**
 * Indeterminate Checkbox
 */
export const Indeterminate: Story<CheckboxProps> = Template.bind({});
Indeterminate.args = {
  indeterminate: true,
};

Indeterminate.parameters = {
  docs: {
    source: {
      code: indeterminateCode,
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
