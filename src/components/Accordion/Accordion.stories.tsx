import React from 'react';
import { Story } from '@storybook/react';
import CheckBox from '../CheckBox';
import Text from '../Text';
import Toggle from '../Toggle';
import { AccordionHeader, AccordionContent, AccordionHeading } from './partials';
import Accordion from './Accordion';
import { IAccordionProps } from './Accordion.types';

export const Template: Story<IAccordionProps> = args => (
    <Accordion {...args}>
        <AccordionHeader>
            <AccordionHeading>Lorem ipsum dolor sit amet</AccordionHeading>
        </AccordionHeader>
        <AccordionContent>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum
            </Text>
        </AccordionContent>
    </Accordion>
);

export const Controls = Template.bind({});

Controls.args = {
    size: 'm',
    isDisabled: false
};

export const WithCheckBoxTemplate: Story<IAccordionProps> = args => (
    <Accordion {...args}>
        <AccordionHeader>
            <CheckBox />
            <AccordionHeading>Lorem ipsum dolor sit amet</AccordionHeading>
        </AccordionHeader>
        <AccordionContent>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum
            </Text>
        </AccordionContent>
    </Accordion>
);

export const WithCheckBox = WithCheckBoxTemplate.bind({});

WithCheckBox.args = {
    size: 'm',
    isDisabled: false
};

export const WithToggleTemplate: Story<IAccordionProps> = args => (
    <Accordion {...args}>
        <AccordionHeader>
            <Toggle size={args.size} isDisabled={args.isDisabled} />
            <AccordionHeading>Lorem ipsum dolor sit amet</AccordionHeading>
        </AccordionHeader>
        <AccordionContent>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum
            </Text>
        </AccordionContent>
    </Accordion>
);

export const WithToggle = WithToggleTemplate.bind({});

WithToggle.args = {
    size: 'm',
    isDisabled: false
};

export const argTypes = {
    size: {
        control: {
            type: 'select'
        }
    }
};
