import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@gemeente-denhaag/icons';
import { Paragraph } from '@gemeente-denhaag/typography';
import { Link } from '@gemeente-denhaag/link';

import readme from '../../../../components/Link/README.md?raw';

const exampleArgs = {
  href: '#',
};

const meta = {
  id: 'css-navigation-link',
  title: 'CSS/Navigation/Link',
  component: Link,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Paragraph>
      It is possible to put <Link {...args}>a link</Link> in a Paragraph element.
    </Paragraph>
  ),
};

export const disabled: Story = {
  render: (args) => (
    <Paragraph>
      It is possible to put{' '}
      <Link disabled {...args}>
        a link
      </Link>{' '}
      in a Paragraph element.
    </Paragraph>
  ),
};

export const iconStart: Story = {
  render: (args) => (
    <Paragraph>
      It is possible to put{' '}
      <Link icon={<ArrowLeftIcon />} iconAlign="start" {...args}>
        a link
      </Link>{' '}
      in a Paragraph element.
    </Paragraph>
  ),
};

export const iconEnd: Story = {
  render: (args) => (
    <Paragraph>
      It is possible to put{' '}
      <Link icon={<ArrowRightIcon />} {...args}>
        a link
      </Link>{' '}
      in a Paragraph element.
    </Paragraph>
  ),
};
