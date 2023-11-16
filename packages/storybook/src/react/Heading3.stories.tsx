import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Heading3, Heading3Props } from '@gemeente-denhaag/typography';
import pkg from '../../../../components/Typography/package.json';

export default {
  title: 'React/Data Display/Typography/Heading3',
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
  component: Heading3,
} as Meta;

const Template: Story<Heading3Props> = (args: Heading3Props) => (
  <Heading3 {...args}>This is a bit of text inside a Header3 component.</Heading3>
);

/**
 * Default implementation of Heading3
 */
export const Default = Template.bind({});
