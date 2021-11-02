import React, { FC, useEffect } from 'react';
import { useModalsState, useModals } from '../../ModalsProvider/ModalsContext';
import { ILayerContainerProps } from '../Layer.types';

const LayerContainer: FC<ILayerContainerProps> = ({ children, id }): JSX.Element | null => {
    const { register } = useModals();
    const modals = useModalsState();

    useEffect(() => register(id), [register, id]);

    if (modals[id].isOpen) {
        return <div>{children}</div>;
    }

    return null;
};

export default LayerContainer;
