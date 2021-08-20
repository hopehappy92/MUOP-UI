import React, { useEffect, useRef } from 'react';
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
  },
  argTypes: {
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' }
  }
} as Meta;

const Template: Story<RangeInputProps> = (args: RangeInputProps) => {
  const { theme, thumbStyle, thumbSize, sliderSize, min, max, step } = args;

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.width = '200px';
    }
  }, []);

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(`value: ${e.currentTarget.value}`);
  };

  return (
    <RangeInput
      ref={ref}
      theme={theme}
      thumbStyle={thumbStyle}
      thumbSize={thumbSize}
      sliderSize={sliderSize}
      min={min}
      max={max}
      step={step}
      onChange={onValueChange}
    />
  );
};

export const RangeDefault = Template.bind({});
RangeDefault.args = {
  thumbStyle: 'square'
};

export const RangeCircle = Template.bind({});
RangeCircle.args = {
  thumbStyle: 'circle'
};

export const RangeRectangle = Template.bind({});
RangeRectangle.args = {
  thumbStyle: 'rectangle'
};

export const RangeSize = Template.bind({});
RangeSize.args = {
  thumbStyle: 'rectangle',
  thumbSize: 'lg',
  sliderSize: 'lg'
};

export const RangeMinMaxStep = Template.bind({});
RangeMinMaxStep.args = {
  thumbStyle: 'rectangle',
  min: 30,
  max: 80,
  step: 10
};
