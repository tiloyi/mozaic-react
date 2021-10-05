import React, { FC } from 'react';
import cn from 'classnames';
import { ITagLinkProps, TagSize } from '../../Tags.types';
import { classNames } from '../../constants';

const LINK_CLASSNAME = classNames.link;

const TagLink: FC<ITagLinkProps> = ({ id, text, link, size = TagSize.m, isDark = false, ...props }) => {
    return (
        <a
            {...props}
            rel="noopener noreferrer"
            href={link}
            className={cn(LINK_CLASSNAME, `${LINK_CLASSNAME}--${size}`, isDark && `${LINK_CLASSNAME}--dark`)}
            id={id}
        >
            <span className={`${LINK_CLASSNAME}__label`}>{text}</span>
        </a>
    );
};

export default TagLink;
