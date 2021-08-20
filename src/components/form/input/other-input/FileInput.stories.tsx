import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';

import FileInput, { FileInputProps } from './FileInput';

export default {
  title: 'Components/Form/Input/FileInput',
  component: FileInput,
  args: {
    theme: 'default'
  },
  argTypes: {
    text: { control: 'text' },
    accept: { control: 'text' },
    isMulti: { control: 'boolean' }
  }
} as Meta;

const Template: Story<FileInputProps> = (args: FileInputProps) => {
  const {
    theme,
    text,
    accept,
    isMulti,
    uploadedFileComponent,
    onUploadFiles
  } = args;

  return (
    <FileInput
      theme={theme}
      text={text}
      accept={accept}
      isMulti={isMulti}
      uploadedFileComponent={uploadedFileComponent}
      onUploadFiles={onUploadFiles}
    />
  );
};

export const FileInputDefault = Template.bind({});
FileInputDefault.args = {};

export const FileInputMulti = Template.bind({});
FileInputMulti.args = {
  isMulti: true
};

export const FileInputWithComponent: Story<FileInputProps> = (
  args: FileInputProps
) => {
  const {
    theme,
    text,
    accept,
    isMulti
    // uploadedFileComponent,
    // onUploadFiles
  } = args;

  const myCompStyle = {
    fontSize: '12px',
    margin: '10px'
  };

  const [files, setFiles] = useState<FileList | null>(null);

  const upload = (uploadedFiles: FileList | null) => {
    setFiles(uploadedFiles);
  };

  const myComponent = (
    <div style={myCompStyle}>
      {files && (
        <>
          <p style={{ margin: '0 0 5px 0' }}>Uploaded File</p>
          <span>{files[0].name}</span>
        </>
      )}
    </div>
  );

  return (
    <FileInput
      theme={theme}
      text={text}
      accept={accept}
      isMulti={isMulti}
      uploadedFileComponent={myComponent}
      onUploadFiles={upload}
    />
  );
};
FileInputWithComponent.args = {};
