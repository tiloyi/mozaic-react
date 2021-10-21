import React, { FC } from 'react';
import { ILayerProps } from './Layer.types';
import './Layer.scss';

const Layer: FC<ILayerProps> = ({ children }): JSX.Element => <div>{children}</div>;

export default Layer;
