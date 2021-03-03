import React from "react";
import { Meta, Story } from "@storybook/react";
import { IconButton } from "../../components/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import GridListTileBar, { GridListTileBarProps } from "../../components/GridListTileBar";
import GridListTile from "../../components/GridListTile";
import GridList from "../../components/GridList";
import pkg from "../../components/GridListTileBar/package.json";
import imageFile from "../assets/logo.svg";

export default {
  title: "Components/Layout/GridList/GridListTile/GridListTileBar",
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
  },
  component: GridListTileBar,
} as Meta;

const Template: Story<GridListTileBarProps> = (args: any) => (
  <GridList cols={5}>
    <GridListTile cols={1} rows={2}>
      <img src={imageFile} alt="The Hague municipality emblem" width={150} height={150} />
      <GridListTileBar {...args} />
    </GridListTile>
  </GridList>
);

/**
 * Default implementation of GridListTileBar.
 */
export const Default = Template.bind({});
Default.args = {
  actionIcon: (
    <IconButton aria-label="I am an IconButton!">
      <InfoIcon />
    </IconButton>
  ),
  title: "GridListTileBar",
  subtitle: "I am a GridListTileBar!",
};

/**
 * Implementation with tilebar at top position.
 */
export const TopPosition = Template.bind({});
TopPosition.args = {
  actionIcon: (
    <IconButton aria-label="I am an IconButton!">
      <InfoIcon />
    </IconButton>
  ),
  title: "GridListTileBar",
  subtitle: "I am GridListTileBar!",
  titlePosition: "top",
};

/**
 * Implementation with IconButton on the left.
 */
export const ButtonLeft = Template.bind({});
ButtonLeft.args = {
  actionIcon: (
    <IconButton aria-label="I am an IconButton!">
      <InfoIcon />
    </IconButton>
  ),
  actionPosition: "left",
  title: "GridListTileBar",
  subtitle: "I am GridListTileBar!",
};
