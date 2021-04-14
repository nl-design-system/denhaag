import React from "react";
import MaterialGridList from "@material-ui/core/GridList";
import BaseLayoutProps from "@gemeente-denhaag/baselayoutprops";

export interface GridListProps extends BaseLayoutProps {
  /**
   * Number of pixels for one cell height. Set auto for children to define the height.
   */
  cellHeight?: number | "auto";

  /**
   * Number of columns.
   */
  cols?: number;

  /**
   * Number of pixels for the spacing between tiles.
   */
  spacing?: number;
}

/**
 * Grid List displays a collection of images in an organised Grid.
 * @param props The properties of the GridList.
 * @constructor Constructs an instance of GridList.
 */
export const GridList: React.FC<GridListProps> = (props: GridListProps) => {
  return <MaterialGridList {...props}>{props.children}</MaterialGridList>;
};

/**
 * Default export for GridList
 */
export default GridList;
export * from "@gemeente-denhaag/gridlisttile";
export * from "@gemeente-denhaag/gridlisttilebar";
