import { Meta, StoryObj } from '@storybook/react';
import { Heading, headingLevels } from '@gemeente-denhaag/heading';
import readme from '../../../../components/Heading/README.md?raw';

type Story = StoryObj<typeof meta>;

const meta: Meta<typeof Heading> = {
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    level: {
      type: 'number',
      options: [1, 2, 3, 4, 5, 6],
      control: {
        type: 'select',
      },
    },
    appearance: {
      type: 'string',
      options: [undefined, 'level-1', 'level-2', 'level-3', 'level-4', 'level-5', 'level-6'],
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

export const Level1: Story = {
  args: {
    children: 'This is a bit of text inside a Header component.',
    level: headingLevels[0],
  },
};

export const Level2: Story = {
  args: {
    ...Level1.args,
    level: headingLevels[1],
  },
};

export const Level3: Story = {
  args: {
    ...Level1.args,
    level: headingLevels[2],
  },
};

export const Level4: Story = {
  args: {
    ...Level1.args,
    level: headingLevels[3],
  },
};

export const Level5: Story = {
  args: {
    ...Level1.args,
    level: headingLevels[4],
  },
};

export const Level6: Story = {
  args: {
    ...Level1.args,
    level: headingLevels[5],
  },
};
