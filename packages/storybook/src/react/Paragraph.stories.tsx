import { Meta, StoryObj } from '@storybook/react';
import { Paragraph } from '@gemeente-denhaag/paragraph';
import readme from '../../../../components/Paragraph/README.md?raw';

type Story = StoryObj<typeof meta>;

const meta: Meta<typeof Paragraph> = {
  component: Paragraph,
  tags: ['autodocs'],
  argTypes: {
    purpose: {
      type: 'string',
      options: [undefined, 'lead'],
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
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum mi velit, at facilisis nulla blandit ac. Praesent elementum tellus diam, aliquet bibendum erat pretium id. Etiam vitae ex nec quam scelerisque ultricies. Curabitur blandit gravida tellus, ac ullamcorper ex fermentum molestie. Mauris nec ligula sapien. Fusce faucibusodio purus, eget dapibus massa lacinia non. Cras rutrum eget lectus interdum dapibus.',
    purpose: undefined,
  },
};

export const Lead: Story = {
  args: {
    ...Default.args,
    purpose: 'lead',
  },
};
