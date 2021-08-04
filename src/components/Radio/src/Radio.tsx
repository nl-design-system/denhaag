import React from 'react';

import './radio.css';
import BaseProps from '@gemeente-denhaag/baseprops';

export interface RadioProps extends BaseProps {
  label: string;
}

export const Radio: React.FC<RadioProps> = ({ id, label }: RadioProps) => {
  return (
    <div>
      <input id={id} type={'radio'} />
      {label && <label htmlFor={id}>{label}</label>}
    </div>
  );
};

/**
 * Default export for Radio
 */
export default Radio;
