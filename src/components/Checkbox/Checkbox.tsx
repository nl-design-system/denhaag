import { Checkbox as MaterialCheckbox } from "@material-ui/core";
import React from "react";

export interface CheckboxProps {
    /**
     * If true the Checkbox is checked.
     */
    checked?: boolean;
    /**
     * Color for the component.
     */
    color?: 'default' | 'primary' | 'secondary';
    /**
     * Disables Checkbox
     */
    disabled?: boolean;
    /**
     * Callback fired when the state is changed.
     */
    onChange?: () => void;
}

/**
 * Checkboxes allow the user to select one or more items from a set.
 */
export const Checkbox: React.FC<CheckboxProps> = ({
    checked,
    color = "default",
    disabled,
    onChange,
    ...props
}) => {
    return (
      <MaterialCheckbox checked={checked} color={color} disabled={disabled} onChange={onChange} {...props} />
    );
};
