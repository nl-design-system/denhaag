import React from 'react';

import './alert.css';
import { Heading4, Paragraph } from '@gemeente-denhaag/typography';
import { AlertTriangleIcon, CheckCircleIcon, CircleInformationIcon, CloseIcon } from '@gemeente-denhaag/Icons';
import Button from '@gemeente-denhaag/button';
import IconButton from '@gemeente-denhaag/iconbutton';

export interface AlertsProps {
  /**
   * The title of the alert.
   */
  title: string;

  /**
   * The main text of the alert.
   */
  text: string;

  /**
   * The variant of the alert, determines which color and icon are displayed.
   * Default is 'base'.
   */
  variant: 'error' | 'info' | 'success' | 'warning';

  /**
   * The action of the alert, displays a clickable button that will fire this event.
   */
  action?: { buttonText: string; onClick: () => void };

  /**
   * The action of the alert, displays a clickable CloseIcon Button that will fire this event.
   */
  close?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Alerts: React.FC<AlertsProps> = ({ title, text, variant, action, close }: AlertsProps) => {
  const customAttributes = { variant };
  let icon;

  switch (variant) {
    case 'error':
      icon = <AlertTriangleIcon />;
      break;
    case 'info':
      icon = <CircleInformationIcon />;
      break;
    case 'success':
      icon = <CheckCircleIcon />;
      break;
    case 'warning':
      icon = <AlertTriangleIcon />;
      break;
  }

  // actionButton is optional
  let actionButton = undefined;
  if (action !== undefined) {
    actionButton = (
      <Button size="medium" variant="primary-action" type="button" onClick={() => action.onClick()}>
        {action.buttonText}
      </Button>
    );
  }

  // closeButton is optional
  let closeButton = undefined;
  if (close !== undefined) {
    closeButton = (
      <IconButton aria-label="Close" color="inherit" onClick={close}>
        <CloseIcon />
      </IconButton>
    );
  }

  return (
    <div className="denhaag-alert" {...customAttributes}>
      <div className="denhaag-alert__icon">{icon}</div>
      <div className="denhaag-alert__content">
        <Heading4>{title}</Heading4>
        <Paragraph>{text}</Paragraph>
        {actionButton}
      </div>
      <div>{closeButton}</div>
    </div>
  );
};

export default Alerts;
