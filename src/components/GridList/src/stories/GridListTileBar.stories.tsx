import React from "react";
import { Meta, Story } from "@storybook/react";
import { CircleHelpIcon } from "@gemeente-denhaag/icons";
import IconButton from "@gemeente-denhaag/iconbutton";
import GridList, { GridListTile, GridListTileBar, GridListTileBarProps } from "..";
import pkg from "../../package.json";

export default {
  title: "Components/Layout/GridList/GridListTile/GridListTileBar",
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: "dynamic",
      },
    },
  },
  component: GridListTileBar,
} as Meta;

const Template: Story<GridListTileBarProps> = (args: GridListTileBarProps) => (
  <GridList cols={5}>
    <GridListTile cols={1} rows={2}>
      <img
        src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Demos.jpg/1200px-Demos.jpg"
        alt="Four cassette tapes for demonstrating the GridListTile component."
      />
      <GridListTileBar {...args} />
    </GridListTile>
  </GridList>
);

// language=JS
const defaultCode = `
<GridList cols="{5}">
  <GridListTile cols="{1}" rows="{2}">
    <img src="{'static/media/logo.e029b128.svg'}" alt="The Hague municipality emblem" width="{150}"
         height="{150}"/>
    <GridListTileBar
      actionIcon='{<IconButton aria-label="I am an IconButton!"><CircleHelpIcon /></IconButton>}'
      subtitle="I am a GridListTileBar!"
      title="GridListTileBar" />
  </GridListTile>
</GridList>
`;

/**
 * Default implementation of GridListTileBar.
 */
export const Default = Template.bind({});
Default.args = {
  actionIcon: (
    <IconButton aria-label="I am an IconButton!">
      <CircleHelpIcon />
    </IconButton>
  ),
  title: "GridListTileBar",
  subtitle: "I am a GridListTileBar!",
};

Default.parameters = {
  docs: {
    source: {
      code: defaultCode,
    },
  },
};

// language=JS
const topCode = `
<GridList cols="{5}">
  <GridListTile cols="{1}" rows="{2}">
    <img src="{'static/media/logo.e029b128.svg'}" alt="The Hague municipality emblem" width="{150}"
         height="{150}"/>
    <GridListTileBar
      actionIcon='{<IconButton aria-label="I am an IconButton!"><CircleHelpIcon /></IconButton>}'
      subtitle="I am a GridListTileBar!"
      title="GridListTileBar"
      titlePosition="top"/>
  </GridListTile>
</GridList>
`;

/**
 * Implementation with tilebar at top position.
 */
export const TopPosition = Template.bind({});
TopPosition.args = {
  ...Default.args,
  titlePosition: "top",
};
TopPosition.parameters = {
  docs: {
    source: {
      code: topCode,
    },
  },
};

// language=JS
const buttonLeftCode = `
<GridList cols={5}>
  <GridListTile cols={1} rows={2}>
    <img src={'static/media/logo.e029b128.svg'} alt="The Hague municipality emblem" width={150} height={150}/>
    <GridListTileBar
      actionIcon='{<IconButton aria-label="I am an IconButton!"><CircleHelpIcon /></IconButton>}'
      subtitle="I am a GridListTileBar!"
      title='GridListTileBar'
      actionPosition='left'
    />
  </GridListTile>
</GridList>
`;

/**
 * Implementation with IconButton on the left.
 */
export const ButtonLeft = Template.bind({});
ButtonLeft.args = {
  ...Default.args,
  actionPosition: "left",
};
ButtonLeft.parameters = {
  docs: {
    source: {
      code: buttonLeftCode,
    },
  },
};
