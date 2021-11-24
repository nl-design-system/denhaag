import React from 'react';
import { Meta, Story } from '@storybook/react';
import GridList, { GridListTile, GridListProps } from '../index';
import pkg from '../../package.json';

export default {
  title: 'Components/Layout/GridList',
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
  component: GridList,
} as Meta;

const Template: Story<GridListProps> = (args: GridListProps) => (
  <GridList {...args}>
    <GridListTile>
      <p>This is a GridListTile inside a GridList.</p>
    </GridListTile>
    <GridListTile>
      <img
        src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Demos.jpg/1200px-Demos.jpg"
        alt="Four cassette tapes for demonstrating the GridListTile component."
      />
    </GridListTile>
  </GridList>
);

/**
 * Implementation of a GridList.
 */
export const Default = Template.bind({});
