import React from 'react';
import { Meta, Story } from '@storybook/react';
import IconButton, { IconButtonProps } from '.';
import { TrashIcon } from '@gemeente-denhaag/icons';
import pkg from '../package.json';

export default {
  title: 'Components/Input/IconButton',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
  component: IconButton,
} as Meta;

const Template: Story<IconButtonProps> = (args: IconButtonProps) => (
  <IconButton {...args}>
    <TrashIcon />
  </IconButton>
);

// language=JS
const defaultCode = `
<IconButton>
  <TrashIcon />
</IconButton>
`;

/**
 * Implementation of IconButton
 */
export const Default = Template.bind({});
Default.parameters = {
  docs: {
    source: {
      code: defaultCode,
    },
  },
};

//language=JS
const primaryCode = `
<IconButton color="primary">
  <TrashIcon />
</IconButton>
`;

/**
 * Implementation of IconButton with primary coloured components.
 */
export const PrimaryColoured = Template.bind({});
PrimaryColoured.args = {
  color: 'primary',
};
PrimaryColoured.parameters = {
  docs: {
    source: {
      code: primaryCode,
    },
  },
};
