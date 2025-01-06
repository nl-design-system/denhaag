import React, { TimeHTMLAttributes } from 'react';
import '../index.scss';

export interface CardDateProps extends TimeHTMLAttributes<HTMLTimeElement> {}

export const CardDate = ({ ...props }: CardDateProps) => {
  return <time {...props}></time>;
};

export default CardDate;
