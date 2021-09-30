import React, {FC} from 'react';
import { IOverlayProps } from './Overlay.types';
import './Overlay.css'

const Overlay: FC<IOverlayProps> = ({ children }): JSX.Element => {
    return (
        <div>{ children }</div>
    );
};

export default Overlay;
