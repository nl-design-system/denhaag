import React from 'react';
import { RadioButton as UtrechtRadioButton, RadioButtonProps } from '@utrecht/component-library-react';
import clsx from 'clsx';
import './index.scss';

const RadioButton = ({ className, ...props }: RadioButtonProps) => {
  const classNames = clsx('denhaag-radio-button', className);
  return <UtrechtRadioButton className={classNames} {...props} />;
};

export { RadioButtonProps };
export default RadioButton;
