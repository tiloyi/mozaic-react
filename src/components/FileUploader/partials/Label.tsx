import React, { FC } from 'react';

const FileUploaderLabel: FC = ({ children }) => (
    <label htmlFor="default" className="mc-fileuploader__label">
        <span className="mc-fileuploader__label--center">
            {children}
        </span>
    </label>
);

export default FileUploaderLabel;
