import React, { FC } from 'react';
import cn from 'classnames';
import { IModalPartialProps } from '../Modal.types';

const ModalFooter: FC<IModalPartialProps> = ({ className, children }): JSX.Element => (
    <footer className={cn('mc-modal__footer', className)}>{children}</footer>
);

export default ModalFooter;
