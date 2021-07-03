import React from 'react';
import { Divider as MaterialDivider } from '@material-ui/core';
import { BaseDataDisplayClassesProps } from '@gemeente-denhaag/basedatadisplayprops';
import './divider.css';

export interface DividerProps extends BaseDataDisplayClassesProps {
  /**
   * The divider orientation.
   */
  orientation?: 'horizontal' | 'vertical';
}

/**
 * A thin line that groups content in lists and layouts.
 * @param props The properties of a Divider component.
 * @constructor Constructs an instance of Divider.
 */
export const Divider: React.FC<DividerProps> = (props: DividerProps) => {
  const classes = {
    root: 'denhaag-divider',
    vertical: 'denhaag-divider--vertical',
  };

  return (
    <MaterialDivider variant={'fullWidth'} classes={classes} role={'presentation'} orientation={props.orientation} />
  );
};

export default Divider;
