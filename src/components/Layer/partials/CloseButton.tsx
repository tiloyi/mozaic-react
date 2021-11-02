import React from 'react';
import cn from 'classnames';
import { ILayerCloseButtonProps } from '../Layer.types';

const LayerCloseButton = ({ className, title = 'Close', ...props }: ILayerCloseButtonProps): JSX.Element => (
    <button type="button" className={cn('mc-layer__close', className)} {...props}>
        <span className="mc-layer__close-text">{title}</span>
    </button>
);

export default LayerCloseButton;
