import React, { FC } from 'react';
import cn from 'classnames';
import { ILayerPartialProps } from '../Layer.types';

const LayerBody: FC<ILayerPartialProps> = ({ className, children }): JSX.Element => (
    <div className="mc-layer__body">
        <article className={cn('mc-layer__content', className)}>{children}</article>
    </div>
);

export default LayerBody;
