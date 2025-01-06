import React from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export const RichText = (props: Props) => {
  return <div className="denhaag-rich-text" {...props} />;
};

export default RichText;
