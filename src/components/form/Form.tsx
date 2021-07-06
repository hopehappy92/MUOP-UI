import React from 'react';

import TextInput from './input/TextInput';
import FormTextarea from './textarea/FormTextarea';

import './FormStyle.scss';

export interface FormProps extends React.HTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

const Form: React.FC<FormProps> = ({ ...props }: FormProps) => (
  <form {...props}>{props.children}</form>
);

export default Object.assign(Form, {
  Input: TextInput,
  Textarea: FormTextarea
});
