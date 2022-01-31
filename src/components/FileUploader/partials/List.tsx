import React, { FC } from 'react';
import { IFileUploaderListProps } from '../FileUploader.types';

const FileUploaderList: FC<IFileUploaderListProps> = ({ files, onDeleteFile }): JSX.Element => (
    <ul className="mc-fileuploader__files">
        {files.length > 0 && files.map(item => (
            <li key={item.name} className="mc-fileuploader__file mc-fileuploader__file--is-valid">
                <span className="mc-fileuploader__file-name">{item.name}</span>
                <span className="mc-fileuploader__file-icon" />
                {typeof onDeleteFile !== 'undefined' && (
                    <button
                        type="button"
                        className="mc-fileuploader__delete"
                        onClick={() => onDeleteFile(item.name)}
                    />
                )}
            </li>
        ))
      }
    </ul>
);

export default FileUploaderList;