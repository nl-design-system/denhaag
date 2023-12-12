import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { FormControlLabel } from '@gemeente-denhaag/formcontrollabel';
import {
  FormFieldInput,
  FormFieldDescription,
  FormFieldGroup,
  FormFieldGroupLabel,
} from '@gemeente-denhaag/form-field';
import { Radio } from '@gemeente-denhaag/radio';
import readme from '../../../../components/Radio/README.md';
import { action } from '@storybook/addon-actions';

const exampleArgs = {
  id: 'radio',
  name: 'radio',
  onChange: action('Radio action'),
  value: 'check',
};

const meta = {
  id: 'react-input-radio',
  title: 'React/Input/Radio',
  component: Radio,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: { ...Default.args, disabled: true },
};

export const WithError: Story = {
  args: { ...Default.args, error: true },
};

export const WithLabel: Story = {
  render: (args) => <FormControlLabel label="Label" input={<Radio {...args} />} />,
};

export const Group: Story = {
  render: (args) => (
    <FormFieldGroup aria-describedby={'description'} role={'radiogroup'}>
      <FormFieldGroupLabel>Label</FormFieldGroupLabel>
      <FormFieldInput>
        <FormControlLabel
          label="Radio One"
          input={<Radio {...args} id={'radio-1'} onChange={action('Radio One action')} value={'one'} />}
        />
        <FormControlLabel
          label="Radio Two"
          input={<Radio {...args} id={'radio-2'} onChange={action('Radio Two action')} value={'two'} />}
        />
        <FormControlLabel
          label="Radio Three"
          input={<Radio {...args} id={'radio-3'} onChange={action('Radio Three action')} value={'three'} />}
        />
      </FormFieldInput>
      <FormFieldDescription id="description">Description</FormFieldDescription>
    </FormFieldGroup>
  ),
};

export const GroupWithError: Story = {
  render: (args) => (
    <FormFieldGroup error={true} aria-describedby={'description'} role={'radiogroup'}>
      <FormFieldGroupLabel>Label</FormFieldGroupLabel>
      <FormFieldInput>
        <FormControlLabel
          label="Radio One"
          input={<Radio {...args} id="radio-1" error={true} onChange={action('Radio One action')} value={'one'} />}
        />
        <FormControlLabel
          label="Radio Two"
          input={<Radio {...args} id="radio-2" error={true} onChange={action('Radio Two action')} value={'two'} />}
        />
        <FormControlLabel
          label="Radio Three"
          input={<Radio {...args} id="radio-3" error={true} onChange={action('Radio Three action')} value={'three'} />}
        />
      </FormFieldInput>
      <FormFieldDescription id="description">Description</FormFieldDescription>
    </FormFieldGroup>
  ),
};
