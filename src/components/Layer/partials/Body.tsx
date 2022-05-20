import React, { FC } from 'react';
import cn from 'classnames';
import { ILayerPartialProps } from '../Layer.types';

const LayerBody: FC<ILayerPartialProps> = ({ className, children, ...props }): JSX.Element => (
    <div className="mc-layer__body">
        <article {...props} className={cn('mc-layer__content', className)}>
            {children}
        </article>
    </div>
);

export default LayerBody;
