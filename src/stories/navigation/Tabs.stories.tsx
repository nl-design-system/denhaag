import React from "react";
import { Meta, Story } from "@storybook/react";
import { Tabs, TabsProps } from "../../components/Tabs";
import pkg from "../../components/Tabs/package.json";
import Tab from "../../components/Tab/Tab";
import TabContext from "../../components/TabContext";
import { AppBar } from "../../components/AppBar";
import TabPanel from "../../components/TabPanel";

export default {
  title: "Components/Navigation/Tabs",
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: "dynamic"
      }
    }
  },
  component: Tabs,
} as Meta;

const Template: Story<TabsProps> = (args: any) => {
  const [value, setValue] = React.useState(1);

  args.onChange = (event: React.ChangeEvent<unknown>, newValue: number) => {
    setValue(newValue);
  };
  args.value = value;

  return (
    <TabContext value={args.value.toString()}>
      <AppBar position="static">
        <Tabs {...args}>
          <Tab label="First tab" value={1} />
          <Tab label="Second tab" value={2} />
          <Tab label="Third tab" value={3} />
          <Tab label="Fourth tab" value={4} />
          <Tab label="Fifth tab" value={5} />
        </Tabs>
      </AppBar>
      <TabPanel value="1">Item One</TabPanel>
      <TabPanel value="2">Item Two</TabPanel>
      <TabPanel value="3">Item Three</TabPanel>
      <TabPanel value="4">Item Four</TabPanel>
      <TabPanel value="5">Item Five</TabPanel>
    </TabContext>
  );
};

/**
 * Implementation of Tabs
 */
export const Default = Template.bind({});

/**
 * Implementation of Tabs with vertical orientation
 */
export const VerticalOrientation = Template.bind({});
VerticalOrientation.args = {
  orientation: "vertical",
};

/**
 * Implementation of Tabs with secondary coloured text
 */
export const SecondaryColouredText = Template.bind({});
SecondaryColouredText.args = {
  textColor: "secondary",
};

/**
 * Implementation of Tabs with a secondary coloured indicator
 */
export const SecondaryColouredIndicator = Template.bind({});
SecondaryColouredIndicator.args = {
  indicatorColor: "secondary",
};
