import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { DotIndicator } from '@gemeente-denhaag/dotindicator';
import { Form } from 'react-formio';
import readme from '../../../../components/DotIndicator/README.md';
import TextField from '@gemeente-denhaag/textfield';

const meta = {
  id: 'react-forms-test',
  title: 'Open Formulieren/Test',
  argTypes: {
    components: {},
    key: { type: { required: true } },
    label: { type: { required: true } },
    type: { table: { disable: true } },
    extraComponentProperties: {
      description: `Any additional Form.io component properties, recursively merged into the
        component definition.`,
    },
    evalContext: { table: { disable: true } },
  },
  component: TextField,
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof DotIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <Form
        form={{
          type: 'form',
          components: [
            {
              key: 'file',
              type: 'date',
              extraComponentProperties: {
                format: 'dd-MM-yyyy',
                placeholder: 'dd-mm-yyyy',
                enableTime: false,
                datePicker: {
                  minDate: null,
                  maxDate: null,
                },
              },
            },
          ],
        }}
        submission={{}}
        options={{
          noAlerts: true,
          language: 'nl',
          baseUrl: '',
          evalContext: {
            ofPrefix: 'openforms-',
            requiredFieldsWithAsterisk: false,
          },
          ofContext: {
            submissionUuid: '426c8d33-6dcb-4578-8208-f17071a4aebe',
          },
        }}
      />
    );
  },
};
