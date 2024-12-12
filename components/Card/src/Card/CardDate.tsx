import React, { TimeHTMLAttributes } from 'react';
import '../index.scss';

export type CardDateProps = TimeHTMLAttributes<HTMLTimeElement>;

export const CardDate = ({ ...props }: CardDateProps) => {
  return <time {...props}></time>;
};

export default CardDate;
