import React, { FC, useEffect } from 'react';
import cn from 'classnames';
import { useIsMounted } from '../../../hooks';
import Overlay from '../../Overlay';
import Portal from '../../Portal';
import { useModalsState, useModals } from '../../ModalsProvider/ModalsContext';
import { ILayerContainerProps } from '../Layer.types';

const LayerContainer: FC<ILayerContainerProps> = ({ children, id, onOpen, onClose, ...props }): JSX.Element => {
    const { register, unregister } = useModals();
    const modals = useModalsState();
    const isMounted = useIsMounted();

    useEffect(() => {
        register(id);

        return () => unregister(id);
    }, [register, unregister, id]);

    const modalState = modals[id];

    const isOpen = modalState === 'opened';

    useEffect(() => {
        if (isMounted) {
            if (modalState === 'opened') {
                onOpen?.();
            }

            if (modalState === 'closed') {
                onClose?.();
            }
        }
    }, [modalState, isMounted, onOpen, onClose]);

    return (
        <Portal id={`portal-layer-${id}`}>
            <div className="mc-layer" role="dialog" tabIndex={-1}>
                <div {...props} className={cn('mc-layer__dialog', isOpen && 'is-open')} role="document">
                    {isOpen && children}
                </div>
            </div>
            <Overlay isVisible={isOpen} />
        </Portal>
    );
};

export default LayerContainer;
