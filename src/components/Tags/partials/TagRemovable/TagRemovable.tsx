import React, { FC } from 'react';
import cn from 'classnames';
import { ITagRemovableProps } from '../../Tags.types';

import { classNames } from '../../constants';

const REMOVABLE_CLASSNAME = classNames.removable;

const TagRemovable: FC<ITagRemovableProps> = ({ id, text, isDark, size, onRemove }) => {
    const onRemoveHandler = () => {
        if (onRemove) {
            onRemove(id);
        }
    };

    return (
        <span
            id={id}
            className={cn(
                REMOVABLE_CLASSNAME,
                isDark && `${REMOVABLE_CLASSNAME}--dark`,
                `${REMOVABLE_CLASSNAME}--${size}`
            )}
        >
            <span className={`${REMOVABLE_CLASSNAME}__label`}>{text}</span>
            <button onClick={onRemoveHandler} className={`${REMOVABLE_CLASSNAME}__remove`}>
                <span className={`${REMOVABLE_CLASSNAME}__remove-text`}>Delete tag</span>
            </button>
        </span>
    );
};

export default TagRemovable;
