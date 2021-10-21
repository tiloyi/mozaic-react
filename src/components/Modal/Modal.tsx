import React, { FC } from 'react';
import { IModalProps } from './Modal.types';
import './Modal.scss';

const Modal: FC<IModalProps> = ({ children }): JSX.Element => <div>{children}</div>;

export default Modal;
