import React from "react";
import { Meta, Story } from "@storybook/react";
import GridListTile from "../../GridListTile";
import GridList, { GridListProps } from ".";
import pkg from "../package.json";

import imageFile from "../../../../.storybook/stories/assets/logo.svg";

export default {
  title: 'Components/Layout/GridList',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
  component: GridList,
} as Meta;

const Template: Story<GridListProps> = (args: GridListProps) => (
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
