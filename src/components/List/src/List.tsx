import React from 'react';
import MaterialList from '@material-ui/core/List';
import BaseProps from '@gemeente-denhaag/baseprops';
import ListSubheader from '@gemeente-denhaag/listsubheader';

export interface ListProps extends BaseProps {
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component?: React.ElementType<React.HTMLAttributes<HTMLElement>>;

  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input will be used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   */
  dense?: boolean;

  /**
   * If `true`, vertical padding will be removed from the list.
   */
  disablePadding?: boolean;

  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: React.ElementType<typeof ListSubheader>;
}

/**
 * Primary UI component for user interaction
 */
export const List: React.FC<ListProps> = (props: ListProps) => {
  const subheader = (props.subheader as unknown) as React.ReactElement;
  const materialProps = { ...props, subheader };

  return <MaterialList {...materialProps}>{props.children}</MaterialList>;
};

export default List;
