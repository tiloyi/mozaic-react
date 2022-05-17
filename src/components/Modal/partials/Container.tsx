import React, { FC, useEffect } from 'react';
import cn from 'classnames';
import { useIsMounted } from '../../../hooks';
import { useModalsState, useModals } from '../../ModalsProvider/ModalsContext';
import Overlay from '../../Overlay';
import Portal from '../../Portal';
import { IModalContainerProps } from '../Modal.types';

const ModalContainer: FC<IModalContainerProps> = ({ children, id, onOpen, onClose }): JSX.Element => {
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
        <Portal id={`portal-modal-${id}`}>
            <div className="mc-modal" role="dialog" tabIndex={-1}>
                <div className={cn('mc-modal__dialog', isOpen && 'is-open')} role="document">
                    {isOpen && children}
                </div>
            </div>
            <Overlay isVisible={isOpen} />
        </Portal>
    );
};

export default ModalContainer;
