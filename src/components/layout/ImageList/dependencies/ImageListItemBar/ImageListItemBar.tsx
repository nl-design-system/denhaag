import React, { ReactElement } from 'react'
// TODO:: Change import from GridListTileBar to ImageListItemBar
import MaterialImageListItemBar from '@material-ui/core/GridListTileBar'

export interface ImageListItemBarProps {
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
 * ImageListItemBar provides an overlay to ImageListTile, accommodating a title, subtitle and action button.
 * @param props The properties of ImageListItemBar.
 * @constructor Constructs an instance of ImageListItemBar.
 */
export const ImageListItemBar: React.FC<ImageListItemBarProps> = (
  props: ImageListItemBarProps
) => {
  return (
    <MaterialImageListItemBar
      title={props.title}
      titlePosition={props.titlePosition}
      subtitle={props.subtitle}
      actionIcon={props.actionIcon}
      actionPosition={props.actionPosition}
      classes={props.classes}
    />
  )
}

/**
 * Default export for ImageListItemBar
 */
export default ImageListItemBar
