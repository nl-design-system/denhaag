import React from 'react';
import { Meta, Story } from '@storybook/react';
import Box, { BoxProps } from '.';
import pkg from '../package.json';

export default {
  title: 'Components/Layout/Box',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
  component: Box,
} as Meta;

const Template: Story<BoxProps> = (args: BoxProps) => (
  <Box {...args}>
    <p>This is a Box component.</p>
  </Box>
);

/**
 * Implementation of Box
 */
export const Default = Template.bind({});
