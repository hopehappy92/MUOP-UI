import React from 'react';
import { Story, Meta } from '@storybook/react';

import Form, { FormProps } from './Form';
// import { FormInputProps } from './FormInput';
// import { FormTextareaProps } from './FormTextarea';

export default {
  title: 'Components/Form',
  component: Form
} as Meta;

const Template: Story<FormProps> = (args: FormProps) => {
  const { className } = args;
  return (
    <Form>
      <Form.Input
        className={className}
        theme="secondary"
        size="md"
        disabled={false}
        variant="filled"
        labelPosition="left"
      />
      <Form.Textarea innerText="???" rows={10} cols={30} />
    </Form>
  );
};

export const Default = Template.bind({});
