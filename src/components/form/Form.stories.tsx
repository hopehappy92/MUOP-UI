import React, { useRef } from 'react';
import { Story, Meta } from '@storybook/react';

import Form, { FormProps } from './Form';
import MyButton from '../button/Button';

export default {
  title: 'Components/Form',
  component: Form
} as Meta;

const Template: Story<FormProps> = (args: FormProps) => {
  const { className } = args;
  return (
    <Form>
      <Form.TextInput
        className={className}
        theme="secondary"
        // size="md"
        disabled={false}
        variant="filled"
        labelPosition="left"
        type="text"
      />
      <Form.Textarea innerText="???" rows={10} cols={30} />
    </Form>
  );
};

export const Default = Template.bind({});

export const Login: Story<FormProps> = () => {
  const idRef = useRef<HTMLInputElement>(null);
  const pwdRef = useRef<HTMLInputElement>(null);
  const termsRef = useRef<HTMLInputElement>(null);

  const onSubmitBtn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(
      '나와라!',
      idRef.current?.value,
      pwdRef.current?.value,
      termsRef.current?.checked
    );
  };

  return (
    <Form onSubmit={onSubmitBtn}>
      <div
        style={{
          width: '400px',
          height: '180px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <Form.TextInput
          ref={idRef}
          theme="secondary"
          variant="outlined"
          label="ID"
          type="text"
        />
        <Form.TextInput
          ref={pwdRef}
          theme="secondary"
          variant="outlined"
          label="Password"
          type="password"
        />
        <Form.CheckRadioInput
          ref={termsRef}
          type="checkbox"
          theme="secondary"
          label="약관을 확인했습니다."
        />
        <MyButton theme="secondary" outline type="submit">
          Submit
        </MyButton>
      </div>
    </Form>
  );
};
