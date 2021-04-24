import React from "react";
import { Meta, Story } from "@storybook/react";
import InfoIcon from "@material-ui/icons/Info";
import IconButton from "../../components/IconButton";
import GridListTileBar, { GridListTileBarProps } from "../../components/GridListTileBar";
import GridListTile from "../../components/GridListTile";
import GridList from "../../components/GridList";
import pkg from "../../components/GridListTileBar/package.json";
import imageFile from "../assets/logo.svg";

export default {
  title: "Components/Layout/GridList/GridListTile/GridListTileBar",
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: "dynamic"
      }
    }
  },
  component: GridListTileBar
} as Meta;

const Template: Story<GridListTileBarProps> = (args: any) => (
  <GridList cols={5}>
    <GridListTile cols={1} rows={2}>
      <img src={imageFile} alt="The Hague municipality emblem" width={150} height={150} />
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
      actionIcon='{<IconButton aria-label="I am an IconButton!"><InfoIcon /></IconButton>}'
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
      <InfoIcon />
    </IconButton>
  ),
  title: "GridListTileBar",
  subtitle: "I am a GridListTileBar!"
};

Default.parameters = {
  docs: {
    source: {
      code: defaultCode
    }
  }
};

// language=JS
const topCode = `
<GridList cols="{5}">
  <GridListTile cols="{1}" rows="{2}">
    <img src="{'static/media/logo.e029b128.svg'}" alt="The Hague municipality emblem" width="{150}"
         height="{150}"/>
    <GridListTileBar
      actionIcon='{<IconButton aria-label="I am an IconButton!"><InfoIcon /></IconButton>}'
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
  titlePosition: "top"
};
TopPosition.parameters = {
  docs: {
    source: {
      code: topCode
    }
  }
};

// language=JS
const buttonLeftCode = `
<GridList cols={5}>
  <GridListTile cols={1} rows={2}>
    <img src={'static/media/logo.e029b128.svg'} alt="The Hague municipality emblem" width={150} height={150}/>
    <GridListTileBar
      actionIcon='{<IconButton aria-label="I am an IconButton!"><InfoIcon /></IconButton>}'
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
  actionPosition: "left"
};
ButtonLeft.parameters = {
  docs: {
    source: {
      code: buttonLeftCode
    }
  }
};
