import React from "react";
import BaseProps, { BaseChildrenProps, BaseClassesProps } from "../../BaseProps/BaseProps";

export default interface BaseLayoutProps extends BaseProps {
  /**
   * The component to use as the root component. Either a string to use a DOM element or a component
   */
  component?: React.ElementType;
}

export interface BaseLayoutComponentProps {
  /**
   * The component to use as the root component. Either a string to use a DOM element or a component
   */
  component?: React.ElementType;
}

export interface BaseLayoutChildrenProps extends BaseChildrenProps {
  /**
   * The component to use as the root component. Either a string to use a DOM element or a component
   */
  component?: React.ElementType;
}

export interface BaseLayoutClassesProps extends BaseClassesProps {
  /**
   * The component to use as the root component. Either a string to use a DOM element or a component
   */
  component?: React.ElementType;
}
