import { createElement, FC } from 'react';
import { THeadingTag } from '../../Heading';

interface IModalHeadingProps {
    className?: string;
    as?: THeadingTag;
}

const ModalHeading: FC<IModalHeadingProps> = ({ as = 'h3', children, ...props }) =>
    createElement(as, { className: 'mc-modal__heading', ...props }, children);

export default ModalHeading;
