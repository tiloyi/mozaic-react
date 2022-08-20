import React from 'react';
import View from '../../View';
import { IFileUploaderFilesListProps } from '../FileUploader.types';
import FileUploaderFile from './File';

const FileUploaderList = ({ className, files, onRemove, ...props }: IFileUploaderFilesListProps): JSX.Element => (
    <View className={className} {...props}>
        {files.length > 0 &&
            files.map(file => <FileUploaderFile key={`file-${file.name}`} {...file} onRemove={onRemove} />)}
    </View>
);

export default FileUploaderList;
