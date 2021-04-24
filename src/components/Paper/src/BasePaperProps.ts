import React from 'react';
import BaseProps from '@gemeente-denhaag/baseprops';

export interface BasePaperProps extends BaseProps {
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component?: React.ElementType<React.HTMLAttributes<HTMLElement>>;

  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   */
  elevation?: number;

  /**
   * If `true`, rounded corners are disabled.
   */
  square?: boolean;

  /**
   * The variant to use.
   */
  variant?: 'elevation' | 'outlined';
}
