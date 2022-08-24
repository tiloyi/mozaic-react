import React, { FC, useEffect } from 'react';
import cn from 'classnames';
import { IOverlayProps } from './Overlay.types';
import './Overlay.scss';

const Overlay: FC<IOverlayProps> = ({ children, className, isVisible, onClick }): JSX.Element => {
    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isVisible]);

    useEffect(
        () => () => {
            document.body.style.overflow = '';
        },
        []
    );

    return (
        <>
            {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
            <div
                className={cn('mc-overlay', isVisible && 'is-visible')}
                role="dialog"
                tabIndex={-1}
                onClick={onClick}
            />
            {isVisible && children && <div className={className}>{children}</div>}
        </>
    );
};

export default Overlay;
