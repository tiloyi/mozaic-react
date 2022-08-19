import React from 'react';
import cn from 'classnames';
import { IFileUploaderListProps } from '../FileUploader.types';

const FileUploaderList = ({ className, files, onRemove, ...props }: IFileUploaderListProps): JSX.Element => {
    return (
        <ul className={cn('mc-fileuploader__files', className)} {...props}>
            {/*  {files.length > 0 && files.map(item => (*/}
            {/*      <li key={item.name} className="mc-fileuploader__file mc-fileuploader__file--is-valid">*/}
            {/*          <span className="mc-fileuploader__file-name">{item.name}</span>*/}
            {/*          <span className="mc-fileuploader__file-icon" />*/}
            {/*          {typeof onDeleteFile !== 'undefined' && (*/}
            {/*              <button*/}
            {/*                  type="button"*/}
            {/*                  className="mc-fileuploader__delete"*/}
            {/*                  onClick={() => onDeleteFile(item.name)}*/}
            {/*              />*/}
            {/*          )}*/}
            {/*      </li>*/}
            {/*  ))*/}
            {/*}*/}
        </ul>
    );
};

export default FileUploaderList;
