import React from 'react';
import cn from 'classnames';
import { combiningSizeWithProps, ILoaderProps } from './Loader.types';
import './Loader.scss';

export const blockClassName = 'mc-loader';

const Loader = ({ className, themes = 'primary', size = 'm', }: ILoaderProps): JSX.Element => {
    const elementClassName = cn(
        blockClassName,
        className,
        `${blockClassName}--${themes}`,
        `${blockClassName}--${size}`,
    );
    const { viewBox, radius } = combiningSizeWithProps[size]

    return (
      <div className={elementClassName}>
        <span className="mc-loader__spinner">
          <svg
            className="mc-loader__icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox={viewBox}
          >
              <circle className="mc-loader__path" cx="50%" cy="50%" r={radius}/>
          </svg>
        </span>
      </div>
    );
};

export default Loader;
