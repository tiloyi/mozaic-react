import React, { FC } from 'react';
import { IFlagProps } from './Flag.types';
import './Flag.scss';

const Flag: FC<IFlagProps> = ({ children, ...props }) => {
    return (
        <div className="mc-flag" {...props}>
            {children}
        </div>
    );
};

export default Flag;
