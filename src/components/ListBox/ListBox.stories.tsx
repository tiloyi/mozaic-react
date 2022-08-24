import React, { useState } from 'react';
import { Story } from '@storybook/react';
import ListBox, { ListBoxItem } from './index';
import { IListBoxProps } from './ListBox.types';

import './ListBox.stories.scss';
import SVGIcon from '../../../.storybook/assets/SVGIcon';

const Template: Story<IListBoxProps> = args => (
    <ListBox {...args}>
        <ListBoxItem id="option1">Option #1</ListBoxItem>
        <ListBoxItem id="option2">Option #2</ListBoxItem>
        <ListBoxItem id="option3">Option #3</ListBoxItem>
        <ListBoxItem id="option4">Option #4</ListBoxItem>
    </ListBox>
);

export const WithMonoSelection = Template.bind({});

WithMonoSelection.args = {
    isOpened: true
};

export const argTypes = {
    theme: {
        control: {
            type: 'select'
        }
    }
};

export const WithMultiSelectionTemplate: Story<IListBoxProps> = args => (
    <ListBox {...args}>
        <ListBoxItem id="option1">Option #1</ListBoxItem>
        <ListBoxItem id="option2">Option #2</ListBoxItem>
        <ListBoxItem id="option3">Option #3</ListBoxItem>
        <ListBoxItem id="option4">Option #4</ListBoxItem>
    </ListBox>
);

export const WithMultiSelection = WithMultiSelectionTemplate.bind({});

WithMultiSelection.args = {
    isOpened: true,
    withMultiSelection: true
};

export const LeftOpeningTemplate: Story<IListBoxProps> = args => {
    const [isOpened, setOpened] = useState(false);

    return (
        <div className="listBoxLeftOpeningContainer">
            <button
                className="listBoxLeftOpeningButton"
                type="button"
                onClick={() => setOpened(prevState => !prevState)}
            >
                Open ListBox
            </button>
            <ListBox {...args} isOpened={isOpened} leftOpening>
                <ListBoxItem id="option1">Option #1</ListBoxItem>
                <ListBoxItem id="option2">Option #2</ListBoxItem>
                <ListBoxItem id="option3">Option #3</ListBoxItem>
                <ListBoxItem id="option4">Option #4</ListBoxItem>
            </ListBox>
        </div>
    );
};

export const LeftOpening = LeftOpeningTemplate.bind({});

LeftOpening.args = {
    isOpened: false
};

export const DisabledTemplate: Story<IListBoxProps> = args => (
    <ListBox {...args}>
        <ListBoxItem id="option1" isDisabled>
            Option #1
        </ListBoxItem>
        <ListBoxItem id="option2" isDisabled>
            Option #2
        </ListBoxItem>
        <ListBoxItem id="option3">Option #3</ListBoxItem>
        <ListBoxItem id="option4" isDisabled>
            Option #4
        </ListBoxItem>
    </ListBox>
);

export const Disabled = DisabledTemplate.bind({});

Disabled.args = {
    isOpened: true
};

export const WithDefaultSelectedTemplate: Story<IListBoxProps> = args => (
    <ListBox {...args}>
        <ListBoxItem id="option1">Option #1</ListBoxItem>
        <ListBoxItem id="option2">Option #2</ListBoxItem>
        <ListBoxItem id="option3">Option #3</ListBoxItem>
        <ListBoxItem id="option4">Option #4</ListBoxItem>
    </ListBox>
);

export const WithDefaultSelected = WithDefaultSelectedTemplate.bind({});

WithDefaultSelected.args = {
    defaultSelected: 'option1',
    isOpened: true
};

export const WithIconTemplate: Story<IListBoxProps> = args => (
    <ListBox {...args}>
        <ListBoxItem id="option1" icon={<SVGIcon />}>
            Option #1
        </ListBoxItem>
        <ListBoxItem id="option2" icon={<SVGIcon />}>
            Option #2
        </ListBoxItem>
        <ListBoxItem id="option3" icon={<SVGIcon />}>
            Option #3
        </ListBoxItem>
        <ListBoxItem id="option4" icon={<SVGIcon />}>
            Option #4
        </ListBoxItem>
    </ListBox>
);

export const WithIcon = WithIconTemplate.bind({});

WithIcon.args = {
    isOpened: true
};
