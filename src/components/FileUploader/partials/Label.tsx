import React, { FC } from 'react';

const FileUploaderLabel: FC<{ id: string }> = ({ children, id }) => (
    <label htmlFor={id} className="mc-fileuploader__label">
        <span className="mc-fileuploader__label--center">
            {children}
        </span>
    </label>
);

export default FileUploaderLabel;
