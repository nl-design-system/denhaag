import React from 'react';
import { Link, LinkProps } from '@nl-design-system-candidate/link-react';
import '@nl-design-system-candidate/link-css/link.css';

export const BasicLink = ({ ...props }: LinkProps) => <Link {...props} />;

export default BasicLink;

export * from '@nl-design-system-candidate/link-react';
