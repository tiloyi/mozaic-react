import React from 'react';
import cn from 'classnames';
import { IFileUploaderFileProps } from '../FileUploader.types';

const FileUploaderFile = ({
    className,
    name,
    errorMessage = '',
    isValid,
    isInvalid,
    onRemove,
    ...props
}: IFileUploaderFileProps): JSX.Element => {
    if (isInvalid && isValid) {
        throw new Error('The properties `isValid` and `isInvalid` can not be true in the same time');
    }

    const fileClassName = cn(
        'mc-fileuploader__file',
        className,
        isInvalid && 'mc-fileuploader__file--is-invalid',
        isValid && 'mc-fileuploader__file--is-valid'
    );

    const handleRemove = (): void => onRemove?.(name);

    return (
        <div className={fileClassName} {...props}>
            <span className="mc-fileuploader__file-name">{name}</span>
            <span className="mc-fileuploader__file-icon" />
            {onRemove !== undefined && (
                <button type="button" className="mc-fileuploader__delete" onClick={handleRemove} />
            )}
            {errorMessage.length > 0 && isInvalid && (
                <div className="mc-fileuploader__file-message">{errorMessage}</div>
            )}
        </div>
    );
};

export default FileUploaderFile;
