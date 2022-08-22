import React, { forwardRef, useRef } from 'react';
import cn from 'classnames';
import { nanoid } from 'nanoid';
import { IFileUploaderInputProps } from '../FileUploader.types';

const Input = forwardRef<HTMLInputElement, IFileUploaderInputProps>(
    ({ className, id, children, isDisabled, ...props }, ref) => {
        const idRef = useRef(id ?? nanoid());

        return (
            <div className={cn('mc-fileuploader', className)}>
                <input
                    {...props}
                    id={idRef.current}
                    type="file"
                    ref={ref}
                    className="mc-fileuploader__input"
                    disabled={isDisabled}
                />
                <label className="mc-fileuploader__label" htmlFor={idRef.current}>
                    <span>{children}</span>
                </label>
            </div>
        );
    }
);

Input.displayName = 'FileUploaderInput';

export default Input;
