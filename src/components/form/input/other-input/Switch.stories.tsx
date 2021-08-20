import React from 'react';
import { Story, Meta } from '@storybook/react';

import Switch, { SwitchProps, TLabelPosition } from './Switch';

export default {
  title: 'Components/Form/Input/Switch',
  component: Switch,
  args: {
    theme: 'default'
  },
  argTypes: {
    disabled: { control: 'boolean' },
    label: { control: 'text' }
  }
} as Meta;

const Template: Story<SwitchProps> = (args: SwitchProps) => {
  const { theme, disabled, label, labelPosition, onOnOFfClick } = args;

  return (
    <Switch
      theme={theme}
      disabled={disabled}
      label={label}
      labelPosition={labelPosition}
      onOnOFfClick={onOnOFfClick}
    />
  );
};

export const SwitchDefault = Template.bind({});
SwitchDefault.args = {
  onOnOFfClick: bool => {
    console.log(`switch ${bool ? 'on' : 'off'}`);
  }
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};

const Positions: TLabelPosition[] = ['left', 'top', 'right', 'bottom'];
export const LabelPosition: Story<SwitchProps> = (args: SwitchProps) => {
  const { theme, disabled } = args;
  return (
    <div
      style={{ display: 'flex', justifyContent: 'space-around', width: '30%' }}
    >
      {Positions.map(el => (
        <Switch
          key={`switch-position-${el}`}
          theme={theme}
          disabled={disabled}
          label={el}
          labelPosition={el}
        />
      ))}
    </div>
  );
};
