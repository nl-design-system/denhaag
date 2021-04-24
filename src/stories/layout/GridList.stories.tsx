import React from "react";
import { Meta, Story } from "@storybook/react";
import GridListTile from "../../components/GridListTile";
import GridList, { GridListProps } from "../../components/GridList";
import pkg from "../../components/GridList/package.json";
import imageFile from "../assets/logo.svg";

export default {
  title: "Components/Layout/GridList",
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: "dynamic",
      }
    }
  },
  component: GridList
} as Meta;

const Template: Story<GridListProps> = (args: any) => (
  <GridList {...args}>
    <GridListTile>
      <p>This is a GridListTile inside a GridList.</p>
    </GridListTile>
    <GridListTile>
      <img src={imageFile} alt="The Hague municipality emblem" width={150} height={150} />
    </GridListTile>
  </GridList>
);

/**
 * Implementation of a GridList.
 */
export const Default = Template.bind({});
