import React from 'react';
import { Story, Meta } from '@storybook/react';

import FormTextarea, { FormTextareaProps } from './FormTextarea';

export default {
  title: 'Components/Form/Textarea',
  component: FormTextarea
} as Meta;

const Template: Story<FormTextareaProps> = (args: FormTextareaProps) => {
  const { innerText, cols, rows } = args;
  return <FormTextarea innerText={innerText} cols={cols} rows={rows} />;
};

export const Default = Template.bind({});
Default.args = {
  innerText: 'Textarea',
  rows: 10,
  cols: 10
};
