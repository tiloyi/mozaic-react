import React from 'react';
import { Story } from '@storybook/react';
import TagGroup from './TagGroup';
import { ITag, ITagGroupProps, TagSize, TagType } from './TagGroup.types';
import './TagGroup.stories.scss';

const WhiteTemlate: Story<ITagGroupProps> = args => (
    <div className="tagStoryContainerWhite">
        <TagGroup {...args}>Radio label</TagGroup>
    </div>
);

const DarkTemplate: Story<ITagGroupProps> = args => (
    <div className="tagStoryContainerBlack">
        <TagGroup {...args}>Radio label</TagGroup>
    </div>
);

export const TextTags = WhiteTemlate.bind({});

TextTags.args = {
    tags: [
        {
            id: '123',
            tagData: {
                type: TagType.Text,
                text: 'Horror'
            }
        },
        {
            id: '124',
            tagData: {
                type: TagType.Text,
                text: 'Sci-Fi'
            }
        },
        {
            id: '125',
            tagData: {
                type: TagType.Text,
                text: 'Detective'
            }
        }
    ]
};

export const TextTagsWithIcons = WhiteTemlate.bind({});

const IconWithEmoji = ({ emoji, className }: { emoji: string; className: string }) => (
    <span className={className}>{emoji}</span>
);

TextTagsWithIcons.args = {
    tags: [
        {
            id: '123',
            tagData: {
                type: TagType.Text,
                text: 'Horror',
                leftIcon: <IconWithEmoji className="leftIcon" emoji={'😱'} />
            }
        },
        {
            id: '124',
            tagData: {
                type: TagType.Text,
                text: 'Sci-Fi',
                rightIcon: <IconWithEmoji className="rightIcon" emoji={'👽'} />
            }
        },
        {
            id: '125',
            tagData: {
                type: TagType.Text,
                text: 'Detective',
                leftIcon: <IconWithEmoji className="leftIcon" emoji={'🕵️‍♂️'} />,
                rightIcon: <IconWithEmoji className="rightIcon" emoji={'🔥'} />
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
                type: TagType.Text,
                text: 'Horror',
                size: TagSize.s
            }
        },
        {
            id: '124',
            tagData: {
                type: TagType.Text,
                text: 'Sci-Fi',
                size: TagSize.s
            }
        },
        {
            id: '125',
            tagData: {
                type: TagType.Text,
                text: 'Detective',
                size: TagSize.s
            }
        }
    ]
};

export const TextSmallTagsWithIcons = WhiteTemlate.bind({});

TextSmallTagsWithIcons.args = {
    tags: [
        {
            id: '123',
            tagData: {
                type: TagType.Text,
                text: 'Horror',
                size: TagSize.s,
                leftIcon: <IconWithEmoji className="leftIcon" emoji={'😱'} />
            }
        },
        {
            id: '124',
            tagData: {
                type: TagType.Text,
                text: 'Sci-Fi',
                size: TagSize.s,
                rightIcon: <IconWithEmoji className="rightIcon" emoji={'👽'} />
            }
        },
        {
            id: '125',
            tagData: {
                type: TagType.Text,
                text: 'Detective',
                size: TagSize.s,
                leftIcon: <IconWithEmoji className="leftIcon" emoji={'🕵️‍♂️'} />,
                rightIcon: <IconWithEmoji className="rightIcon" emoji={'🔥'} />
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
                type: TagType.Text,
                text: 'Horror',
                size: TagSize.m,
                isDark: true
            }
        },
        {
            id: '124',
            tagData: {
                type: TagType.Text,
                text: 'Sci-Fi',
                size: TagSize.m,
                isDark: true
            }
        },
        {
            id: '125',
            tagData: {
                type: TagType.Text,
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
                type: TagType.Text,
                text: 'Horror',
                size: TagSize.s,
                isDark: true
            }
        },
        {
            id: '124',
            tagData: {
                type: TagType.Text,
                text: 'Sci-Fi',
                size: TagSize.s,
                isDark: true
            }
        },
        {
            id: '125',
            tagData: {
                type: TagType.Text,
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
                type: TagType.Link,
                text: 'Horror',
                link: 'http://google.com'
            }
        },
        {
            id: '124',
            tagData: {
                type: TagType.Link,
                text: 'Sci-Fi',
                link: 'http://google.com'
            }
        },
        {
            id: '125',
            tagData: {
                type: TagType.Link,
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
                type: TagType.Link,
                text: 'Horror',
                link: 'http://google.com',
                isDark: true
            }
        },
        {
            id: '124',
            tagData: {
                type: TagType.Link,
                text: 'Sci-Fi',
                link: 'http://google.com',
                isDark: true
            }
        },
        {
            id: '125',
            tagData: {
                type: TagType.Link,
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
                type: TagType.Selectable,
                text: 'Horror'
            }
        },
        {
            id: '124',
            tagData: {
                type: TagType.Selectable,
                text: 'Sci-Fi'
            }
        },
        {
            id: '125',
            tagData: {
                type: TagType.Selectable,
                text: 'Detective'
            }
        }
    ]
};

