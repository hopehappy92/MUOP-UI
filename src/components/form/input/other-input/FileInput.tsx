import React, { useEffect, useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';

import './FileInputStyle.scss';

type TTheme = 'default' | 'info' | 'secondary' | 'warning' | 'danger';

export interface FileInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  theme?: TTheme;
}

const FileInput: React.FC<FileInputProps> = ({
  theme = 'default',

  ...props
}: FileInputProps) => {
  const hash = uuid().split('-')[0];

  return <div className={[`muop-file-input-wrapper`].join(' ')}>asdf</div>;
};

FileInput.displayName = 'FileInput';
export default FileInput;
