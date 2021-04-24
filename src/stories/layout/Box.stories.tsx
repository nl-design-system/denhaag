import React from 'react';
import { Meta, Story } from '@storybook/react';
import Box, { BoxProps } from '../../components/Box';
import pkg from '../../components/Box/package.json';

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

const Template: Story<BoxProps> = (args: any) => (
  <Box {...args}>
    <p>This is a Box component.</p>
  </Box>
);

/**
 * Implementation of Box
 */
export const Default = Template.bind({});
