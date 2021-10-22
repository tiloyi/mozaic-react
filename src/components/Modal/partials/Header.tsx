import React, { FC } from 'react';
import cn from 'classnames';
import { IModalPartialProps } from '../Modal.types';

const ModalHeader: FC<IModalPartialProps> = ({ className, children }): JSX.Element => (
    <header className={cn('mc-modal__header', className)}>{children}</header>
);

export default ModalHeader;
