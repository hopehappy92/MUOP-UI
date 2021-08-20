import React from 'react';
import { Story, Meta } from '@storybook/react';

import FileInput, { FileInputProps } from './FileInput';

export default {
  title: 'Components/Form/Input/FileInput',
  component: FileInput,
  args: {
    theme: 'default'
  }
} as Meta;

const Template: Story<FileInputProps> = (args: FileInputProps) => {
  const { theme } = args;

  return <FileInput theme={theme} />;
};

export const FileInputDefault = Template.bind({});
FileInputDefault.args = {};
