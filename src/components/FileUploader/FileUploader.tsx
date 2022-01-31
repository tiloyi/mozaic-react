import React, { FC } from 'react';
import { IFileUploaderProps } from './FileUploader.types';
import { FileUploaderContainer, FileUploaderLabel, FileUploaderList, FileUploaderIndicator } from './partials';
import './FileUploader.scss';

const FileUploader: FC<IFileUploaderProps> = ({
    className,
    onDeleteFile,
    files,
    children,
    ...props
}) => (
    <FileUploaderContainer className={className}>
        <FileUploaderIndicator {...props} />
        <FileUploaderLabel>{children}</FileUploaderLabel>
        <FileUploaderList files={files} onDeleteFile={onDeleteFile}/>
    </FileUploaderContainer>
);

export default FileUploader;
