import React, { FC, useEffect } from 'react';
import cn from 'classnames';
import Overlay from '../../Overlay';
import Portal from '../../Portal';
import { useModalsState, useModals } from '../../ModalsProvider/ModalsContext';
import { IModalContainerProps } from '../Modal.types';

const ModalContainer: FC<IModalContainerProps> = ({ children, id }): JSX.Element => {
    const { register, unregister } = useModals();
    const modals = useModalsState();

    useEffect(() => {
        register(id);

        return () => unregister(id);
    }, [register, unregister, id]);

    /* eslint-disable @typescript-eslint/no-unnecessary-condition */
    const isOpen = modals[id]?.isOpen;

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
