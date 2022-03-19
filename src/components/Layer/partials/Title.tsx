import { createElement, FC } from 'react';
import cn from 'classnames';
import { ILayerTitleProps } from '../Layer.types';

const LayerTitle: FC<ILayerTitleProps> = ({ className, children, as = 'h2', ...props }): JSX.Element =>
    createElement(as, { className: cn('mc-layer__title', className), ...props }, children);

export default LayerTitle;
