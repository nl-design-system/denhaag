declare module '*.svg' {
  import React = require('react');
  const ReactComponent: React.FunctionElement<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare module '*.json' {
  const content: string;
  export default content;
}

declare module '*.md?raw' {
  const content: string;
  export default content;
}
