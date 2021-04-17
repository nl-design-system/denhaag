import React from "react";
import { Meta, Story } from "@storybook/react";
import Grid, { GridProps } from "../../components/Grid";
import pkg from "../../components/Grid/package.json";

export default {
  title: "Components/Layout/Grid",
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: "dynamic",
      }
    }
  },
  component: Grid,
} as Meta;

const Template: Story<GridProps> = (args: any) => (
  <Grid {...args}>
    <p>This is a grid.</p>
    <p>It can align text.</p>
    <p>Also works responsively.</p>
  </Grid>
);

/**
 * A default implementation of Grid.
 */
export const Default = Template.bind({});

/**
 * Grid with Container behaviour.
 */
export const ContainerGrid = Template.bind({});
ContainerGrid.args = {
  container: true,
};

/**
 * Grid with min-width of items set to 0.
 */
export const ZeroMinWidthGrid = Template.bind({});
ZeroMinWidthGrid.args = {
  zeroMinWidth: true,
};
