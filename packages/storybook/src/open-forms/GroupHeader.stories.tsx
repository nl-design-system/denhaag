import React, { useId } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import Fieldset from '@open-formulieren/formio-renderer/components/forms/Fieldset.js';
import { SingleFormioComponent } from './StoryUtil';
import '@open-formulieren/formio-renderer/formio-renderer.css';
import './styles';

type GroupHeaderProps = {
  label: string;
  hideHeader: boolean;
};

const GroupHeader = ({ label, hideHeader }: GroupHeaderProps) => {
  const id = useId();

  return (
    <Fieldset header={label} headerHidden={hideHeader}>
      <div className="utrecht-form-field">
        <label className="utrecht-form-label" htmlFor={id}>
          Voornaam
        </label>
        <input className="utrecht-textbox utrecht-textbox--html-input" id={id} type="text" />
      </div>
    </Fieldset>
  );
};

const meta = {
  title: 'Open Formulieren/Group Header',
  id: 'open-forms-group-header',
  component: GroupHeader,
  args: {
    label: 'Persoonsgegevens',
    hideHeader: false,
  },
  argTypes: {
    label: { control: 'text', name: 'Groepskop' },
    hideHeader: { control: 'boolean', name: 'Kop verbergen' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Group headers using the Open Forms 4 renderer. The Open Forms 3 example is included for comparison.',
      },
    },
  },
} satisfies Meta<typeof GroupHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const OpenForms3: Story = {
  render: ({ label, hideHeader }) => (
    <SingleFormioComponent
      type="fieldset"
      key="group-header"
      label={label}
      extraComponentProperties={{
        hideHeader,
        components: [{ key: 'firstName', type: 'textfield', input: true, label: 'Voornaam' }],
      }}
    />
  ),
};

export const LongHeader: Story = {
  args: { label: 'Persoonsgegevens van de persoon voor wie u deze geboorteakte aanvraagt' },
  globals: { viewport: { value: 'wcagMinimum', isRotated: false } },
};

export const HiddenHeader: Story = {
  args: { hideHeader: true },
};

export const NestedGroups: Story = {
  render: (args) => (
    <Fieldset header="Uw gegevens">
      <GroupHeader {...args} />
      <GroupHeader {...args} label="Contactpersoon" />
    </Fieldset>
  ),
};

export const WithRadioGroup: Story = {
  render: (args) => (
    <>
      <GroupHeader {...args} />
      <SingleFormioComponent
        type="radio"
        key="applicant"
        label="Voor wie vraagt u de akte aan?"
        extraComponentProperties={{
          values: [
            { label: 'Mijzelf', value: 'myself' },
            { label: 'Iemand anders', value: 'someoneElse' },
          ],
        }}
      />
    </>
  ),
};
