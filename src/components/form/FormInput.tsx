import React from 'react';

import './FormStyle.scss';

type TTheme = 'default' | 'info' | 'secondary' | 'warning' | 'danger';

export interface FormInputProps extends React.HTMLAttributes<HTMLInputElement> {
  theme?: TTheme;
}

const FormInput: React.FC<FormInputProps> = ({
  theme = 'default',
  ...props
}: FormInputProps) => (
  <input className={[`muop-form-input-${theme}`].join(' ')} {...props} />
);

export default FormInput;
