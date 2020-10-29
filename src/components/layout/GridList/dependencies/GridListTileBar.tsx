import React, { ReactElement } from 'react'
import MaterialGridListTileBar from '@material-ui/core/GridListTileBar'

export interface GridListTileBarProps {
  actionIcon: ReactElement

  actionPosition?: 'left' | 'right'

  classes: object

  subtitle: ReactElement | string

  title: ReactElement | string

  titlePosition?: 'top' | 'bottom'
}

export const GridListTileBarComponent: React.FC<GridListTileBarProps> = (props: GridListTileBarProps) => {
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
