import React, { ReactElement } from 'react'
import MaterialHidden from '@material-ui/core/Hidden'

export interface HiddenProps {
  children: ReactElement

  implementation: 'js' | 'css'

  initialWidth: 'xs' | 'sm' | 'md' | 'lg' | 'xl'

  only:
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | Array<'xs' | 'sm' | 'md' | 'lg' | 'xl'>

  lgDown: boolean
  lgUp: boolean
  mdDown: boolean
  mdUp: boolean
  smDown: boolean
  smUp: boolean
  xlDown: boolean
  xlUp: boolean
  xsDown: boolean
  xsUp: boolean
}

export const HiddenComponent: React.FC<HiddenProps> = (props: HiddenProps) => {
  return (
    <MaterialHidden
      implementation={props.implementation}
      initialWidth={props.initialWidth}
      only={props.only}
      lgDown={props.lgDown}
      lgUp={props.lgUp}
      mdDown={props.mdDown}
      mdUp={props.mdUp}
      smDown={props.smDown}
      xlDown={props.xlDown}
      xsUp={props.xsUp}
    >
      {props.children}
    </MaterialHidden>
  )
}
