import React, { ElementType, SVGAttributes } from 'react';
import clsx from 'clsx';

export interface SvgIconProps extends SVGAttributes<SVGElement> {
  /**
   * The component used for the root node. Either a string to use a HTML
   * element or a component.
   */
  component?: ElementType;

  /**
   * Use default icon styles
   */
  useDefaultClass?: boolean;
}

export const SvgIcon: React.FC<SvgIconProps> = ({
  className,
  component = 'svg',
  focusable = 'false',
  shapeRendering = 'auto',
  useDefaultClass = true,
  ...props
}: SvgIconProps) => {
  const iconClassName = clsx({ 'denhaag-icon': useDefaultClass }, className);
  const Component = component;
  return (
    <Component
      className={iconClassName}
      focusable={focusable}
      aria-hidden={props['aria-hidden'] ?? true}
      shapeRendering={shapeRendering}
      {...props}
    >
      {props.children}
    </Component>
  );
};
