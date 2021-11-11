import React, { FC } from 'react';
import cn from 'classnames';
import { ILayerPartialProps } from '../Layer.types';

const ModalHeader: FC<ILayerPartialProps> = ({ className, children }): JSX.Element => (
    <header className={cn('mc-layer__header', className)}>{children}</header>
);

export default ModalHeader;