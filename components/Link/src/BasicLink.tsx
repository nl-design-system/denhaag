import React from 'react';
import { LinkProps } from '@nl-design-system-candidate/link-react';
import { Link } from '@nl-design-system-candidate/link-react/css';

export const BasicLink = ({ ...props }: LinkProps) => <Link {...props} />;

export default BasicLink;
