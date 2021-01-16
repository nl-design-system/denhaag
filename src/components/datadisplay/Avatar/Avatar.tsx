import React from 'react'
import MaterialAvatar from '@material-ui/core/Avatar'
import BaseProps from '@gemeente-denhaag/baseprops/BaseProps'

export interface AvatarProps extends BaseProps {

  /**
   * Used in combination with src or srcSet to provide an alt attribute for the rendered img element.
   */
  alt?: string

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component?: React.ElementType

  /**
   * Attributes applied to the img element if the component is used to display an image.
   * It can be used to listen for the loading error event.
   */
  imgProps?: React.ImgHTMLAttributes<HTMLImageElement>

  /**
   * he sizes attribute for the img element.
   */
  sizes?: string

  /**
   * The src attribute for the img element.
   */
  src?: string

  /**
   * The srcSet attribute for the img element.
   * Use this attribute for responsive image display.
   */
  srcSet?: string

  /**
   * The shape of the avatar.
   */
  variant?: 'circle'
  | 'circular'
  | 'rounded'
  | 'square'
}

/**
 * Displaying a small image, such as a profile picture, as avatar.
 * @param props The properties of an Avatar component.
 * @constructor Constructs an instance of Avatar.
 */
export const Avatar: React.FC<AvatarProps> = (props: AvatarProps) => {
  return (
    <MaterialAvatar {...props}>
      {props.children}
    </MaterialAvatar>
  )
}

export default Avatar
