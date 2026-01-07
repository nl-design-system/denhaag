import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import '@gemeente-denhaag/button';
import '@gemeente-denhaag/button-group';
import '@gemeente-denhaag/icons';

import readme from '../../../../components/ButtonGroup/README.md?raw';
import { getComponentDescription } from '../utils/getPackage';
import pkg from '../../../../components/ButtonGroup/package.json';

const meta = {
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: getComponentDescription(pkg.name, pkg.version, readme),
      },
    },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  render: () => (
    <div className="denhaag-button-group">
      <button className={'denhaag-button denhaag-button--secondary-action denhaag-button--start-icon'}>
        <span className={'denhaag-button__icon'}>
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="denhaag-icon"
            focusable="false"
            aria-hidden="true"
          >
            <path d="M11.707 18.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 111.414 1.414L7.414 11H19a1 1 0 110 2H7.414l4.293 4.293a1 1 0 010 1.414z"></path>
          </svg>
        </span>
        Button
      </button>
    </div>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div className="denhaag-button-group">
      <button className={'denhaag-button denhaag-button--secondary-action denhaag-button--start-icon'}>
        <span className={'denhaag-button__icon'}>
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="denhaag-icon"
            focusable="false"
            aria-hidden="true"
          >
            <path d="M11.707 18.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 111.414 1.414L7.414 11H19a1 1 0 110 2H7.414l4.293 4.293a1 1 0 010 1.414z"></path>
          </svg>
        </span>
        Button
      </button>
      <button className={'denhaag-button denhaag-button--secondary-action denhaag-button--start-icon'}>
        <span className={'denhaag-button__icon'}>
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="denhaag-icon"
            focusable="false"
            aria-hidden="true"
          >
            <path d="M11.707 18.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 111.414 1.414L7.414 11H19a1 1 0 110 2H7.414l4.293 4.293a1 1 0 010 1.414z"></path>
          </svg>
        </span>
        Button
      </button>
    </div>
  ),
};
