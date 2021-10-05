import React, {FC} from 'react';
import { IModalProps } from './Modal.types';
import './Modal.css'

const Modal: FC<IModalProps> = ({ children }): JSX.Element => {
    return (
        <div>{ children }</div>
    );
};

export default Modal;
