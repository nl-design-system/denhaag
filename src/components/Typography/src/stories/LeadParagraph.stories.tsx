import React from 'react';
import { Meta, Story } from '@storybook/react';
import { LeadParagraph, LeadParagraphProps } from '../LeadParagraph';
import pkg from '../../package.json';

export default {
  title: 'Components/Data Display/Typography/LeadParagraph',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
  component: LeadParagraph,
} as Meta;

const Template: Story<LeadParagraphProps> = (args: LeadParagraphProps) => (
  <LeadParagraph {...args}>This is a bit of text inside a Paragraph component.</LeadParagraph>
);

/**
 * Default implementation of LeadParagraph
 */
export const Default = Template.bind({});
