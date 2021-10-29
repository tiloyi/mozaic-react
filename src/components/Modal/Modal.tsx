import React, { FC } from 'react';
import { ModalContainer } from './partials';
import { IModalProps } from './Modal.types';
import './Modal.scss';

const Modal: FC<IModalProps> = ({ children, ...props }): JSX.Element => (
    <ModalContainer {...props}>{children}</ModalContainer>
);

export default Modal;
