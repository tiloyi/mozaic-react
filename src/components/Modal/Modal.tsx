import React, { FC } from 'react';
import { ModalContainer, ModalCloseButton } from './partials';
import { IModalProps } from './Modal.types';
import './Modal.scss';

const Modal: FC<IModalProps> = ({ children, id, onClose, ...props }): JSX.Element => (
    <ModalContainer {...props} id={id}>
        {children}
        <ModalCloseButton id={id} onClose={onClose} />
    </ModalContainer>
);

export default Modal;
