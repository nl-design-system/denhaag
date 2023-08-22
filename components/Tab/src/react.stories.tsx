import React from 'react';
import { Meta, Story } from '@storybook/react';
import Tab, { TabProps, Tabs } from './index';
import pkg from '../package.json';

export default {
  title: 'React/Navigation/Tab',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: 'dynamic',
      },
    },
    status: {
      type: 'ALPHA',
    },
  },
  component: Tab,
} as Meta;

const Template: Story<TabProps> = () => {
  const tabData = [
    { label: 'A tab', panelContent: 'Item One', defaultSelected: true },
    { label: 'Another tab', panelContent: 'Item Two' },
    { label: 'Yet another tab', panelContent: 'Item Three' },
  ];

  return (
    <Tabs tabData={tabData} />
    /*     <Fragment>
      <Tabs
        value={value}
        onChange={(_event: React.ChangeEvent<unknown>, newValue: number) => {
          setValue(newValue);
        }}
      >
        <Tab {...args} value={0} />
        <Tab label="Another tab" value={1} />
        <Tab label="Yet another tab" value={2} />
      </Tabs>
      <TabPanel value="0">Item One</TabPanel>
      <TabPanel value="1">Item Two</TabPanel>
      <TabPanel value="2">Item Three</TabPanel>
    </Fragment> */
  );
};

// language=JS
const defaultCode = `
const [value, setValue] = React.useState(0);

return (
  <TabContext value={value.toString()}>
    <Tabs value={value} onChange={(event: React.ChangeEvent<unknown>, newValue: number) => {
      setValue(newValue);
    }}>
      <Tab label="A tab" value={0}/>
      <Tab label="Another tab" value={1}/>
      <Tab label="Yet another tab" value={2}/>
    </Tabs>
    <TabPanel value="0">Item One</TabPanel>
    <TabPanel value="1">Item Two</TabPanel>
    <TabPanel value="2">Item Three</TabPanel>
  </TabContext>
);
`;

/**
 * Implementation of Tab
 */
export const Default = Template.bind({});
Default.args = {
  label: 'A tab',
};

Default.parameters = {
  docs: {
    source: {
      code: defaultCode,
    },
  },
};

// language=JS
const disabledCode = `
const [value, setValue] = React.useState(0);

return (
  <TabContext value={value.toString()}>
    <Tabs value={value} onChange={(event: React.ChangeEvent<unknown>, newValue: number) => {
      setValue(newValue);
    }}>
      <Tab label="A disabled tab" disabled value={0}/>
      <Tab label="Another tab" value={1}/>
      <Tab label="Yet another tab" value={2}/>
    </Tabs>
    <TabPanel value="1">Item One</TabPanel>
    <TabPanel value="2">Item Two</TabPanel>
    <TabPanel value="3">Item Three</TabPanel>
  </TabContext>
);
`;

/**
 * Implementation of Tab which is disabled
 */
export const Disabled = Template.bind({});
Disabled.args = {
  label: 'A disabled tab',
  disabled: true,
};

Disabled.parameters = {
  docs: {
    source: {
      code: disabledCode,
    },
  },
};
