import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import * as Icons from '@gemeente-denhaag/icons';
import { ArrowRightIcon, ArrowLeftIcon } from '@gemeente-denhaag/icons';
import { Paragraph } from '@gemeente-denhaag/paragraph';
import { Link } from '@gemeente-denhaag/link';
import readme from '../../../../components/Link/README.md?raw';

type Story = StoryObj<typeof meta>;

const exampleArgs = {
  href: '#',
};

const meta: Meta<typeof Link> = {
  component: Link,
  tags: ['autodocs'],
  args: exampleArgs,
  argTypes: {
    disabled: {
      order: 1,
      type: 'boolean',
      options: [true, false],
      control: {
        type: 'select',
      },
    },
    icon: {
      order: 2,
      type: 'string',
      options: [...Object.keys(Icons)],
      control: {
        type: 'select',
      },
    },
    iconAlign: {
      order: 3,
      type: 'string',
      options: ['start', 'end'],
      control: {
        type: 'select',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
};

export default meta;

export const Default: Story = {
  render: (args) => {
    const Icon = Icons[args.icon as unknown as keyof typeof Icons];
    args.icon = Icon ? <Icon /> : args.icon || undefined;

    return (
      <Paragraph>
        It is possible to put <Link {...args}>a link</Link> in a Paragraph element.
      </Paragraph>
    );
  },
};

export const Disabled: Story = {
  ...Default,
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const IconStart: Story = {
  ...Default,
  args: {
    ...Default.args,
    icon: <ArrowLeftIcon />,
    iconAlign: 'start',
  },
};

export const IconEnd: Story = {
  ...Default,
  args: {
    ...Default.args,
    icon: <ArrowRightIcon />,
    iconAlign: 'end',
  },
};
