import React from "react";
import MaterialStepConnector from "@material-ui/core/StepConnector";
import { BaseClassesProps } from "@gemeente-denhaag/baseprops";

export type StepConnectorProps = BaseClassesProps;

/**
 * Represents a connector between two Step components in a Stepper component.
 * @param props The properties of a StepConnector component.
 * @constructor Constructs an instance of StepConnector.
 */
const StepConnector: React.FC<StepConnectorProps> = (props: StepConnectorProps) => {
  return <MaterialStepConnector {...props} />;
};

export default StepConnector;
