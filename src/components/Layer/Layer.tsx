import React, { FC } from 'react';
import { LayerContainer, LayerCloseButton } from './partials';
import { ILayerProps } from './Layer.types';
import './Layer.scss';

const Layer: FC<ILayerProps> = ({ children, id, ...props }): JSX.Element => (
    <LayerContainer {...props} id={id}>
        {children}
        <LayerCloseButton id={id} />
    </LayerContainer>
);

export default Layer;
