import React, { forwardRef } from 'react';
import cn from 'classnames';
import { IFileUploaderInputProps } from '../FileUploader.types';

const FileUploaderIndicator = forwardRef<HTMLInputElement, IFileUploaderInputProps>(
  ({ className, isDisabled, id, ...props }, ref) => {

    const fileUploaderClassName = cn(
      'mc-fileuploader__input',
      className,
      );

    return (
        <input
            {...props}
            ref={ref}
            id={id}
            className={fileUploaderClassName}
            type="file"
            disabled={isDisabled}
        />
    );
});

FileUploaderIndicator.displayName = 'FileUploaderIndicator';

export default FileUploaderIndicator;
