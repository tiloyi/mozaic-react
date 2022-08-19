import React from 'react';
import cn from 'classnames';
import { IFileUploaderListItemProps } from '../FileUploader.types';

const FileUploaderListItem = ({
    className,
    name,
    isValid,
    isInvalid,
    onRemove,
    ...props
}: IFileUploaderListItemProps): JSX.Element => {
    if (isInvalid && isValid) {
        throw new Error('The properties `isValid` and `isInvalid` can not be true in the same time');
    }

    const itemClassName = cn(
        'mc-fileuploader__file',
        className,
        isInvalid && 'mc-fileuploader__file--is-invalid',
        isValid && 'mc-fileuploader__file--is-valid'
    );

    const handleRemove = (): void => onRemove?.(name);

    return (
        <li className={itemClassName} {...props}>
            <span className="mc-fileuploader__file-name">{name}</span>
            <span className="mc-fileuploader__file-icon" />
            {onRemove !== undefined && (
                <button type="button" className="mc-fileuploader__delete" onClick={handleRemove} />
            )}
            <div className="mc-fileuploader__file-message">Oops, the file is not uploaded.</div>
        </li>
    );
};

export default FileUploaderListItem;
