import { Textbox as TextInput } from '@persoonlijke-regelingen-assistent/components-react';
import { TextboxProps as UtrechtTextboxProps } from '@utrecht/component-library-react';
import { InputHTMLAttributes } from 'react';
import './index.scss';

//PRA doesn't export the props yet, so for now i made a copy.
interface TextboxSpecificProps {
  iconStart?: JSX.Element;
  iconEnd?: JSX.Element;
  invalid: UtrechtTextboxProps['invalid'];
}
interface TextInputProps extends InputHTMLAttributes<HTMLInputElement>, TextboxSpecificProps {}

export { TextInput, TextInputProps };
export default TextInput;
