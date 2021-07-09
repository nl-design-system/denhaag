import React from 'react';
import { Radio as MaterialRadio } from '@material-ui/core';
import { ActiveRadioIcon, InactiveRadioIcon } from '@gemeente-denhaag/icons';
import { StylesProvider } from '@material-ui/core';

import clsx from 'clsx';
import { classes } from './bem-mapping';
import './mui-override.css';
import './radio.css';

export interface RadioProps {
  /**
   * Id of the input element.
   */
  id?: string;

  /**
   * **Signature**: `function(event: React.ChangeEvent<unknown>) => void`
   * The event source of the callback. You can pull out the new
   * value by accessing `event.target.value` (string). You can
   * pull out the new checked state by accessing
   * `event.target.checked` (boolean).
   */
  onChange?: (event: React.ChangeEvent<unknown>) => void;

  /**
   * Name attribute of the radio button.
   */
  name?: string;

  /**
   * The value of the component. The DOM casts it to `string`.
   */
  value?: unknown;

  /**
   * If `true`, the component is checked.
   */
  checked?: boolean;

  /**
   * If `true`, the radio but will be disabled.
   */
  disabled?: boolean;

  /**
   * If `true`, the input will be required.
   */
  required?: boolean;

  /**
   * The icon to display when the component is checked.
   */
  checkedIcon?: React.ReactNode;

  /**
   * The icon to display when the component is unchecked.
   */
  icon?: React.ReactNode;

  /**
   * The icon is turned red to indicate an error.
   */
  error?: boolean;
}

export const Radio: React.FC<RadioProps> = (props: RadioProps) => {
  classes.root = clsx('denhaag-radio', {
    'denhaag-radio--error': props.error,
  });

  return (
    <StylesProvider injectFirst>
      <MaterialRadio
        {...props}
        color="default"
        classes={classes}
        disableRipple
        disableFocusRipple
        checkedIcon={props.checkedIcon ?? <ActiveRadioIcon />}
        icon={props.icon ?? <InactiveRadioIcon />}
      />
    </StylesProvider>
  );
};

/**
 * Default export for Radio
 */
export default Radio;
