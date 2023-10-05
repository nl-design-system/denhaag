import React from 'react';

interface ActionContentProps {
  children: React.ReactNode;
}

export const ActionContent = ({ children }: ActionContentProps) => <div>{children}</div>;
