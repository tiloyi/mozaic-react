import React, { FC } from 'react';
import cn from 'classnames';
import { IModalPartialProps } from '../Modal.types';

const ModalHeader: FC<IModalPartialProps> = ({ className, children }) => {
    return <header className={cn('mc-modal__header', className)}>{children}</header>;
};

export default ModalHeader;
