import React from 'react';
import MaterialDivider from '@material-ui/core/Divider';
import { BaseDataDisplayClassesProps } from '@gemeente-denhaag/basedatadisplayprops';
import { StylesProvider } from '@material-ui/core';
import '@gemeente-denhaag/basestyles';
import '../divider.module.css';

export interface DividerProps extends BaseDataDisplayClassesProps {
  /**
   * The divider orientation.
   */
  orientation?: "horizontal" | "vertical";
}

/**
 * A thin line that groups content in lists and layouts.
 * @param props The properties of a Divider component.
 * @constructor Constructs an instance of Divider.
 */
export const Divider: React.FC<DividerProps> = (props: DividerProps) => {
  const classes = {
    root: 'denhaag-divider',
    vertical: 'denhaag-divider--vertical'
  }

  return (
    <StylesProvider injectFirst>
      <MaterialDivider variant={"fullWidth"} classes={classes} {...props} />
    </StylesProvider>
  );
};

export default Divider;
