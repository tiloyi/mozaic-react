import React, { FC } from 'react';
import { IFileUploaderProps } from './FileUploader.types';
import { FileUploaderContainer, FileUploaderIndicator, FileUploaderLabel } from './partials';
import './FileUploader.scss';

const FileUploader: FC<IFileUploaderProps> = ({
  children,
  label,
  helperText,
  requiredText,
  errorMessage,
  ...props
}) => (
    <FileUploaderContainer
      className={props.className}
      isInvalid={props.isInvalid}
      required={props.required}
      label={label}
      helperText={helperText}
      errorMessage={errorMessage}
      requiredText={requiredText}
    >
      <FileUploaderIndicator {...props} />
      <FileUploaderLabel>{children}</FileUploaderLabel>
    </FileUploaderContainer>
  )

export default FileUploader;
