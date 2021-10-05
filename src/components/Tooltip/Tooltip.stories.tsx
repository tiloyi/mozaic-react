import React from 'react';
import { Story } from '@storybook/react';
import Tooltip from './Tooltip';
import { ITooltipProps, TooltipPlacement } from './Tooltip.types';

// Top

const TooltipTemplateTop: Story<ITooltipProps> = args => <Tooltip {...args}>Top</Tooltip>;

export const Top = TooltipTemplateTop.bind({});

Top.args = {
    placement: TooltipPlacement.top,
    text: 'Tooltip\ntext'
};

// Right

const TooltipTemplateRight: Story<ITooltipProps> = args => <Tooltip {...args}>Right</Tooltip>;

export const Right = TooltipTemplateRight.bind({});

Right.args = {
    placement: TooltipPlacement.right,
    text: 'Tooltip text'
};

// Bottom

const TooltipTemplateBottom: Story<ITooltipProps> = args => <Tooltip {...args}>Bottom</Tooltip>;

export const Bottom = TooltipTemplateBottom.bind({});

Bottom.args = {
    placement: TooltipPlacement.bottom,
    text: 'Tooltip text'
};

// Left

const TooltipTemplateLeft: Story<ITooltipProps> = args => <Tooltip {...args}>Left</Tooltip>;

export const Left = TooltipTemplateLeft.bind({});

Left.args = {
    placement: TooltipPlacement.left,
    text: 'Tooltip text'
};

// With Icon

const Icon = () => (
    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32">
        <path d="M16,29A13,13,0,1,1,29,16,13,13,0,0,1,16,29ZM16,5A11,11,0,1,0,27,16,11,11,0,0,0,16,5Z" />
        <path d="M16,21.7a1,1,0,0,1-1-1V14.87a1,1,0,1,1,2,0V20.7A1,1,0,0,1,16,21.7Z" />
        <circle cx="16" cy="11.3" r="1" />
    </svg>
);

const TooltipTemplateWithIcon: Story<ITooltipProps> = args => (
    <Tooltip {...args}>
        <Icon />
    </Tooltip>
);

export const WithIcon = TooltipTemplateWithIcon.bind({});

WithIcon.args = {
    placement: TooltipPlacement.top,
    text: 'Tooltip text'
};

// With custom content

const TooltipTemplateWithCustomContent: Story<ITooltipProps> = args => <Tooltip {...args}>Button component</Tooltip>;

export const WithCustomContent = TooltipTemplateWithCustomContent.bind({});

WithCustomContent.args = {
    placement: TooltipPlacement.top,
    text: 'Tooltip text',
    content: <button>Button</button>
};

export default {
    title: 'Tooltip',
    component: Tooltip,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        placement: {
            control: {
                type: 'select'
            }
        },
        text: {
            control: {
                type: 'text'
            }
        }
    }
};
