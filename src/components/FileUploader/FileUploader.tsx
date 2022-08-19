import React, { forwardRef } from 'react';
import { IFileUploaderProps } from './FileUploader.types';
import { FileUploaderContainer, FileUploaderLabel, FileUploaderList, FileUploaderIndicator } from './partials';
import './FileUploader.scss';

const FileUploader = forwardRef<HTMLInputElement, IFileUploaderProps>(({ className, children, ...props }, ref) => (
    <FileUploaderContainer className={className}>
        <FileUploaderIndicator {...props} ref={ref} />
        <FileUploaderLabel id={props.id}>{children}</FileUploaderLabel>
        {/*<FileUploaderList files={files} onDeleteFile={onDeleteFile}/>*/}
    </FileUploaderContainer>
));

FileUploader.displayName = 'FileUploader';

export default FileUploader;
