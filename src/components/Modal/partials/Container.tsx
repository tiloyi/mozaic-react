import React, { FC, useCallback, useEffect } from 'react';
import cn from 'classnames';
import useEventListener from '@byndyusoft-ui/use-event-listener';
import { useIsMounted } from '../../../hooks';
import { FocusTrap } from '../../FocusTrap';
import { useModalsState, useModals } from '../../ModalsProvider';
import Overlay from '../../Overlay';
import Portal from '../../Portal';
import { IModalContainerProps } from '../Modal.types';

const KEY_CODE_ESC = 27;

const ModalContainer: FC<IModalContainerProps> = ({ children, id, onOpen, onClose, ...props }): JSX.Element => {
    const { register, unregister, close } = useModals();
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

    const eventListener = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === 'Escape' || event.keyCode === KEY_CODE_ESC) {
                close(id);
            }
        },
        [close, id]
    );

    useEventListener('keydown', eventListener, document);

    const handleClick = useCallback(() => close(id), [close, id]);

    return (
        <Portal id={`portal-modal-${id}`}>
            <section className="mc-modal" role="dialog" tabIndex={-1}>
                <FocusTrap
                    {...props}
                    className={cn('mc-modal__dialog', isOpen && 'is-open')}
                    role="document"
                    isActive={isOpen}
                >
                    {isOpen && children}
                </FocusTrap>
            </section>
            <Overlay isVisible={isOpen} onClick={handleClick} />
        </Portal>
    );
};

export default ModalContainer;
