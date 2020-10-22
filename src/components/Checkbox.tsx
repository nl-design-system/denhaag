import { Checkbox as MaterialCheckbox } from "@material-ui/core";
import React from "react";

export interface CheckboxProps {
    checked?: boolean;
    color?: 'default' | 'primary' | 'secondary';
    disabled?: boolean;
}

/**
 * Checkboxes allow the user to select one or more items from a set.
 */
export const Checkbox: React.FC<CheckboxProps> = ({
    checked,
    color = "default",
    disabled,
    ...props
}) => {
    return (
        <MaterialCheckbox color={color} disabled={disabled} checked={checked} {...props} />
    );
};
