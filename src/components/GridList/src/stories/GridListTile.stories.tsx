import React from 'react';
import { Meta, Story } from '@storybook/react';
import GridList, { GridListTile, GridListTileProps } from '..';
import pkg from '../../package.json';

export default {
  title: 'Components/Layout/GridList/GridListTile',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: 'dynamic',
      },
    },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
  component: GridListTile,
} as Meta;

const Template: Story<GridListTileProps> = (args: GridListTileProps) => (
  <GridList>
    <GridListTile {...args}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Philadelphia_from_South_Street_Bridge_July_2016_panorama_3.jpg/1280px-Philadelphia_from_South_Street_Bridge_July_2016_panorama_3.jpg"
        alt="A square block with the word demo written in neon blue on the top."
      />
    </GridListTile>
    <GridListTile {...args}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Lagoon_Nebula.jpg/1024px-Lagoon_Nebula.jpg"
        alt="Content for demonstrating the GridListTile component."
      />
    </GridListTile>
    <GridListTile {...args}>
      <img
        src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Demos.jpg/1200px-Demos.jpg"
        alt="Four cassette tapes for demonstrating the GridListTile component."
      />
    </GridListTile>
  </GridList>
);

/**
 * A default implementation of the GridListTile.
 */
export const Default = Template.bind({});
