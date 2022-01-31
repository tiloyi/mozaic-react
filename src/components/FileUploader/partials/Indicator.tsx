import React from 'react';
import cn from 'classnames';
import { IFileUploaderInputProps } from '../FileUploader.types';

const FileUploaderIndicator = ({
    className,
    isDisabled,
    ...props
}: IFileUploaderInputProps): JSX.Element => {

    const fileUploaderClassName = cn(
      'mc-fileuploader__input',
      className,
      );

    return (
        <input
            {...props}
            id="default"
            className={fileUploaderClassName}
            type="file"
            disabled={isDisabled}
        />
    );
};

export default FileUploaderIndicator;
