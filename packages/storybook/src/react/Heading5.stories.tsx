import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Heading5, Heading5Props } from '../../../../components/Typography/src/Heading5';
import pkg from '../../../../components/Typography/package.json';

export default {
  title: 'React/Data Display/Typography/Heading5',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: 'dynamic',
      },
    },
    status: {
      type: 'ALPHA',
    },
  },
  component: Heading5,
} as Meta;

const Template: Story<Heading5Props> = (args: Heading5Props) => (
  <Heading5 {...args}>This is a bit of text inside a Header5 component.</Heading5>
);

/**
 * Default implementation of Heading5
 */
export const Default = Template.bind({});
