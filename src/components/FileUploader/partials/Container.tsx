import React, { FC } from 'react';
import cn from 'classnames';
import { IFileUploaderContainerProps } from '../FileUploader.types';

const FileUploaderContainer: FC<IFileUploaderContainerProps> = ({ className, children}) => (
    <div className={cn('mc-fileuploader', className)}>
        {children}
    </div>
);

export default FileUploaderContainer;
