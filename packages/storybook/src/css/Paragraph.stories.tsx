import { Meta, StoryObj } from '@storybook/react';
import { Paragraph } from '@gemeente-denhaag/typography';
import readme from '../../../../components/Typography/README.md?raw';

const exampleArgs = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum mi velit, at facilisis nulla blandit ac. Praesent elementum tellus diam, aliquet bibendum erat pretium id. Etiam vitae ex nec quam scelerisque ultricies. Curabitur blandit gravida tellus, ac ullamcorper ex fermentum molestie. Mauris nec ligula sapien. Fusce faucibusodio purus, eget dapibus massa lacinia non. Cras rutrum eget lectus interdum dapibus.',
};

const meta = {
  id: 'css-data-display-typography-paragraph',
  title: 'CSS/Data Display/Typography/Paragraph',
  component: Paragraph,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