const ControllableSelectedTagsTemplate: Story<ITagGroupProps> = () => {
    const [tags, setTags] = React.useState<ITag[]>([
        {
            id: '123',
            tagData: {
                type: TagType.Selectable,
                text: 'Horror',
                isSelected: false
            }
        },
        {
            id: '124',
            tagData: {
                type: TagType.Selectable,
                text: 'Sci-Fi',
                isSelected: false
            }
        },
        {
            id: '125',
            tagData: {
                type: TagType.Selectable,
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
            <TagGroup tags={tags} onSelectTag={tagSelectHandler}>
                Radio label
            </TagGroup>
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
                type: TagType.Selectable,
                text: 'Horror',
                isDisabled: true
            }
        },
        {
            id: '124',
            tagData: {
                type: TagType.Selectable,
                text: 'Sci-Fi'
            }
        },
        {
            id: '125',
            tagData: {
                type: TagType.Selectable,
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
                type: TagType.Selectable,
                text: 'Horror',
                size: TagSize.s
            }
        },
        {
            id: '124',
            tagData: {
                type: TagType.Selectable,
                text: 'Sci-Fi',
                size: TagSize.s
            }
        },
        {
            id: '125',
            tagData: {
                type: TagType.Selectable,
                text: 'Detective',
                size: TagSize.s
            }
        }
    ]
};

export const RemovableTags = WhiteTemlate.bind({});

RemovableTags.args = {
    tags: [
        {
            id: '123',
            tagData: {
                type: TagType.Removable,
                text: 'Horror'
            }
        },
        {
            id: '124',
            tagData: {
                type: TagType.Removable,
                text: 'Sci-Fi'
            }
        },
        {
            id: '125',
            tagData: {
                type: TagType.Removable,
                text: 'Detective'
            }
        }
    ]
};

export const SmallRemovableTags = WhiteTemlate.bind({});

SmallRemovableTags.args = {
    tags: [
        {
            id: '123',
            tagData: {
                type: TagType.Removable,
                text: 'Horror',
                size: TagSize.s
            }
        },
        {
            id: '124',
            tagData: {
                type: TagType.Removable,
                text: 'Sci-Fi',
                size: TagSize.s
            }
        },
        {
            id: '125',
            tagData: {
                type: TagType.Removable,
                text: 'Detective',
                size: TagSize.s
            }
        }
    ]
};

export const DarkRemovableTags = DarkTemplate.bind({});

DarkRemovableTags.args = {
    tags: [
        {
            id: '123',
            tagData: {
                type: TagType.Removable,
                text: 'Horror',
                isDark: true
            }
        },
        {
            id: '124',
            tagData: {
                type: TagType.Removable,
                text: 'Sci-Fi',
                isDark: true
            }
        },
        {
            id: '125',
            tagData: {
                type: TagType.Removable,
                text: 'Detective',
                isDark: true
            }
        }
    ]
};

export const SmallDarkRemovableTags = DarkTemplate.bind({});

SmallDarkRemovableTags.args = {
    tags: [
        {
            id: '123',
            tagData: {
                type: TagType.Removable,
                text: 'Horror',
                isDark: true,
                size: TagSize.s
            }
        },
        {
            id: '124',
            tagData: {
                type: TagType.Removable,
                text: 'Sci-Fi',
                isDark: true,
                size: TagSize.s
            }
        },
        {
            id: '125',
            tagData: {
                type: TagType.Removable,
                text: 'Detective',
                isDark: true,
                size: TagSize.s
            }
        }
    ]
};

export default {
    title: 'TagGroup',
    component: TagGroup
};
