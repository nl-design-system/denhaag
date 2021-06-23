import React from 'react';

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
  variant?: 'base' | 'alert' | 'info' | 'success' | 'warning';

  /**
   * The action of the alert, displays a clickable button that will fire this event.
   */
  action?: () => void;

  /**
   * The action of the alert, displays a clickable CloseIcon Button that will fire this event.
   */
  close?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Alerts: React.FC<AlertsProps> = () => {
  return <p>Alert</p>;
};

export default Alerts;
