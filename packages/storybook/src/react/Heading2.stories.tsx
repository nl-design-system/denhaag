import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Heading2, Heading2Props } from '../../../../components/Typography/src/Heading2';
import pkg from '../../../../components/Typography/package.json';

export default {
  title: 'React/Data Display/Typography/Heading2',
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
  component: Heading2,
} as Meta;

const Template: Story<Heading2Props> = (args: Heading2Props) => (
  <Heading2 {...args}>This is a bit of text inside a Header2 component.</Heading2>
);

/**
 * Default implementation of Heading2
 */
export const Default = Template.bind({});
