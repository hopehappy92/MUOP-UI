import React from 'react';
import { Story, Meta } from '@storybook/react';

import ButtonList, { ButtonListProps } from './ButtonList';

export default {
  title: 'Components/ButtonList',
  component: ButtonList
} as Meta;

const Template: Story<ButtonListProps> = (args: ButtonListProps) => {
  const { buttons } = args;
  return <ButtonList buttons={buttons} />;
};

export const Default = Template.bind({});
Default.args = {
  buttons: [
    { theme: 'default', children: 'Default' },
    { theme: 'info', children: 'Info' },
    { theme: 'success', children: 'Success' },
    { theme: 'warning', children: 'Warning' },
    { theme: 'danger', children: 'Danger' }
  ]
};

export const Outline = Template.bind({});
Outline.args = {
  buttons: [
    { theme: 'default', children: 'Default', outline: true },
    { theme: 'info', children: 'Info', outline: true },
    { theme: 'success', children: 'Success', outline: true },
    { theme: 'warning', children: 'Warning', outline: true },
    { theme: 'danger', children: 'Danger', outline: true }
  ]
};
