import React from 'react';
import cn from 'classnames';
import { IModalCloseButtonProps } from '../Modal.types';

const ModalCloseButton = ({ className, title = 'Close', ...props }: IModalCloseButtonProps): JSX.Element => (
    <button type="button" className={cn('mc-modal__close', className)} {...props}>
        <span className="mc-modal__close-text">{title}</span>
    </button>
);

export default ModalCloseButton;
