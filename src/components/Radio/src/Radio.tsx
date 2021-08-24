import React from 'react';

import './radio.css';
import BaseProps from '@gemeente-denhaag/baseprops';

export interface RadioProps extends BaseProps {
  label: string;

  /**
   * Attributes applied to the `input` element.
   */
  inputProps?: Record<string, unknown>;
}

export const Radio: React.FC<RadioProps> = ({ id, label, inputProps }: RadioProps) => {
  return (
    <div>
      <input id={id} type={'radio'} {...inputProps} />
      {label && <label htmlFor={id}>{label}</label>}
    </div>
  );
};

/**
 * Default export for Radio
 */
export default Radio;
