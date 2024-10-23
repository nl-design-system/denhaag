import React, { ForwardedRef, forwardRef } from 'react';
import { Textbox, TextboxProps } from '@utrecht/component-library-react';
import './index.scss';

interface TextInputProps extends TextboxProps {
  iconStart?: JSX.Element;
  iconEnd?: JSX.Element;
}

const TextInput: React.ForwardRefExoticComponent<TextInputProps & React.RefAttributes<HTMLLabelElement>> = forwardRef(
  ({ ...props }: TextInputProps, ref: ForwardedRef<HTMLLabelElement>) => {
    const { iconStart, iconEnd, placeholder, id, ...otherProps } = props;
    return (
      <label className="pra-textbox" ref={ref} htmlFor={id}>
        {iconStart && <span className="pra-icon pra-icon-start">{iconStart}</span>}
        <Textbox {...otherProps} placeholder={placeholder} id={id} />
        {iconEnd && <span className="pra-icon pra-icon-end">{iconEnd}</span>}
      </label>
    );
  },
);

TextInput.displayName = 'Textbox';

export { TextInput, TextInputProps };
export default TextInput;
