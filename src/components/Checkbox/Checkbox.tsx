import { Checkbox as MaterialCheckbox } from "@material-ui/core";
import React from "react";

export interface CheckboxProps {
    /**
     * If true the component is checked.
     */
    checked?: boolean;
    /**
     * The color of the component.
     */
    color?: 'default' | 'primary' | 'secondary';
    /**
     * If true, the component will be disabled
     */
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
