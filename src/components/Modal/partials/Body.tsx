import React, { FC } from 'react';
import cn from 'classnames';
import { IModalPartialProps } from '../Modal.types';

const ModalBody: FC<IModalPartialProps> = ({ className, children, ...props }): JSX.Element => (
    <div className="mc-modal__body">
        <article {...props} className={cn('mc-modal__content', className)}>
            {children}
        </article>
    </div>
);

export default ModalBody;
