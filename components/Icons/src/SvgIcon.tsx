import React, { ElementType, SVGAttributes } from 'react';
import clsx from 'clsx';

export interface SvgIconProps extends SVGAttributes<SVGElement> {
  /**
   * The component used for the root node. Either a string to use a HTML
   * element or a component.
   */
  component?: ElementType;
}

const SvgIcon: React.FC<SvgIconProps> = ({
  component = 'svg',
  focusable = 'false',
  shapeRendering = 'auto',
  ...props
}: SvgIconProps) => {
  const className = clsx(props.className, 'denhaag-icon');
  const Component = component;
  return (
    <Component
      className={className}
      focusable={focusable}
      aria-hidden={props['aria-hidden'] ?? true}
      shape-rendering={shapeRendering}
      {...props}
    >
      {props.children}
    </Component>
  );
};

export default SvgIcon;
