import React, { useCallback } from 'react';
import cn from 'classnames';
import { useModals } from '../../ModalsProvider';
import { ILayerCloseButtonProps } from '../Layer.types';

const LayerCloseButton = ({ className, id, title = 'Close', ...props }: ILayerCloseButtonProps): JSX.Element => {
    const { close } = useModals();

    const handleClick = useCallback(() => close(id), [close, id]);

    return (
        <button type="button" className={cn('mc-layer__close', className)} {...props} onClick={handleClick}>
            <span className="mc-layer__close-text">{title}</span>
        </button>
    );
};

export default LayerCloseButton;
