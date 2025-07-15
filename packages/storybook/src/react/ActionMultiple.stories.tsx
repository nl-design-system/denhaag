import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ActionMulti } from '@gemeente-denhaag/action';
import readme from '../../../../components/Action/README.md?raw';
import { templateLocale } from '../templates/util';
import { ButtonLink } from '@gemeente-denhaag/button-link';

const labels = {
  today: 'vandaag',
  yesterday: 'gisteren',
  before: 'vóór',
  approachingDeadline: (daysDifference: number) => {
    if (daysDifference === 1) {
      return `nog ${daysDifference} dag`;
    }
    return `nog ${daysDifference} dagen`;
  },
};

const exampleArgs = {
  labels,
  children: <strong>Taak</strong>,
  actions: <ButtonLink href="#example">Actie</ButtonLink>,
};

const meta = {
  id: 'react-actions-action-multiple',
  title: 'React/Actions/Action Multiple',
  component: ActionMulti,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof ActionMulti>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Hover: Story = {
  args: {
    ...Default.args,
    actions: (
      <ButtonLink href="#example" className="utrecht-button-link--hover">
        Actie
      </ButtonLink>
    ),
  },
};

export const Focus: Story = {
  args: {
    ...Default.args,
    actions: (
      <ButtonLink href="#example" className="utrecht-button-link--focus">
        Actie
      </ButtonLink>
    ),
  },
};

export const WithDate: Story = {
  args: { ...Default.args, dateTime: '2023-09-28T19:47:36.593Z', locale: templateLocale },
};

export const WithDateRelative: Story = {
  args: {
    ...Default.args,
    dateTime: '2023-10-02T19:47:36.593Z',
    now: '2023-09-28T19:47:36.593Z',
    locale: templateLocale,
    relativeDate: true,
  },
};

export const WithDateWarning: Story = {
  args: {
    ...Default.args,
    dateTime: '2023-09-30T19:47:36.593Z',
    now: '2023-09-28T19:47:36.593Z',
    locale: templateLocale,
    relativeDate: true,
  },
};

export const List: Story = {
  render: () => (
    <>
      <ActionMulti {...exampleArgs} />
      <ActionMulti {...exampleArgs} />
      <ActionMulti {...exampleArgs} />
    </>
  ),
};
