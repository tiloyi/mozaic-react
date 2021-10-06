import React from 'react';
import { Story } from '@storybook/react';
import Tags from './Tags';
import { ITag, ITagsProps, TagSize } from './Tags.types';
import './Tags.stories.scss';

const WhiteTemlate: Story<ITagsProps> = args => (
    <div className="tagStoryContainerWhite">
        <Tags {...args}>Radio label</Tags>
    </div>
);

const DarkTemplate: Story<ITagsProps> = args => (
    <div className="tagStoryContainerBlack">
        <Tags {...args}>Radio label</Tags>
    </div>
);

export const TextTags = WhiteTemlate.bind({});

TextTags.args = {
    tags: [
        {
            id: '123',
            tagData: {
                type: 'text',
                text: 'Horror'
            }
        },
        {
            id: '124',
            tagData: {
                type: 'text',
                text: 'Sci-Fi'
            }
        },
        {
            id: '125',
            tagData: {
                type: 'text',
                text: 'Detective'
            }
        }
    ]
};

export const SmallTags = WhiteTemlate.bind({});

SmallTags.args = {
    tags: [
        {
            id: '123',
            tagData: {
                type: 'text',
                text: 'Horror',
                size: TagSize.s
            }
        },
        {
            id: '124',
            tagData: {
                type: 'text',
                text: 'Sci-Fi',
                size: TagSize.s
            }
        },
        {
            id: '125',
            tagData: {
                type: 'text',
                text: 'Detective',
                size: TagSize.s
            }
        }
    ]
};

export const TextTagsDark = DarkTemplate.bind({});

TextTagsDark.args = {
    tags: [
        {
            id: '123',
            tagData: {
                type: 'text',
                text: 'Horror',
                size: TagSize.m,
                isDark: true
            }
        },
        {
            id: '124',
            tagData: {
                type: 'text',
                text: 'Sci-Fi',
                size: TagSize.m,
                isDark: true
            }
        },
        {
            id: '125',
            tagData: {
                type: 'text',
                text: 'Detective',
                size: TagSize.m,
                isDark: true
            }
        }
    ]
};

export const SmallTextTagsDark = DarkTemplate.bind({});

SmallTextTagsDark.args = {
    tags: [
        {
            id: '123',
            tagData: {
                type: 'text',
                text: 'Horror',
                size: TagSize.s,
                isDark: true
            }
        },
        {
            id: '124',
            tagData: {
                type: 'text',
                text: 'Sci-Fi',
                size: TagSize.s,
                isDark: true
            }
        },
        {
            id: '125',
            tagData: {
                type: 'text',
                text: 'Detective',
                size: TagSize.s,
                isDark: true
            }
        }
    ]
};

export const LinkTags = WhiteTemlate.bind({});

LinkTags.args = {
    tags: [
        {
            id: '123',
            tagData: {
                type: 'link',
                text: 'Horror',
                link: 'http://google.com'
            }
        },
        {
            id: '124',
            tagData: {
                type: 'link',
                text: 'Sci-Fi',
                link: 'http://google.com'
            }
        },
        {
            id: '125',
            tagData: {
                type: 'link',
                text: 'Detective',
                link: 'http://google.com'
            }
        }
    ]
};

export const DarkLinkTags = DarkTemplate.bind({});

DarkLinkTags.args = {
    tags: [
        {
            id: '123',
            tagData: {
                type: 'link',
                text: 'Horror',
                link: 'http://google.com',
                isDark: true
            }
        },
        {
            id: '124',
            tagData: {
                type: 'link',
                text: 'Sci-Fi',
                link: 'http://google.com',
                isDark: true
            }
        },
        {
            id: '125',
            tagData: {
                type: 'link',
                text: 'Detective',
                link: 'http://google.com',
                isDark: true
            }
        }
    ]
};

export const SelectableTags = WhiteTemlate.bind({});

SelectableTags.args = {
    tags: [
        {
            id: '123',
            tagData: {
                type: 'selectable',
                text: 'Horror'
            }
        },
        {
            id: '124',
            tagData: {
                type: 'selectable',
                text: 'Sci-Fi'
            }
        },
        {
            id: '125',
            tagData: {
                type: 'selectable',
                text: 'Detective'
            }
        }
    ]
};

const ControllableSelectedTagsTemplate: Story<ITagsProps> = () => {
    const [tags, setTags] = React.useState<ITag[]>([
        {
            id: '123',
            tagData: {
                type: 'selectable',
                text: 'Horror',
                isSelected: false
            }
        },
        {
            id: '124',
            tagData: {
                type: 'selectable',
                text: 'Sci-Fi',
                isSelected: false
            }
        },
        {
            id: '125',
            tagData: {
                type: 'selectable',
                text: 'Detective',
                isSelected: false
            }
        }
    ]);

    const tagSelectHandler = (selectedTagId: string) => {
        setTags(prevTags => {
            return prevTags.map(tag => {
                if (tag.id === selectedTagId && tag.tagData.type === 'selectable') {
                    return { ...tag, tagData: { ...tag.tagData, isSelected: !tag.tagData.isSelected } };
                }

                return tag;
            });
        });
    };

    return (
        <div className="tagStoryContainerWhite">
            <Tags tags={tags} onSelectTag={tagSelectHandler}>
                Radio label
            </Tags>
        </div>
    );
};

export const ControllableSelectedTags = ControllableSelectedTagsTemplate.bind({});

export const SelectableTagsDisabled = WhiteTemlate.bind({});

SelectableTagsDisabled.args = {
    tags: [
        {
            id: '123',
            tagData: {
                type: 'selectable',
                text: 'Horror',
                isDisabled: true
            }
        },
        {
            id: '124',
            tagData: {
                type: 'selectable',
                text: 'Sci-Fi'
            }
        },
        {
            id: '125',
            tagData: {
                type: 'selectable',
                text: 'Detective'
            }
        }
    ]
};

export const SelectableSmallTags = WhiteTemlate.bind({});

SelectableSmallTags.args = {
    tags: [
        {
            id: '123',
            tagData: {
                type: 'selectable',
                text: 'Horror',
                size: TagSize.s
            }
        },
        {
            id: '124',
            tagData: {
                type: 'selectable',
                text: 'Sci-Fi',
                size: TagSize.s
            }
        },
        {
            id: '125',
            tagData: {
                type: 'selectable',
                text: 'Detective',
                size: TagSize.s
            }
        }
    ]
};

export default {
    title: 'Tags',
    component: Tags
};
