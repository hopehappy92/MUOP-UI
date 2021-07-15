import React from 'react';
import { Story, Meta } from '@storybook/react';

import DateTimeInput, { DateTimeInputProps } from './DateTimeInput';

export default {
  title: 'Components/Form/Input/DateTimeInput',
  component: DateTimeInput,
  args: {
    type: 'date'
  }
} as Meta;

const Template: Story<DateTimeInputProps> = (args: DateTimeInputProps) => {
  const { type } = args;
  return <DateTimeInput type={type} />;
};

export const DateDefault = Template.bind({});
DateDefault.args = {};

export const TimeDefault = Template.bind({});
TimeDefault.args = {
  type: 'time'
};
