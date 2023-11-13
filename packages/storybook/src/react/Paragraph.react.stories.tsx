import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Paragraph, ParagraphProps } from '@gemeente-denhaag/components-react';
import pkg from '../../../../components/Typography/package.json';

export default {
  title: 'React/Data Display/Typography/Paragraph',
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
  component: Paragraph,
} as Meta;

const Template: Story<ParagraphProps> = (args: ParagraphProps) => (
  <Paragraph {...args}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum mi velit, at facilisis nulla blandit
    ac. Praesent elementum tellus diam, aliquet bibendum erat pretium id. Etiam vitae ex nec quam scelerisque ultricies.
    Curabitur blandit gravida tellus, ac ullamcorper ex fermentum molestie. Mauris nec ligula sapien. Fusce faucibus
    odio purus, eget dapibus massa lacinia non. Cras rutrum eget lectus interdum dapibus.
  </Paragraph>
);

/**
 * Default implementation of Paragraph
 */
export const Default = Template.bind({});
