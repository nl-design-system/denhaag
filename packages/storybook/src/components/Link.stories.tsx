import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import * as Icons from '@gemeente-denhaag/icons';
import { ArrowRightIcon, ArrowLeftIcon } from '@gemeente-denhaag/icons';
import { Paragraph } from '@gemeente-denhaag/paragraph';
import { Link } from '@gemeente-denhaag/link';
import readme from '../../../../components/Link/README.md?raw';

type Story = StoryObj<typeof meta>;

const meta: Meta<typeof Link> = {
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      type: 'boolean',
      options: [undefined, true, false],
      control: {
        type: 'select',
      },
    },
    icon: {
      type: 'string',
      options: [undefined, ...Object.keys(Icons)],
      control: {
        type: 'select',
      },
    },
    iconAlign: {
      type: 'string',
      options: [undefined, 'start', 'end'],
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
  args: {
    href: '#',
  },
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
