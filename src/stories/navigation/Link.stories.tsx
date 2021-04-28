import React from 'react';
import { Meta, Story } from '@storybook/react';
import Link, { LinkProps } from '../../components/Link';
import pkg from '../../components/Link/package.json';

export default {
  title: 'Components/Navigation/Link',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
  component: Link,
} as Meta;

const Template: Story<LinkProps> = (args: unknown) => (
  <Link {...args} target="_blank" href={'https://www.youtube.com/watch?v=dQw4w9WgXcQ&autoplay=1'}>
    Click me!
  </Link>
);

export const Default = Template.bind({});

export const NoUnderline = Template.bind({});
NoUnderline.args = {
  underline: 'none',
};

export const SecondaryColoured = Template.bind({});
SecondaryColoured.args = {
  color: 'secondary',
};

export const HeaderTwoVariant = Template.bind({});
HeaderTwoVariant.args = {
  variant: 'h2',
};
