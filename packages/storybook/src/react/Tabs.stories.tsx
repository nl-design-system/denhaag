import { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsProps } from '@gemeente-denhaag/tab';
import readme from '../../../../components/Tab/README.md';
import React, { useEffect, useState } from 'react';

const exampleArgs: TabsProps = {
  tabData: [
    { label: 'A tab', panelContent: 'Item One' },
    { label: 'Another tab', panelContent: 'Item Two' },
    { label: 'Yet another tab', panelContent: 'Item Three' },
  ],
};

const meta = {
  id: 'react-navigation-tabs',
  title: 'React/Navigation/Tabs',
  component: Tabs,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
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

export const UpdateTabContent: Story = {
  render: () => {
    const [seconds, setSeconds] = useState(1);

    useEffect(() => {
      const interval = setInterval(() => {
        setSeconds((seconds: number) => seconds + 1);
      }, 1000);

      return () => clearInterval(interval);
    }, []);

    return (
      <Tabs
        tabData={[
          { label: 'A tab with timer', panelContent: <>Update timer: {seconds}</> },
          { label: 'Another tab', panelContent: 'Item Two' },
          { label: 'Yet another tab', panelContent: 'Item Three' },
        ]}
      />
    );
  },
};
