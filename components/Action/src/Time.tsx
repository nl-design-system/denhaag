import React, { TimeHTMLAttributes } from 'react';

type Props = TimeHTMLAttributes<HTMLTimeElement>;

export const Time = ({ children, ...rest }: Props) => <time {...rest}>{children}</time>;
