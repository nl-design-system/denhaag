import MaterialRadio from '@material-ui/core/Radio';
import React from 'react';

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
   * The Color of the component.
   */
  color?: 'primary' | 'secondary' | 'default';

  /**
   * If `true`, the radio but will be disabled.
   */
  disabled?: boolean;

  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple?: boolean;

  /**
   * If `true`, the input will be required.
   */
  required?: boolean;

  /**
   * The size of the radio button.
   */
  size?: 'medium' | 'small';

  /**
   * The icon to display when the component is checked.
   */
  checkedIcon?: React.ReactNode;

  /**
   * The icon to display when the component is unchecked.
   */
  icon?: React.ReactNode;
}

export const Radio: React.FC<RadioProps> = (props: RadioProps) => {
  return <MaterialRadio {...props} />;
};

/**
 * Default export for Radio
 */
export default Radio;
