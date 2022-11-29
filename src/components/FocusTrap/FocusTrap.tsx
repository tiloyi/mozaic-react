import React, { FC, useEffect, useRef } from 'react';
import { IFocusTrapProps } from './FocusTrap.types';

const FOCUSABLE_ELEMENTS_SELECTORS = [
    '[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'textarea:not([disabled])',
    'select:not([disabled])',
    'details:not([disabled])',
    'summary:not([disabled])',
    '[tabindex]:not([tabindex="-1"])'
];

const KEY_CODE_TAB = 9;

const FocusTrap: FC<IFocusTrapProps> = ({ children, isActive = false, focusedElementIndex = 0, ...props }) => {
    const ref = useRef<HTMLDivElement>(null);
    const lastActiveElementRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (isActive) {
            lastActiveElementRef.current = document.activeElement as HTMLElement;

            const focusableElements = Array.from<HTMLElement>(
                ref.current?.querySelectorAll(FOCUSABLE_ELEMENTS_SELECTORS.join(', ')) ?? []
            );

            if (focusableElements.length > 0) {
                const [firstFocusableElement] = focusableElements;
                const lastFocusableElement = focusableElements[focusableElements.length - 1];

                if (focusedElementIndex >= 0 && focusedElementIndex < focusableElements.length) {
                    focusableElements[focusedElementIndex].focus();
                }

                const eventHandler = (event: KeyboardEvent): void => {
                    const isTabPressed = event.key === 'Tab' || event.keyCode === KEY_CODE_TAB;

                    if (!isTabPressed) {
                        return;
                    }

                    if (event.shiftKey) {
                        if (document.activeElement === firstFocusableElement) {
                            lastFocusableElement.focus();
                            event.preventDefault();
                        }
                    } else {
                        if (document.activeElement === lastFocusableElement) {
                            firstFocusableElement.focus();
                            event.preventDefault();
                        }
                    }
                };

                document.addEventListener('keydown', eventHandler);

                return () => {
                    document.removeEventListener('keydown', eventHandler);
                };
            }
        } else {
            lastActiveElementRef.current?.focus();
        }
    }, [isActive, focusedElementIndex]);

    return (
        <div {...props} ref={ref}>
            {children}
        </div>
    );
};

export default FocusTrap;
