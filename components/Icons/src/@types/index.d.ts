declare module '*.svg' {
  import React from 'react';
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: React.ElementType;
  export default src;
}

declare module '*.json' {
  const content: string;
  export default content;
}
