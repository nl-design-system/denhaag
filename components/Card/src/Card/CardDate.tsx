import React, { TimeHTMLAttributes } from 'react';
import './card.scss';

export interface CardDateProps extends TimeHTMLAttributes<HTMLTimeElement> {}

export const CardDate: React.FC<CardDateProps> = (props) => {
  return <time {...props}></time>;
};

export default CardDate;
