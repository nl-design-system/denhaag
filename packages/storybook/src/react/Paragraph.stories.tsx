import { Meta, StoryObj } from '@storybook/react';
import { Paragraph } from '@gemeente-denhaag/paragraph';
import readme from '../../../../components/Paragraph/README.md?raw';

type Story = StoryObj<typeof meta>;

const exampleArgs = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum mi velit, at facilisis nulla blandit ac. Praesent elementum tellus diam, aliquet bibendum erat pretium id. Etiam vitae ex nec quam scelerisque ultricies. Curabitur blandit gravida tellus, ac ullamcorper ex fermentum molestie. Mauris nec ligula sapien. Fusce faucibusodio purus, eget dapibus massa lacinia non. Cras rutrum eget lectus interdum dapibus.',
  purpose: undefined,
};

const meta: Meta<typeof Paragraph> = {
  component: Paragraph,
  args: exampleArgs,
  argTypes: {
    purpose: {
      type: 'string',
      options: [undefined, 'lead'],
      control: {
        type: 'select',
      },
    },
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
};

export const Default: Story = {};

export const Lead: Story = {
  args: {
    purpose: 'lead',
  },
};

export default meta;
