import React, { ReactElement } from 'react'
import MaterialGridListTileBar from '@material-ui/core/GridListTileBar'

export interface GridListTileBarProps {
  /**
   * An IconButton element to be used as a secondary action target.
   */
  actionIcon: ReactElement

  /**
   * Position of secondary action button.
   */
  actionPosition?: 'left' | 'right'

  /**
   * Overrides or extends the styles applied to the component.
   */
  classes: object

  /**
   * String or element serving as subtitle.
   */
  subtitle: ReactElement | string

  /**
   * Title to be displayed on tile.
   */
  title: ReactElement | string

  /**
   * Position of the title bar.
   */
  titlePosition?: 'top' | 'bottom'
}

/**
 * GridListTileBar proviedes an overlay to GridListTile, accomodating a title, subtitle and action button.
 * @param props The properties of GridListTileBar.
 * @constructor Constructs an instance of GridListTileBar.
 */
export const GridListTileBar: React.FC<GridListTileBarProps> = (
  props: GridListTileBarProps
) => {
  return (
    <MaterialGridListTileBar
      title={props.title}
      titlePosition={props.titlePosition}
      subtitle={props.subtitle}
      actionIcon={props.actionIcon}
      actionPosition={props.actionPosition}
      classes={props.classes}
    />
  )
}

export default GridListTileBar
