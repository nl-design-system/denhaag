import clsx from 'clsx';
import React, { ElementType, HTMLAttributes } from 'react';

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Used in combination with src or srcSet to provide an alt attribute for the rendered img element.
   */
  alt?: string;

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   *
   * @deprecated
   */
  component?: ElementType;

  /**
   * Attributes applied to the img element if the component is used to display an image.
   * It can be used to listen for the loading error event.
   *
   * @deprecated
   */
  imgProps?: React.ImgHTMLAttributes<HTMLImageElement>;

  /**
   * Defines a set of media conditions (e.g. screen widths)
   * and indicates what image size would be best to choose.
   * Combine with `srcSet` to set different image sources for each size.
   */
  sizes?: string;

  /**
   * The src attribute for the img element.
   */
  src?: string;

  /**
   * Defines the set of images we will allow the browser to choose between
   * Each set of image information is separated from the previous one by a comma.
   * Combine with `sizes` to set the screen-widths to combine these various images with.
   */
  srcSet?: string;

  /**
   * The shape of the avatar.
   * @deprecated `circle` is deprecated use `circular` instead
   */
  variant?: 'circle' | 'circular' | 'rounded' | 'square';
}

/**
 * Displaying a small image, such as a profile picture, as avatar.
 * @param props The properties of an Avatar component.
 * @constructor Constructs an instance of Avatar.
 */
export const Avatar = ({
  variant = 'circular',
  className,
  children,
  alt,
  sizes,
  src,
  srcSet,
  component = 'div',
  imgProps,
}: AvatarProps) => {
  const classNames = clsx('denhaag-avatar', `denhaag-avatar--${variant}`, className);
  const Component = component || 'div';

  const imageProps = {
    src: src || imgProps?.src,
    sizes: sizes || imgProps?.sizes,
    srcSet: srcSet || imgProps?.srcSet,
    alt: alt || imgProps?.alt,
  };

  return (
    <Component className={classNames}>
      {imageProps.alt ? (
        <img className={clsx('denhaag-avatar__image', imgProps?.className)} {...imageProps} alt={imageProps.alt} />
      ) : (
        children
      )}
    </Component>
  );
};

export default Avatar;
