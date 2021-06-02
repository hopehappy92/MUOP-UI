import React from 'react';
import { Story, Meta } from '@storybook/react';

import Button, { ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    size: 'md'
  },
  argTypes: {
    disabled: { control: 'boolean' },
    outline: { control: 'boolean' }
  }
} as Meta;

const Template: Story<ButtonProps> = (args: ButtonProps) => {
  const { theme, size, disabled, outline, name, children, onClick } = args;
  return (
    <Button
      theme={theme}
      size={size}
      disabled={disabled}
      outline={outline}
      name={name}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export const Default = Template.bind({});
Default.args = {
  theme: 'default',
  children: 'Button',
  onClick: e => alert(`Clicked Button Name : ${e?.currentTarget.name}`)
};

export const Outline = Template.bind({});
Outline.args = {
  ...Default.args,
  outline: true,
  name: 'btn-default-outline',
  onClick: e => alert(`Clicked Button Name : ${e?.currentTarget.name}`)
};
