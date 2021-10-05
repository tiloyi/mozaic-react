import React from 'react';
import { Story } from '@storybook/react';
import Tags from './Tags';
import { ITagsProps, TagSize } from './Tags.types';
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
            tag: {
                type: 'text',
                text: 'Horror'
            }
        },
        {
            id: '124',
            tag: {
                type: 'text',
                text: 'Sci-Fi'
            }
        },
        {
            id: '125',
            tag: {
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
            tag: {
                type: 'text',
                text: 'Horror',
                size: TagSize.s
            }
        },
        {
            id: '124',
            tag: {
                type: 'text',
                text: 'Sci-Fi',
                size: TagSize.s
            }
        },
        {
            id: '125',
            tag: {
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
            tag: {
                type: 'text',
                text: 'Horror',
                size: TagSize.m,
                isDark: true
            }
        },
        {
            id: '124',
            tag: {
                type: 'text',
                text: 'Sci-Fi',
                size: TagSize.m,
                isDark: true
            }
        },
        {
            id: '125',
            tag: {
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
            tag: {
                type: 'text',
                text: 'Horror',
                size: TagSize.s,
                isDark: true
            }
        },
        {
            id: '124',
            tag: {
                type: 'text',
                text: 'Sci-Fi',
                size: TagSize.s,
                isDark: true
            }
        },
        {
            id: '125',
            tag: {
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
            tag: {
                type: 'link',
                text: 'Horror',
                link: 'http://google.com'
            }
        },
        {
            id: '124',
            tag: {
                type: 'link',
                text: 'Sci-Fi',
                link: 'http://google.com'
            }
        },
        {
            id: '125',
            tag: {
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
            tag: {
                type: 'link',
                text: 'Horror',
                link: 'http://google.com',
                isDark: true
            }
        },
        {
            id: '124',
            tag: {
                type: 'link',
                text: 'Sci-Fi',
                link: 'http://google.com',
                isDark: true
            }
        },
        {
            id: '125',
            tag: {
                type: 'link',
                text: 'Detective',
                link: 'http://google.com',
                isDark: true
            }
        }
    ]
};

export default {
    title: 'Tags',
    component: Tags
};
