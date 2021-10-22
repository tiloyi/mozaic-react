import React, { FC, useEffect } from 'react';
import { useModalsState, useModals } from '../../ModalsProvider/ModalsContext';
import { IModalContainerProps } from '../Modal.types';

const ModalContainer: FC<IModalContainerProps> = ({ children, id }): JSX.Element | null => {
    const { register } = useModals();
    const modals = useModalsState();

    useEffect(() => register(id), [register, id]);

    if (modals[id].isOpen) {
        return <div>{children}</div>;
    }

    return null;
};

export default ModalContainer;
