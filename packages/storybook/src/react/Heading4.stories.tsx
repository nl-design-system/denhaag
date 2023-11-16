import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Heading4, Heading4Props } from '@gemeente-denhaag/typography';
import pkg from '../../../../components/Typography/package.json';

export default {
  title: 'React/Data Display/Typography/Heading4',
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
  component: Heading4,
} as Meta;

const Template: Story<Heading4Props> = (args: Heading4Props) => (
  <Heading4 {...args}>This is a bit of text inside a Header4 component.</Heading4>
);

/**
 * Default implementation of Heading4
 */
export const Default = Template.bind({});
