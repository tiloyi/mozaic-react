import React, { FC } from 'react';
import cn from 'classnames';
import { IFileUploaderProps } from '../FileUploader.types';

const FileUploaderContainer: FC<IFileUploaderProps> = ({
  className,
  requiredText,
  required,
  label,
  helperText,
  isInvalid,
  errorMessage,
  children,
}) => (
  <div className="mc-field">
      <label className="mc-field__label">
          {label}
        {required &&<span className="mc-field__requirement">{requiredText}</span>}
      </label>
      {helperText && <span className="mc-field__help">{helperText}</span>}
      <div className={cn('mc-field__element mc-fileuploader', className)}>
          {children}
      </div>
      {isInvalid && errorMessage && (
          <span className="mc-field__error-message">
              {errorMessage}
          </span>
      )}
  </div>
);

export default FileUploaderContainer;
