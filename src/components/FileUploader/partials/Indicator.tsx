import React from 'react';
import cn from 'classnames';
import { IFileUploaderInputProps } from '../FileUploader.types';

const FileUploaderIndicator = ({
    className,
    isDisabled,
    isInvalid,
    ...props
}: IFileUploaderInputProps): JSX.Element => {

    const fileUploaderClassName = cn(
      'mc-fileuploader__input',
      className,
      isInvalid && 'is-invalid',
      );

    return (
        <input
            {...props}
            id="default"
            className={fileUploaderClassName}
            type="file"
            disabled={isDisabled}
            aria-invalid={isInvalid}
        />
    );
};

export default FileUploaderIndicator;
