import React from 'react';

import TextInputComponent from './input/text-input/TextInput';
import CheckRadioInputComponent from './input/check-radio/CheckRadioInput';
import FormTextarea from './textarea/FormTextarea';

import './FormStyle.scss';

export interface FormProps extends React.HTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

const Form: React.FC<FormProps> = ({ ...props }: FormProps) => (
  <form {...props}>{props.children}</form>
);

export default Object.assign(Form, {
  TextInput: TextInputComponent,
  CheckRadioInput: CheckRadioInputComponent,
  Textarea: FormTextarea
});
