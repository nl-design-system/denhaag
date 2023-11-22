import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ActionSingle, ActionSingleProps } from '@gemeente-denhaag/action';
import { FormatDateLabels } from '@gemeente-denhaag/utils';

import readme from '../../../../components/Action/README.md';

const labels: FormatDateLabels = {
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

const exampleArgs: ActionSingleProps = {
  children: <strong>Taak</strong>,
  link: '#example',
  labels,
};

const meta = {
  id: 'react-action',
  title: 'React/Actions/Action',
  component: ActionSingle,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    chromatic: { viewports: [1768, 1280, 768, 360] },
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof ActionSingle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Hover: Story = {
  args: { ...Default.args, className: 'denhaag-action--hover' },
};

export const Focus: Story = {
  args: { ...Default.args, className: 'denhaag-action--focus' },
};

export const WithDate: Story = {
  args: { ...Default.args, dateTime: '2023-09-28T19:47:36.593Z' },
};

export const WithDateRelative: Story = {
  args: { ...Default.args, dateTime: '2023-10-02T19:47:36.593Z', now: '2023-09-28T19:47:36.593Z', relativeDate: true },
};

export const WithDateWarning: Story = {
  args: { ...Default.args, dateTime: '2023-09-30T19:47:36.593Z', now: '2023-09-28T19:47:36.593Z', relativeDate: true },
};

// ### Multiple - hover

// <Canvas>
//   <Story name="Multiple - hover">
//     {() => (
//       <Action
//         actions={
//           <ButtonLink href="#example" className="utrecht-button-link--hover">
//             Actie
//           </ButtonLink>
//         }
//       >
//         <strong>Taak</strong>
//       </Action>
//     )}
//   </Story>
// </Canvas>

// ### Multiple - focus

// <Canvas>
//   <Story name="Multiple - focus">
//     {() => (
//       <Action
//         actions={
//           <ButtonLink href="#example" className="utrecht-button-link--focus">
//             Actie
//           </ButtonLink>
//         }
//       >
//         <strong>Taak</strong>
//       </Action>
//     )}
//   </Story>
// </Canvas>

// ### Multiple - with date

// <Canvas>
//   <Story name="Multiple - with date">
//     {() => (
//       <Action
//         dateTime={"2023-09-28T19:47:36.593Z"}
//         now={"2023-09-28T19:47:36.593Z"}
//         labels={labels}
//         actions={<ButtonLink href="#example">Actie</ButtonLink>}
//       >
//         <strong>Taak</strong>
//       </Action>
//     )}
//   </Story>
// </Canvas>

// ### Multiple - with date - relative

// <Canvas>
//   <Story name="Multiple - with date - relative">
//     {() => (
//       <Action
//         relativeDate
//         dateTime={"2023-10-02T19:47:36.593Z"}
//         now={"2023-09-28T19:47:36.593Z"}
//         labels={labels}
//         actions={<ButtonLink href="#example">Actie</ButtonLink>}
//       >
//         <strong>Taak</strong>
//       </Action>
//     )}
//   </Story>
// </Canvas>

// ### Multiple - with warning date - relative

// <Canvas>
//   <Story name="Multiple - with warning date - relative">
//     {() => (
//       <Action
//         relativeDate
//         dateTime={"2023-09-30T19:47:36.593Z"}
//         now={"2023-09-28T19:47:36.593Z"}
//         labels={labels}
//         actions={<ButtonLink href="#example">Actie</ButtonLink>}
//       >
//         <strong>Taak</strong>
//       </Action>
//     )}
//   </Story>
// </Canvas>
