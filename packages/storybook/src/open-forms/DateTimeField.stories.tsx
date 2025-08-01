import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { SingleFormioComponent } from './StoryUtil';

const meta: Meta = {
  id: 'open-forms-date-time-field',
  title: 'Open Formulieren/DateTimeField',
  component: SingleFormioComponent,
  args: {
    type: 'date',
    extraComponentProperties: {
      type: 'datetime',
      extraComponentProperties: {
        datePicker: {
          minDate: null,
          maxDate: null,
        },
        enableTime: true,
        format: 'dd-MM-yyyy HH:mm',
        placeholder: 'dd-MM-yyyy HH:mm',
        time_24hr: true,
        timePicker: {
          hourStep: 1,
          minuteStep: 1,
          showMeridian: false,
          readonlyInput: false,
          mousewheel: true,
          arrowkeys: true,
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SingleFormioComponent>;

export const Default: Story = {
  render: (args) => <SingleFormioComponent {...args} />,
};
