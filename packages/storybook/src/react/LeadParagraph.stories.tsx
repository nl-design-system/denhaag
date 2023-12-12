import { Meta, StoryObj } from '@storybook/react';
import { LeadParagraph } from '@gemeente-denhaag/typography';
import readme from '../../../../components/Typography/README.md';

const exampleArgs = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum mi velit, at facilisis nulla blanditac. Praesent elementum tellus diam, aliquet bibendum erat pretium id. Etiam vitae ex nec quam scelerisque ultricies. Curabitur blandit gravida tellus, ac ullamcorper ex fermentum molestie. Mauris nec ligula sapien. Fusce faucibus odio purus, eget dapibus massa lacinia non. Cras rutrum eget lectus interdum dapibus.',
};

const meta = {
  id: 'react-data-display-typography-lead-paragraph',
  title: 'React/Data Display/Typography/LeadParagraph',
  component: LeadParagraph,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof LeadParagraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
