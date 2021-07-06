import React from 'react';

import './FormTextareaStyle.scss';

export interface FormTextareaProps
  extends React.HTMLAttributes<HTMLTextAreaElement> {
  innerText: string;
  cols: number;
  rows: number;
}

const FormTextarea: React.FC<FormTextareaProps> = ({
  ...props
}: FormTextareaProps) => (
  <textarea cols={props.cols} rows={props.rows}>
    {props.innerText}
  </textarea>
);

export default FormTextarea;
