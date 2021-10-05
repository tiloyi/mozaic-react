import React, { FC } from 'react';
import cn from 'classnames';
import { ITagTextProps, TagSize } from '../../Tags.types';

import { classNames } from '../../constants';

const TEXT_CLASSNAME = classNames.text;

const TagText: FC<ITagTextProps> = ({ id, text, size = TagSize.m, isDark = false }) => {
    return (
        <span id={id} className={cn(TEXT_CLASSNAME, `${TEXT_CLASSNAME}--${size}`, isDark && `${TEXT_CLASSNAME}--dark`)}>
            <span className={`${TEXT_CLASSNAME}__label`}>{text}</span>
        </span>
    );
};

export default TagText;
