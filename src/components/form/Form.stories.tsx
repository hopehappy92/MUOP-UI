import React from 'react';
import { Story, Meta } from '@storybook/react';

import Form from './Form';
import { FormInputProps } from './FormInput';
import { FormTextareaProps } from './FormTextarea';

export default {
  title: 'Components/Form',
  component: Form
} as Meta;

// const Template: Story<FormProps> = (args: FormProps) => {
//   const { type } = args;
//   return (
//     <Form type="none">
//       {type === 'input' && <Form.Input />}
//       {type === 'textarea' && <Form.Textarea />}
//     </Form>
//   );
// };

// export const Default = Template.bind({});

export const Input: Story<FormInputProps> = (args: FormInputProps) => {
  const { placeholder, theme } = args;
  return <Form.Input theme={theme} placeholder={placeholder} />;
};
Input.args = {
  placeholder: 'placeholder',
  theme: 'default'
};

export const Textarea: Story<FormTextareaProps> = (args: FormTextareaProps) => {
  const { innerText, cols, rows } = args;
  return <Form.Textarea innerText={innerText} cols={cols} rows={rows} />;
};
Textarea.args = {
  innerText: 'Textarea',
  rows: 10,
  cols: 10
};
