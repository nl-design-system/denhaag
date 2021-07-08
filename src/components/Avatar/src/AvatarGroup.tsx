import React from 'react';
import { AvatarGroup as MaterialAvatarGroup } from '@material-ui/lab';
import BaseProps from '@gemeente-denhaag/baseprops';

export interface AvatarGroupProps extends BaseProps {
  max?: number;

  spacing?: 'medium' | 'small' | number;
}

export const AvatarGroup: React.FC<AvatarGroupProps> = (props: AvatarGroupProps) => {
  return <MaterialAvatarGroup {...props}>{props.children}</MaterialAvatarGroup>;
};

export default AvatarGroup;
