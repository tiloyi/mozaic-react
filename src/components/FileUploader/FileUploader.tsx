import React from 'react';
import { IFileUploaderProps } from "./FileUploader.types";
import './FileUploader.scss';

const FileUploader: React.FC<IFileUploaderProps> = ({
    onChange,
    className = '',
    id = 'fileUpload',
    label = 'Select file to upload',
    multiple = false,
    disabled = false,
    children,
    ...props
}) =>
(
    <div className="mc-fileuploader">
        <input
            multiple={multiple}
            type="file"
            className={`mc-fileuploader__input ${className} ${disabled ? 'is-disabled' : ''}`}
            id={id}
            onChange={onChange}
            disabled={disabled}
            {...props}
        />
        <label htmlFor={id} className="mc-fileuploader__label">
          <span className="mc-fileuploader__label--center">
            {label}
          </span>
        </label>
        {children ? (
            <ul className="mc-fileuploader__files">{children}</ul>
        ) : null}
    </div>
)


export default FileUploader;
