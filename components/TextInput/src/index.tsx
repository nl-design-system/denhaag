import React, { forwardRef } from 'react';
import { Textbox } from '@persoonlijke-regelingen-assistent/components-react';
import { TextboxProps as UtrechtTextboxProps } from '@utrecht/component-library-react';
import './index.scss';

//PRA doesn't export the props yet, so for now i made a copy.
interface TextInputProps extends UtrechtTextboxProps {
  iconStart?: JSX.Element;
  iconEnd?: JSX.Element;
}

const TextInput = forwardRef<HTMLLabelElement, TextInputProps>(function TextInput(
  { children, invalid = false, ...props },
  ref,
) {
  return (
    <Textbox ref={ref} invalid={invalid} {...props}>
      {children}
    </Textbox>
  );
});

export { TextInput, TextInputProps };
export default TextInput;
