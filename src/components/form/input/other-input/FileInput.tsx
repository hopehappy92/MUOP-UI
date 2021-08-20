import React, { useCallback, useEffect, useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';
import bytes from 'bytes';

import './FileInputStyle.scss';

type TTheme = 'default' | 'info' | 'secondary' | 'warning' | 'danger';

export interface FileInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  theme?: TTheme;
  text?: string;
  accept?: string;
  isMulti?: boolean;
  uploadedFileComponent?: React.ReactNode;
  onUploadFiles?: (files: FileList | null) => void;
}

const FileInput: React.FC<FileInputProps> = ({
  theme = 'default',
  text = 'Click me Or Drop me',
  accept,
  isMulti = false,
  uploadedFileComponent,
  onUploadFiles,
  ...props
}: FileInputProps) => {
  const hash = uuid().split('-')[0];

  const [uploadedFiles, setUploadedFiles] = useState<File[] | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const labelRef = useRef<HTMLLabelElement>(null);

  const convertFileListToArray = useCallback((fileList: FileList | null) => {
    const files: FileList | null = Object(fileList);
    const tempFileList: File[] = [];
    if (files) {
      for (let i = 0; i < files.length; i += 1) {
        tempFileList.push(files[i] as File);
      }
      setUploadedFiles(tempFileList);
    }
  }, []);

  useEffect(() => {
    if (inputRef.current && labelRef.current) {
      const { width, height } = labelRef.current.getClientRects()[0];
      inputRef.current.style.width = `${width}px`;
      inputRef.current.style.height = `${height}px`;
    }
  }, [uploadedFiles]);

  const onFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    convertFileListToArray(e.currentTarget.files);
    onUploadFiles?.(e.currentTarget.files);
  };

  const onFilesResetBtnClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.currentTarget.value = '';
    setUploadedFiles(null);
    onUploadFiles?.(null);
  };

  const onDropFiles = (e: React.DragEvent<HTMLInputElement>) => {
    convertFileListToArray(e.currentTarget.files);
    onUploadFiles?.(e.currentTarget.files);
  };

  return (
    <div
      className={[
        `muop-file-input-wrapper`,
        `muop-file-input-wrapper-${theme}`
      ].join(' ')}
    >
      <input
        id={`muop-file-input-${hash}`}
        ref={inputRef}
        type="file"
        multiple={isMulti}
        accept={accept}
        onChange={onFilesChange}
        onClick={onFilesResetBtnClick}
        onDrop={onDropFiles}
        {...props}
      />
      <label
        ref={labelRef}
        htmlFor={`muop-file-input-${hash}`}
        className={[
          `${
            uploadedFiles && !uploadedFileComponent
              ? 'muop-file-input-label-span'
              : ''
          }`,
          `${!uploadedFiles ? 'muop-file-input-label-default' : ''}`
        ].join(' ')}
      >
        {!uploadedFiles && text}
        {uploadedFiles &&
          (!uploadedFileComponent
            ? uploadedFiles?.map(file => (
                <span key={`uploaded-file-${file.name}`}>
                  <span>{file.name}</span>
                  <span>{bytes(file.size)}</span>
                </span>
              ))
            : uploadedFileComponent)}
      </label>
      {}
    </div>
  );
};

FileInput.displayName = 'FileInput';
export default FileInput;
