import React from 'react';
import './FileUploaderItem.scss';
import classNames from "classnames";
import { IFileUploadItemProps } from "./FileUploaderItem.types";

const FileUploaderItem: React.FC<IFileUploadItemProps> = ({
    status = 'valid',
    onDelete,
    fileName,
    loadingIcon,
    id,
    className,
    ...props
}) => (
    <li
        className={classNames(['mc-fileuploader__file', className], {
            'mc-fileuploader__file--is-valid': status === 'valid',
            'mc-fileuploader__file--is-invalid': status === 'invalid',
        })}
        id={id}
        {...props}
    >
        <span className="mc-fileuploader__file-name" data-validity={status}>{fileName}</span>
        <span className={classNames('mc-fileuploader__file-icon', {
            'mc-fileuploader__file--is-loading': status === 'loading'
        })}>
            {status === 'loading' && loadingIcon}
        </span>
        <button type="button" className="mc-fileuploader__delete" onClick={onDelete} />
    </li>
);

export default FileUploaderItem;
