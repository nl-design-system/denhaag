import React from 'react';
import {
  Select as UtrechtSelect,
  SelectOption,
  SelectProps,
  SelectOptionProps,
} from '@utrecht/component-library-react';
import './index.scss';
import clsx from 'clsx';

const Select = ({ className, ...props }: SelectProps) => {
  const classNames = clsx(className, 'denhaag-select');
  return <UtrechtSelect className={classNames} {...props} />;
};

export { Select, SelectProps, SelectOption, SelectOptionProps };
export default Select;
