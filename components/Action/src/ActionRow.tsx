import React from 'react';

interface ActionRowProps {
  children: React.ReactNode;
}

export const ActionRow = ({ children }: ActionRowProps) => <div className="denhaag-action__row">{children}</div>;
