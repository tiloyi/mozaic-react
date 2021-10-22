import React, { FC } from 'react';
import cn from 'classnames';
import { ILayerPartialProps } from '../Layer.types';

const LayerFooter: FC<ILayerPartialProps> = ({ className, children }): JSX.Element => (
    <footer className={cn('mc-layer__footer', className)}>{children}</footer>
);

export default LayerFooter;
