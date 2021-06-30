import React from 'react';
import { AppBar as MaterialAppBar } from '@material-ui/core';
import BaseProps from '@gemeente-denhaag/baseprops';

export interface AppBarProps extends BaseProps {
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color?: 'default' | 'inherit' | 'primary' | 'secondary' | 'transparent';

  /**
   * The positioning type.
   * The behavior of the different options is described in the MDN web docs.
   * **Note**: sticky is not universally supported and will fall back to static when unavailable.
   */
  position?: 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky';
}

/**
 * Displays information and actions relating to the current screen.
 * @param props The properties of an AppBar component.
 * @constructor Constructs an instance of AppBar.
 */
export const AppBar: React.FC<AppBarProps> = (props: AppBarProps) => {
  return <MaterialAppBar {...props}>{props.children}</MaterialAppBar>;
};

export default AppBar;
