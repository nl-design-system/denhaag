import React, { RefAttributes } from 'react';
import {
  Select as UtrechtSelect,
  SelectOption,
  SelectProps as UtrechtSelectProps,
  SelectOptionProps,
} from '@utrecht/component-library-react';
import './index.scss';
import clsx from 'clsx';

type SelectProps = UtrechtSelectProps & RefAttributes<HTMLSelectElement>;

const Select = ({ className, ...props }: SelectProps) => {
  const classNames = clsx(className, 'denhaag-select');
  return <UtrechtSelect className={classNames} {...props} />;
};

export { Select, SelectProps, SelectOption, SelectOptionProps };
export default Select;
