import { FormControlLabel  as MaterialFormControlLabel } from "@material-ui/core";
import React, { ReactElement } from "react";

export interface FormControlLabelProps {
  onClick?: () => void;
  control: ReactElement;
  label: string;
}

/**
 * FormcontrolLabels allow the developer to add a label to some components
 */
export const FormControlLabel: React.FC<FormControlLabelProps> = ({
  control,
  label
}) => {
  return (
    <MaterialFormControlLabel control={control} label={label}/>
  )
};
