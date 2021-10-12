import React, { FC } from 'react';
import cn from 'classnames';
import { ITagSelectableProps, TagSize } from '../../Tags.types';

import { classNames } from '../../constants';

const SELECTABLE_CLASSNAME = classNames.selectable;

const TagSelectable: FC<ITagSelectableProps> = ({
    id,
    type = 'selectable',
    text,
    isSelected,
    onSelectTag,
    isDisabled,
    size,
    isDark,
    leftIcon,
    rightIcon,
    ...props
}) => {
    const onSelectTagHandler = () => {
        if (!isDisabled && onSelectTag) {
            onSelectTag(id);
        }
    };

    return (
        <span
            className={cn(
                SELECTABLE_CLASSNAME,
                `${SELECTABLE_CLASSNAME}--${size}`,
                isDark && `${SELECTABLE_CLASSNAME}--dark`
            )}
        >
            <input
                {...props}
                className={`${SELECTABLE_CLASSNAME}__input`}
                type="checkbox"
                id={id}
                checked={isSelected}
                disabled={isDisabled}
                onChange={onSelectTagHandler}
            />
            <label className={`${SELECTABLE_CLASSNAME}__pill`} htmlFor={id}>
                {leftIcon}
                <span className={`${SELECTABLE_CLASSNAME}__label`}>{text}</span>
                {rightIcon}
            </label>
        </span>
    );
};

export default TagSelectable;
