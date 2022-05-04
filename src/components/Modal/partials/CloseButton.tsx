import React, { useCallback } from 'react';
import cn from 'classnames';
import { useModals } from '../../ModalsProvider';
import { IModalCloseButtonProps } from '../Modal.types';

const ModalCloseButton = ({
    className,
    id,
    title = 'Close',
    onClose,
    ...props
}: IModalCloseButtonProps): JSX.Element => {
    const { close } = useModals();

    const handleClick = useCallback(() => {
        onClose();
        close(id);
    }, [id, close]);

    return (
        <button type="button" className={cn('mc-modal__close', className)} {...props} onClick={handleClick}>
            <span className="mc-modal__close-text">{title}</span>
        </button>
    );
};

export default ModalCloseButton;
