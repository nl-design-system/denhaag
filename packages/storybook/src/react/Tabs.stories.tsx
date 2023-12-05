import { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsProps } from '@gemeente-denhaag/tab';
import readme from '../../../../components/Tab/README.md';

const exampleArgs: TabsProps = {
  tabData: [
    { label: 'A tab', panelContent: 'Item One' },
    { label: 'Another tab', panelContent: 'Item Two' },
    { label: 'Yet another tab', panelContent: 'Item Three' },
  ],
};

const meta = {
  id: 'react-navigation-tab',
  title: 'React/Navigation/Tab',
  component: Tabs,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    chromatic: { viewports: [1768, 1280, 768, 360] },
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
