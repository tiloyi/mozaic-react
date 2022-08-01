import React from 'react';
import cn from 'classnames';
import './Tag.scss';
import { ITagProps } from './Tag.types';

const blockClassName = 'mc-tag';

const Tag: React.FC<ITagProps> = ({ className = '', type = 'text', theme, size = 'm', onClose, children }) => {
    const wrapperClassName = cn(
        `${blockClassName}-${type}`,
        className,
        `${blockClassName}-${type}--${size}`,
        theme && `${blockClassName}-${type}--${theme}`
    );

    const labelClassName = `${blockClassName}-${type}__label`;

    // TODO add conditionnal rendering with selectable and link
    // if(type === selectable){
    // return components
    // }
    // Removable and text as pretty similar instead of additionnal delete button
    return (
        <span className={wrapperClassName} data-testid='tag-wrapper'>
            <span className={labelClassName}>{children}</span>
            {type === 'removable' && (
                <button type="button" className={`${blockClassName}-${type}__remove`} onClick={onClose}>
                    <span className={`${blockClassName}-${type}__remove-text`}>Delete tag</span>
                </button>
            )}
        </span>
    );
};

export default Tag;
