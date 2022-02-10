import React, { InputHTMLAttributes, RefObject } from 'react';

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * The ref for the actual input HTML element.
   */
  inputRef?: RefObject<HTMLInputElement>;
  /**
   * Whether the input field is in a error state.
   */
  error?: boolean;
  /**
   * placeholder text for the input (also used as aria-label).
   */
  placeholder?: string;
}

export const TextField: React.FC<TextFieldProps> = ({
  inputRef = React.useRef<HTMLInputElement>(null),
  ...props
}: TextFieldProps) => {
  return <input ref={inputRef} {...props} />;
};

/**
 * Default export for TextField
 */
export default TextField;
