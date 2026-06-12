declare module '*.scss' {}
declare module '*.css' {}
declare module '@utrecht/*-css' {}

declare module '*.svg' {
  import React from 'react';
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: React.ElementType;
  export default src;
}
