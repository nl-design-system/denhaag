import React from 'react';

interface ActionContextProps {
  children: React.ReactNode;
}

export const ActionContext = ({ children }: ActionContextProps) => (
  <div className="denhaag-action__context">{children}</div>
);
