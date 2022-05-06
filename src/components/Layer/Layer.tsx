import React, { FC } from 'react';
import { LayerContainer, LayerCloseButton } from './partials';
import { ILayerProps } from './Layer.types';
import './Layer.scss';

const Layer: FC<ILayerProps> = ({ children, id, onClose, ...props }): JSX.Element => (
    <LayerContainer {...props} id={id}>
        {children}
        <LayerCloseButton id={id} onClose={onClose} />
    </LayerContainer>
);

export default Layer;
