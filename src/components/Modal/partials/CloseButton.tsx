import React, { useCallback } from 'react';
import cn from 'classnames';
import { useModals } from '../../ModalsProvider';
import { IModalCloseButtonProps } from '../Modal.types';

const ModalCloseButton = ({ className, id, title = 'Close', ...props }: IModalCloseButtonProps): JSX.Element => {
    const { close } = useModals();

    const handleClick = useCallback(() => close(id), [close, id]);

    return (
        <button type="button" className={cn('mc-modal__close', className)} {...props} onClick={handleClick}>
            <span className="mc-modal__close-text">{title}</span>
        </button>
    );
};

export default ModalCloseButton;
