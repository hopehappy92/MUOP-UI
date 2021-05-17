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
  const {
    theme,
    size,
    children,
    disabled,
    outline,
    loading,
    loadingChildren
  } = args;
  return (
    <Button
      theme={theme}
      size={size}
      disabled={disabled}
      outline={outline}
      loading={loading}
      loadingChildren={loadingChildren}
    >
      {children}
    </Button>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  theme: 'primary',
  children: 'primary'
};

// export const Outline = Template.bind({});
// Outline.args = {
//   theme: 'primary',
//   children: 'primary'
// };

// export const Loading = Template.bind({});
// Loading.args = {
//   theme: 'primary',
//   children: 'primary'
// };

// Primary.parameters = { pseudo: { hover: true, focus: true } };
