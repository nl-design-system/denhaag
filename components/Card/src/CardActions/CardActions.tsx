import React, { HTMLAttributes } from 'react';
import './card-actions.scss';

export type CardActionProps = HTMLAttributes<HTMLDivElement>;

/**
 * Primary UI component for user interaction
 */
export const CardActions: React.FC<CardActionProps> = (props: CardActionProps) => {
  return (
    <div className={'denhaag-card__actions'} {...props}>
      {props.children}
    </div>
  );
};

/**
 * Default export for CardActions
 */
export default CardActions;
