import React from 'react';
import { Story } from '@storybook/react';
import Tooltip from './Tooltip';
import { ITooltipProps } from './Tooltip.types';

// Top

const TooltipTemplateTop: Story<ITooltipProps> = args => <Tooltip {...args}>Top</Tooltip>;

export const Top = TooltipTemplateTop.bind({});

Top.args = {
    appearance: 'top',
    tooltipText: 'Tooltip text'
};

// Right

const TooltipTemplateRight: Story<ITooltipProps> = args => <Tooltip {...args}>Right</Tooltip>;

export const Right = TooltipTemplateRight.bind({});

Right.args = {
    appearance: 'right',
    tooltipText: 'Tooltip text'
};

// Bottom

const TooltipTemplateBottom: Story<ITooltipProps> = args => <Tooltip {...args}>Bottom</Tooltip>;

export const Bottom = TooltipTemplateBottom.bind({});

Bottom.args = {
    appearance: 'bottom',
    tooltipText: 'Tooltip text'
};

// Left

const TooltipTemplateLeft: Story<ITooltipProps> = args => <Tooltip {...args}>Left</Tooltip>;

export const Left = TooltipTemplateLeft.bind({});

Left.args = {
    appearance: 'left',
    tooltipText: 'Tooltip text'
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
    appearance: 'top',
    tooltipText: 'Tooltip text'
};

export default {
    title: 'Tooltip',
    component: Tooltip,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        appearance: {
            control: {
                type: 'select'
            }
        },
        tooltipText: {
            control: {
                type: 'text'
            }
        }
    }
};
