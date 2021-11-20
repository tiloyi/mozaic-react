import React, { FC } from 'react';
import { ILinkProps } from './Link.types';
import './Link.scss'

const Link: FC<ILinkProps> = ({ children }): JSX.Element => {
    return (
        <div>{ children }</div>
    );
};

export default Link;
