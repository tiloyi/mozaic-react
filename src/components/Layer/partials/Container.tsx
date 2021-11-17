import React, { FC, useEffect } from 'react';
import cn from 'classnames';
import Overlay from '../../Overlay';
import Portal from '../../Portal';
import { useModalsState, useModals } from '../../ModalsProvider/ModalsContext';
import { ILayerContainerProps } from '../Layer.types';

const LayerContainer: FC<ILayerContainerProps> = ({ children, id }): JSX.Element => {
    const { register } = useModals();
    const modals = useModalsState();

    useEffect(() => register(id), [id]);

    const isOpen = modals[id]?.isOpen;

    return (
        <Portal id={`portal-layer-${id}`}>
            <div className="mc-layer" role="dialog" tabIndex={-1}>
                <div className={cn('mc-layer__dialog', isOpen && 'is-open')} role="document">
                    {isOpen && children}
                </div>
            </div>
            <Overlay isVisible={isOpen} />
        </Portal>
    );
};

export default LayerContainer;
