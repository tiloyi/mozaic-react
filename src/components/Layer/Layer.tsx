import React, { FC } from 'react';
import { ILayerProps } from './Layer.types';
import './Layer.scss';

const Layer: FC<ILayerProps> = ({ children }): JSX.Element => {
    return <div>{children}</div>;
};

export default Layer;
