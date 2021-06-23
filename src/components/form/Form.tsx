import React from 'react';

import FormInput from './FormInput';
import FormTextarea from './FormTextarea';

import './FormStyle.scss';

export interface FormProps extends React.HTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

const Form: React.FC<FormProps> = ({ ...props }: FormProps) => (
  <form {...props}>{props.children}</form>
);

export default Object.assign(Form, {
  Input: FormInput,
  Textarea: FormTextarea
});
