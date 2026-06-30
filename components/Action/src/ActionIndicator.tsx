import React from 'react';

interface ActionIndicatorProps {
  children?: React.ReactNode;
}

export const ActionIndicator = ({ children }: ActionIndicatorProps) => {
  if (!children) return null;

  return <div className="denhaag-action__indicator">{children}</div>;
};
