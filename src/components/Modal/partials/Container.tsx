import React, { FC, useEffect } from 'react';
import Overlay from '../../Overlay';
import Portal from '../../Portal';
import { useModalsState, useModals } from '../../ModalsProvider/ModalsContext';
import { IModalContainerProps } from '../Modal.types';

const ModalContainer: FC<IModalContainerProps> = ({ children, id }): JSX.Element | null => {
    const { register } = useModals();
    const modals = useModalsState();

    useEffect(() => register(id), [register, id]);

    if (modals[id]?.isOpen) {
        return (
            <Portal id={`portal-modal-${id}`}>
                <div className="mc-modal" role="dialog" tabIndex={-1}>
                    <div className="mc-modal__dialog is-open" role="document">
                        {children}
                    </div>
                </div>
                <Overlay isVisible />
            </Portal>
        );
    }

    return null;
};

export default ModalContainer;
