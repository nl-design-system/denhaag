import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import '@gemeente-denhaag/eventdate';

import readme from '../../../../components/EventDate/README.md?raw';

const meta = {
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <p className="denhaag-event-date">
      <svg
        className="denhaag-event-date__icon"
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.5 0.667969C5.96024 0.667969 6.33333 1.04106 6.33333 1.5013V2.33464H9.66667V1.5013C9.66667 1.04106 10.0398 0.667969 10.5 0.667969C10.9602 0.667969 11.3333 1.04106 11.3333 1.5013V2.33464H13.8333C14.7538 2.33464 15.5 3.08083 15.5 4.0013V14.8346C15.5 15.7551 14.7538 16.5013 13.8333 16.5013H2.16667C1.24619 16.5013 0.5 15.7551 0.5 14.8346V4.0013C0.5 3.08083 1.24619 2.33464 2.16667 2.33464H4.66667V1.5013C4.66667 1.04106 5.03976 0.667969 5.5 0.667969ZM4.66667 4.0013H2.16667V6.5013H13.8333V4.0013H11.3333V4.83464C11.3333 5.29487 10.9602 5.66797 10.5 5.66797C10.0398 5.66797 9.66667 5.29487 9.66667 4.83464V4.0013H6.33333V4.83464C6.33333 5.29487 5.96024 5.66797 5.5 5.66797C5.03976 5.66797 4.66667 5.29487 4.66667 4.83464V4.0013ZM13.8333 8.16797H2.16667V14.8346H13.8333V8.16797Z"
          fill="#1261A3"
        />
      </svg>
      <time className="denhaag-posttype-label denhaag-event-date__text" dateTime="2022-10-14">
        vrijdag 14 oktober
      </time>
    </p>
  ),
};
