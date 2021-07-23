import React from 'react';
import { Story, Meta } from '@storybook/react';

import OtherInput, { OtherInputProps } from './OtherInput';
import RangeInput, { RangeInputProps } from './RangeInput';

export default {
  title: 'Components/Form/Input/OtherInput',
  component: OtherInput
  // args: {
  //   type: 'range'
  // }
} as Meta;

const Template: Story<OtherInputProps> = (args: OtherInputProps) => {
  const { type } = args;
  return <OtherInput type={type} />;
};

// export const RangeDefault: Story<OtherInputProps> = (args: RangeInputProps) => {
//   const { theme } = args;
//   return <RangeInput theme={theme} />;
// };
// RangeDefault.args = {};

export const FileDefault = Template.bind({});
FileDefault.args = {
  type: 'file'
};

export const NumberDefault = Template.bind({});
NumberDefault.args = {
  type: 'number'
};

export const SwitchDefault = Template.bind({});
SwitchDefault.args = {
  // type: 'file'
};
