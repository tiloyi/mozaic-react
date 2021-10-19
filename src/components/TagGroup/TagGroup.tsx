import React, { FC } from 'react';
import cn from 'classnames';
import { ITagGroupProps } from './TagGroup.types';
import './TagGroup.scss';

import TagText from './partials/TagText';
import TagLink from './partials/TagLink';
import TagSelectable from './partials/TagSelectable';
import TagRemovable from './partials/TagRemovable';

const TagGroup: FC<ITagGroupProps> = ({ className, tags, onSelectTag, onRemove }) => {
    return (
        <ul className={cn('mc-tag-list', className)}>
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
                } else if (type === 'removable') {
                    return (
                        <li className="mc-tag-list__item" key={tagId}>
                            <TagRemovable id={tagId} {...tagData} onRemove={onRemove} />
                        </li>
                    );
                }

                return undefined;
            })}
        </ul>
    );
};

export default TagGroup;
