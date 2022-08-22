import React from 'react';
import { Story } from '@storybook/react';
import Accordion from './Accordion';
import { IAccordionProps } from './Accordion.types';

export const Template: Story<IAccordionProps> = args => <Accordion {...args}>Accordion size {args.size}</Accordion>;

export const Controls = Template.bind({});

Controls.args = {
    title: 'Accordion size M',
    size: 'm'
};

export const argTypes = {
    size: {
        control: {
            type: 'select'
        }
    },
    title: {
        control: { type: 'text' }
    }
};

const Icon = (): JSX.Element => (
    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32">
        <path d="M16,29A13,13,0,1,1,29,16,13,13,0,0,1,16,29ZM16,5A11,11,0,1,0,27,16,11,11,0,0,0,16,5Z" />
        <path d="M16,21.7a1,1,0,0,1-1-1V14.87a1,1,0,1,1,2,0V20.7A1,1,0,0,1,16,21.7Z" />
        <circle cx="16" cy="11.3" r="1" />
    </svg>
);

export const TemplateWithIcon: Story<IAccordionProps> = args => (
    <Accordion {...args} icon={<Icon />}>
        Accordion size {args.size}
    </Accordion>
);

export const ControlsWithIcon = TemplateWithIcon.bind({});

ControlsWithIcon.args = {
    title: 'Accordion size M',
    size: 'm'
};
