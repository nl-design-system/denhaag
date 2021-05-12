import React from 'react';
import MaterialStepContent from '@material-ui/core/StepContent';
import { StylesProvider } from '@material-ui/core';
import BaseProps from '@gemeente-denhaag/baseprops';

// styles
import { contentClasses } from './styles/bem-mapping';
import '@gemeente-denhaag/denhaagbrand';
import '@gemeente-denhaag/basestyles';
import './styles/mui-override.module.css';
import './styles/stepper.module.css';

export interface StepContentProps extends BaseProps {
  /**
   * The component used for the transition.
   */
  TransitionComponent?: any;

  /**
   * Adjust the duration of the content expand transition.
   * Passed as a prop to the transition component.
   * Set to 'auto' to automatically calculate transition time based on height.
   */
  transitionDuration?:
    | 'auto'
    | number
    | {
        appear?: number;
        enter?: number;
        exit?: number;
      };

  /**
   * Props applied to the Transition element.
   */
  TransitionProps?: Record<string, unknown>;
}

/**
 * Represents the content of a Step component in a Stepper component.
 * @param props The properties of a StepContent component.
 * @constructor Constructs an instance of StepContent.
 */
export const StepContent: React.FC<StepContentProps> = (props: StepContentProps) => {
  return (
    <StylesProvider injectFirst>
      <MaterialStepContent classes={contentClasses} {...props}>
        {props.children}
      </MaterialStepContent>
    </StylesProvider>
  );
};

export default StepContent;
