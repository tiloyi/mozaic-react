import React, { FC } from 'react';
import { ModalContainer, ModalCloseButton } from './partials';
import { IModalProps } from './Modal.types';
import './Modal.scss';

const Modal: FC<IModalProps> = ({ children, ...props }): JSX.Element => (
    <ModalContainer {...props}>
        {children}
        <ModalCloseButton />
    </ModalContainer>
);

export default Modal;
