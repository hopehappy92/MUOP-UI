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
    { theme: 'primary', children: 'primary' },
    { theme: 'secondary', children: 'secondary' },
    { theme: 'warning', children: 'warning' }
  ]
};

export const Outline = Template.bind({});
Outline.args = {
  buttons: [
    { theme: 'primary', children: 'primary', outline: true },
    { theme: 'secondary', children: 'secondary', outline: true },
    { theme: 'warning', children: 'warning', outline: true }
  ]
};

export const Loading = Template.bind({});
Loading.args = {
  buttons: [
    {
      theme: 'primary',
      children: 'primary',
      loading: true,
      loadingChildren: <span>Loading..</span>
    },
    {
      theme: 'secondary',
      children: 'secondary',
      loading: true,
      loadingChildren: <span>Loading..</span>
    },
    {
      theme: 'warning',
      children: 'warning',
      loading: true,
      loadingChildren: <span>Loading..</span>
    }
  ]
};
