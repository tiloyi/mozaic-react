import React, { FC } from 'react';
import cn from 'classnames';
import { ITagTextProps, TagSize } from '../../Tags.types';

import { classNames } from '../../constants';

const TEXT_CLASSNAME = classNames.text;

const TagText: FC<ITagTextProps> = ({
    id,
    type = 'text',
    text,
    size = TagSize.m,
    isDark = false,
    leftIcon,
    rightIcon
}) => {
    return (
        <span id={id} className={cn(TEXT_CLASSNAME, `${TEXT_CLASSNAME}--${size}`, isDark && `${TEXT_CLASSNAME}--dark`)}>
            {leftIcon}
            <span className={`${TEXT_CLASSNAME}__label`}>{text}</span>
            {rightIcon}
        </span>
    );
};

export default TagText;
