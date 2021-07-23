import React from 'react';
import { Story, Meta } from '@storybook/react';

import RangeInput, { RangeInputProps } from './RangeInput';

export default {
  title: 'Components/Form/Input/RangeInput',
  component: RangeInput,
  args: {
    theme: 'default',
    thumbStyle: 'circle',
    thumbSize: 'md',
    sliderSize: 'md'
  }
} as Meta;

const Template: Story<RangeInputProps> = (args: RangeInputProps) => {
  const { theme, thumbStyle, thumbSize, sliderSize } = args;
  return (
    <RangeInput
      theme={theme}
      thumbStyle={thumbStyle}
      thumbSize={thumbSize}
      sliderSize={sliderSize}
    />
  );
};
export const RangeDefault = Template.bind({});
RangeDefault.args = {};
