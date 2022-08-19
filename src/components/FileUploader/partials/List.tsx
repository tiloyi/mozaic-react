import React from 'react';
import cn from 'classnames';
import { IFileUploaderListProps } from '../FileUploader.types';
import FileUploaderListItem from './ListItem';

const FileUploaderList = ({ className, files, onRemove, ...props }: IFileUploaderListProps): JSX.Element => {
    return (
        <ul className={cn('mc-fileuploader__files', className)} {...props}>
            {files.length > 0 && files.map(file => <FileUploaderListItem key="11" {...file} onRemove={onRemove} />)}
        </ul>
    );
};

export default FileUploaderList;
