import React from 'react';
import { Meta, Story } from '@storybook/react';
import { LeadParagraph, LeadParagraphProps } from '@gemeente-denhaag/components-react';
import pkg from '../../../../components/Typography/package.json';

export default {
  title: 'React/Data Display/Typography/LeadParagraph',
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
  component: LeadParagraph,
} as Meta;

const Template: Story<LeadParagraphProps> = (args: LeadParagraphProps) => (
  <LeadParagraph {...args}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum mi velit, at facilisis nulla blandit
    ac. Praesent elementum tellus diam, aliquet bibendum erat pretium id. Etiam vitae ex nec quam scelerisque ultricies.
    Curabitur blandit gravida tellus, ac ullamcorper ex fermentum molestie. Mauris nec ligula sapien. Fusce faucibus
    odio purus, eget dapibus massa lacinia non. Cras rutrum eget lectus interdum dapibus.
  </LeadParagraph>
);

/**
 * Default implementation of LeadParagraph
 */
export const Default = Template.bind({});
