import React from 'react';
import { Story, Meta } from '@storybook/react';

import TextInput, { TextInputProps } from './TextInput';
import MyButton from '../../button/Button';

export default {
  title: 'Components/Form/TextInput',
  component: TextInput,
  args: {
    variant: 'standard',
    theme: 'default',
    size: 'md',
    labelPosition: 'left',
    disabled: false
  },
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' }
  }
} as Meta;

const Template: Story<TextInputProps> = (args: TextInputProps) => {
  const {
    placeholder,
    theme,
    size,
    disabled,
    variant,
    label,
    labelPosition,
    handleSubmit
  } = args;
  return (
    <TextInput
      theme={theme}
      placeholder={placeholder}
      size={size}
      disabled={disabled}
      variant={variant}
      label={label}
      labelPosition={labelPosition}
      handleSubmit={handleSubmit}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: 'default',
  label: 'HI',
  handleSubmit: () => {
    console.log('Submit!');
  }
};

export const Size = Template.bind({});
Size.args = {
  placeholder: 'Size',
  size: 'lg'
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'Disabled',
  disabled: true
};

interface ICustomButton {
  buttonText: string;
}
const CustomButton: React.FC<ICustomButton> = (props: ICustomButton) => {
  const { buttonText } = props;

  const onClickBtn = () => {
    console.log('Click Btn');
  };

  return (
    <button type="button" onClick={onClickBtn}>
      {buttonText}
    </button>
  );
};

export const WithCustomButton = Template.bind({});
WithCustomButton.args = {
  placeholder: 'Button',
  label: <CustomButton buttonText="Click" />
};

export const WithZenaButton = Template.bind({});
WithZenaButton.args = {
  placeholder: 'Button',
  label: <MyButton outline>Click</MyButton>
};
