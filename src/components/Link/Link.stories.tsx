import React from 'react';
import { Story } from '@storybook/react';
import { LinkLeftIcon, LinkRightIcon } from './partials';
import { ILinkProps } from './Link.types';
import Link from './Link';

const IconChevronLeft = (): JSX.Element => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
        <path d="M10.5 14a1 1 0 01-.71-.29l-5-5a1 1 0 010-1.42l5-5a1 1 0 111.42 1.42L6.91 8l4.3 4.29a1 1 0 010 1.42 1 1 0 01-.71.29z" />
    </svg>
);

const IconChevronRight = (): JSX.Element => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
        <path d="M5.5 14a1 1 0 01-.71-.29 1 1 0 010-1.42L9.09 8l-4.3-4.29a1 1 0 011.42-1.42l5 5a1 1 0 010 1.42l-5 5a1 1 0 01-.71.29z" />
    </svg>
);

const ControlsTemplate: Story<ILinkProps> = args => <Link {...args}>Lorem ipsum</Link>;

export const Controls = ControlsTemplate.bind({});

const WithLeftIconTemplate: Story<ILinkProps> = args => (
    <Link {...args}>
        <LinkLeftIcon>
            <IconChevronLeft />
        </LinkLeftIcon>
        Lorem ipsum
    </Link>
);

export const WithLeftIcon = WithLeftIconTemplate.bind({});

const WithRightIconTemplate: Story<ILinkProps> = args => (
    <Link {...args}>
        Lorem ipsum
        <LinkRightIcon>
            <IconChevronRight />
        </LinkRightIcon>
    </Link>
);

export const WithRightIcon = WithRightIconTemplate.bind({});

const WithIconsTemplate: Story<ILinkProps> = args => (
    <Link {...args}>
        <LinkLeftIcon>
            <IconChevronLeft />
        </LinkLeftIcon>
        Lorem ipsum
        <LinkRightIcon>
            <IconChevronRight />
        </LinkRightIcon>
    </Link>
);

export const WithIcons = WithIconsTemplate.bind({});

export const argTypes = {
    theme: {
        control: {
            type: 'select'
        }
    },
    size: {
        control: {
            type: 'select'
        }
    }
};
