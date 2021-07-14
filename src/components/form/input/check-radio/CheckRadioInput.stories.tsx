import React from 'react';
import { Story, Meta } from '@storybook/react';

import CheckRadioInput, {
  CheckRadioInputProps,
  TLabelPosition
} from './CheckRadioInput';

export default {
  title: 'Components/Form/Input/CheckRadioInput',
  component: CheckRadioInput,
  args: {
    type: 'checkbox',
    theme: 'default',
    disabled: false
  },
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' }
  }
} as Meta;

const RepeatCount = [0, 1, 2];

const Template: Story<CheckRadioInputProps> = (args: CheckRadioInputProps) => {
  const { type, theme, disabled, label, labelPosition } = args;
  return (
    <>
      {RepeatCount.map(el => (
        <CheckRadioInput
          key={`check-radio-${el}`}
          name="check-radio-template"
          type={type}
          theme={theme}
          disabled={disabled}
          label={label}
          labelPosition={labelPosition}
        />
      ))}
    </>
  );
};

export const CheckboxDefault = Template.bind({});
CheckboxDefault.args = {
  label: 'Default Checkbox'
};

export const RadioDefault = Template.bind({});
RadioDefault.args = {
  label: 'Default Radio',
  type: 'radio'
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  disabled: true
};

const Positions: TLabelPosition[] = ['left', 'top', 'right', 'bottom'];
export const LabelPosition: Story<CheckRadioInputProps> = (
  args: CheckRadioInputProps
) => {
  const { type, theme, disabled } = args;
  return (
    <div
      style={{ display: 'flex', justifyContent: 'space-around', width: '30%' }}
    >
      {Positions.map(el => (
        <CheckRadioInput
          key={`check-radio-${el}`}
          name="check-radio-template"
          type={type}
          theme={theme}
          disabled={disabled}
          label={el}
          labelPosition={el}
        />
      ))}
    </div>
  );
};
LabelPosition.args = {};
