import React from 'react';
import cn from 'classnames';
import { IModalCloseButtonProps } from '../Modal.types';

const ModalCloseButton = ({ className, ...props }: IModalCloseButtonProps) => (
    <button type="button" className={cn('mc-modal__close', className)} {...props}>
        <span className="mc-modal__close-text">Close</span>
    </button>
);

export default ModalCloseButton;
