import React, { forwardRef } from 'react';
import { FileUploaderInput, FileUploaderFilesList } from './partials';
import { IFileUploaderProps } from './FileUploader.types';
import './FileUploader.scss';

const FileUploader = forwardRef<HTMLInputElement, IFileUploaderProps>(
    ({ className, children, files, onRemove, ...props }, ref) => (
        <>
            <FileUploaderInput className={className} ref={ref} {...props}>
                {children}
            </FileUploaderInput>
            <FileUploaderFilesList files={files} onRemove={onRemove} marginTop="mu100" />
        </>
    )
);

FileUploader.displayName = 'FileUploader';

export default FileUploader;
