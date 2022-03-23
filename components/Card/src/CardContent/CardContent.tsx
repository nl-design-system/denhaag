import React, { HTMLAttributes } from 'react';
import './card-content.scss';

export type CardContentProps = HTMLAttributes<HTMLDivElement>;

/**
 * Primary UI component for user interaction
 */
export const CardContent: React.FC<CardContentProps> = (props: CardContentProps) => {
  return <div className={'denhaag-card__content'}>{props.children}</div>;
};

/**
 * Default export for CardContent
 */
export default CardContent;
