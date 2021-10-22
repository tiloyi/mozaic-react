import React, { FC } from 'react';
import { useModalsState, useModals } from '../../ModalsProvider/ModalsContext';

const ModalContainer: FC = ({ children }): JSX.Element => {
    const { register } = useModals();
    const modals = useModalsState();

    return <div>{children}</div>;
};

export default ModalContainer;
