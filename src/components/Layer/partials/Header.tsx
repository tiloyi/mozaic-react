import React, { FC } from 'react';
import cn from 'classnames';
import { ILayerPartialProps } from '../Layer.types';

const ModalHeader: FC<ILayerPartialProps> = ({ className, children, ...props }): JSX.Element => (
    <header className={cn('mc-layer__header', className)} {...props}>
        {children}
    </header>
);

export default ModalHeader;
