import React, { TimeHTMLAttributes } from 'react';

interface Props extends TimeHTMLAttributes<HTMLTimeElement> {}

export const Time = ({ children, ...rest }: Props) => <time {...rest}>{children}</time>;
