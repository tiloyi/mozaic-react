import React, { FC, useEffect } from 'react';
import cn from 'classnames';
import { IOverlayProps } from './Overlay.types';
import './Overlay.scss';

const Overlay: FC<IOverlayProps> = ({ children, className, isVisible }): JSX.Element => {
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
            <div className={cn('mc-overlay', isVisible && 'is-visible')} />
            {isVisible && children && <div className={className}>{children}</div>}
        </>
    );
};

export default Overlay;
