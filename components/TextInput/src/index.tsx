import React, { ForwardedRef, forwardRef } from 'react';
import { Textbox, TextboxProps } from '@utrecht/textbox-react';
import './index.scss';

interface TextInputProps extends TextboxProps {
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
}

const TextInput: React.ForwardRefExoticComponent<TextInputProps & React.RefAttributes<HTMLInputElement>> = forwardRef(
  ({ ...props }: TextInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { iconStart, iconEnd, placeholder, id, ...otherProps } = props;
    return (
      <label className="pra-textbox" htmlFor={id}>
        {iconStart && <span className="pra-icon pra-icon-start">{iconStart}</span>}
        <Textbox {...otherProps} placeholder={placeholder} id={id} ref={ref} />
        {iconEnd && <span className="pra-icon pra-icon-end">{iconEnd}</span>}
      </label>
    );
  },
);

TextInput.displayName = 'Textbox';

export { TextInput, TextInputProps };
