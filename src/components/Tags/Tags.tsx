import React, { FC } from 'react';
import { ITagsProps } from './Tags.types';
import './Tags.scss';

import TagText from './partials/TagText';
import TagLink from './partials/TagLink';

const Tags: FC<ITagsProps> = ({ tags }) => {
    return (
        <ul className="mc-tag-list">
            {tags.map(tagProps => {
                const { id: tagId, tag: restProps } = tagProps;
                const { type } = restProps;

                if (type === 'text') {
                    return (
                        <li className="mc-tag-list__item" key={tagId}>
                            <TagText id={tagId} {...restProps} />
                        </li>
                    );
                } else if (type === 'link') {
                    return (
                        <li className="mc-tag-list__item" key={tagId}>
                            <TagLink id={tagId} {...restProps} />
                        </li>
                    );
                }

                // toDo: add Selectable type

                return undefined;
            })}
        </ul>
    );
};

export default Tags;
