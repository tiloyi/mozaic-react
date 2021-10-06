import React, { FC } from 'react';
import { ITagsProps } from './Tags.types';
import './Tags.scss';

import TagText from './partials/TagText';
import TagLink from './partials/TagLink';
import TagSelectable from './partials/TagSelectable';

const Tags: FC<ITagsProps> = ({ tags, onSelectTag }) => {
    return (
        <ul className="mc-tag-list">
            {tags.map(tagProps => {
                const { id: tagId, tagData } = tagProps;
                const { type } = tagData;

                if (type === 'text') {
                    return (
                        <li className="mc-tag-list__item" key={tagId}>
                            <TagText id={tagId} {...tagData} />
                        </li>
                    );
                } else if (type === 'link') {
                    return (
                        <li className="mc-tag-list__item" key={tagId}>
                            <TagLink id={tagId} {...tagData} />
                        </li>
                    );
                } else if (type === 'selectable') {
                    return (
                        <li className="mc-tag-list__item" key={tagId}>
                            <TagSelectable id={tagId} {...tagData} onSelectTag={onSelectTag} />
                        </li>
                    );
                }

                return undefined;
            })}
        </ul>
    );
};

export default Tags;
