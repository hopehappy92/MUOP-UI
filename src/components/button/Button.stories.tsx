import React from 'react';
import { Story, Meta } from '@storybook/react';

import Button, { ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    disabled: { control: 'boolean' }
  }
} as Meta;

const Template: Story<ButtonProps> = (args: ButtonProps) => {
  const { theme, size, value, disabled } = args;
  return <Button theme={theme} size={size} value={value} disabled={disabled} />;
};

export const Primary = Template.bind({});
Primary.args = {
  value: 'button'
};
// Primary.parameters = { pseudo: { hover: true, focus: true } };
