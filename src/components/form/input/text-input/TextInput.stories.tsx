import React from 'react';
import { Story, Meta } from '@storybook/react';

import TextInput, { TextInputProps } from './TextInput';
import MyButton from '../../../button/Button';

export default {
  title: 'Components/Form/Input/TextInput',
  component: TextInput,
  args: {
    type: 'text',
    variant: 'standard',
    theme: 'default',
    fontSize: 'md',
    labelPosition: 'left',
    disabled: false,
    valid: true,
    validText: '유효하지 않은 정보입니다. 다시 확인해주세요'
  },
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    valid: { control: 'boolean' }
  }
} as Meta;

const Template: Story<TextInputProps> = (args: TextInputProps) => {
  const {
    placeholder,
    type,
    theme,
    fontSize,
    disabled,
    variant,
    valid,
    validText,
    label,
    labelPosition,
    handleSubmit
  } = args;
  return (
    <TextInput
      type={type}
      theme={theme}
      placeholder={placeholder}
      fontSize={fontSize}
      disabled={disabled}
      variant={variant}
      valid={valid}
      validText={validText}
      label={label}
      labelPosition={labelPosition}
      handleSubmit={handleSubmit}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: 'default',
  handleSubmit: () => {
    console.log('Submit!');
  }
};

export const Label = Template.bind({});
Label.args = {
  placeholder: 'label',
  label: 'Label'
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'Disabled',
  disabled: true
};

export const Validation = Template.bind({});
Validation.args = {
  placeholder: 'InValid',
  valid: false
};

export const WithButton = Template.bind({});
WithButton.args = {
  placeholder: 'Button',
  label: <MyButton outline>Click</MyButton>
};

export const Password = Template.bind({});
Password.args = {
  placeholder: 'Input password',
  label: 'Password',
  type: 'password'
};

// export const Size = Template.bind({});
// Size.args = {
//   placeholder: 'Size',
//   size: 'lg'
// };

// interface ICustomButton {
//   buttonText: string;
// }
// const CustomButton: React.FC<ICustomButton> = (props: ICustomButton) => {
//   const { buttonText } = props;

//   const onClickBtn = () => {
//     console.log('Click Btn');
//   };

//   return (
//     <button type="button" onClick={onClickBtn}>
//       {buttonText}
//     </button>
//   );
// };

// export const WithCustomButton = Template.bind({});
// WithCustomButton.args = {
//   placeholder: 'Button',
//   label: <CustomButton buttonText="Click" />
// };
