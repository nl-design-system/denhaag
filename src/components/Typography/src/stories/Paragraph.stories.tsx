import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Paragraph, ParagraphProps } from '../Paragraph';
import pkg from '../../package.json';

export default {
  title: 'Components/Data Display/Typography/Paragraph',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
  component: Paragraph,
} as Meta;

const Template: Story<ParagraphProps> = (args: ParagraphProps) => (
  <Paragraph {...args}>This is a bit of text inside a Paragraph component.</Paragraph>
);

/**
 * Default implementation of Heading1
 */
export const Default = Template.bind({});
