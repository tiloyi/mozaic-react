import React, { useCallback, useState } from 'react';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ReactComponent as IconBlink } from '@mozaic-ds/icons/svg/Navigation_Display_Blink_24px.svg';
import logo from './assets/logo.png';
import { ListBoxItem } from './partials';
import useListBoxValues from './useListBoxValues';
import ListBox from './ListBox';
import { TListBoxValue } from './ListBox.types';
import './ListBox.stories.scss';

const ListTemplate: Story = () => (
    <ListBox onClick={action('Click')}>
        <ListBoxItem>List box item #1</ListBoxItem>
        <ListBoxItem>List box item #2</ListBoxItem>
        <ListBoxItem>List box item #3</ListBoxItem>
        <ListBoxItem>List box item #4</ListBoxItem>
        <ListBoxItem>List box item #5</ListBoxItem>
        <ListBoxItem>List box item #6</ListBoxItem>
        <ListBoxItem>List box item #7</ListBoxItem>
        <ListBoxItem>List box item #8</ListBoxItem>
        <ListBoxItem>List box item #9</ListBoxItem>
    </ListBox>
);

export const List = ListTemplate.bind({});

const SingleSelectedItemTemplate: Story = () => {
    const icon = <IconBlink width="24px" height="24px" />;
    const [value, setValue] = useState<TListBoxValue | undefined>('item1');

    const handleClick = useCallback((nextValue?: TListBoxValue) => setValue(nextValue), []);

    return (
        <ListBox value={value} mode="single" onClick={handleClick}>
            <ListBoxItem icon={icon} value="item1">
                List box item #1
            </ListBoxItem>
            <ListBoxItem icon={icon} value="item2">
                List box item #2
            </ListBoxItem>
            <ListBoxItem icon={icon} value="item3">
                List box item #3
            </ListBoxItem>
            <ListBoxItem icon={icon} value="item4">
                List box item #4
            </ListBoxItem>
            <ListBoxItem icon={icon} value="item5">
                List box item #5
            </ListBoxItem>
            <ListBoxItem icon={icon} value="item6">
                List box item #6
            </ListBoxItem>
            <ListBoxItem icon={icon} value="item7">
                List box item #7
            </ListBoxItem>
            <ListBoxItem icon={icon} value="item8">
                List box item #8
            </ListBoxItem>
            <ListBoxItem icon={icon} value="item9">
                List box item #9
            </ListBoxItem>
        </ListBox>
    );
};

export const SingleSelectedItem = SingleSelectedItemTemplate.bind({});

const MultipleSelectedItemsTemplate: Story = () => {
    const icon = <IconBlink width="24px" height="24px" />;
    const [values, { add, remove }] = useListBoxValues();

    const handleClick = useCallback(
        (value?: TListBoxValue) => {
            if (value) {
                if (values.includes(value)) {
                    remove(value);
                } else {
                    add(value);
                }
            }
        },
        [add, remove, values]
    );

    return (
        <ListBox values={values} mode="multi" onClick={handleClick}>
            <ListBoxItem icon={icon} value="item1">
                List box item #1
            </ListBoxItem>
            <ListBoxItem icon={icon} value="item2">
                List box item #2
            </ListBoxItem>
            <ListBoxItem icon={icon} value="item3">
                List box item #3
            </ListBoxItem>
            <ListBoxItem icon={icon} value="item4">
                List box item #4
            </ListBoxItem>
            <ListBoxItem icon={icon} value="item5">
                List box item #5
            </ListBoxItem>
            <ListBoxItem icon={icon} value="item6">
                List box item #6
            </ListBoxItem>
            <ListBoxItem icon={icon} value="item7">
                List box item #7
            </ListBoxItem>
            <ListBoxItem icon={icon} value="item8">
                List box item #8
            </ListBoxItem>
            <ListBoxItem icon={icon} value="item9">
                List box item #9
            </ListBoxItem>
        </ListBox>
    );
};

export const MultipleSelectedItems = MultipleSelectedItemsTemplate.bind({});

const DisabledItemsTemplate: Story = () => (
    <ListBox>
        <ListBoxItem>List box item #1</ListBoxItem>
        <ListBoxItem isDisabled>List box item #2</ListBoxItem>
        <ListBoxItem>List box item #3</ListBoxItem>
        <ListBoxItem isDisabled>List box item #4</ListBoxItem>
        <ListBoxItem>List box item #5</ListBoxItem>
        <ListBoxItem isDisabled>List box item #6</ListBoxItem>
        <ListBoxItem>List box item #7</ListBoxItem>
        <ListBoxItem isDisabled>List box item #8</ListBoxItem>
        <ListBoxItem>List box item #9</ListBoxItem>
    </ListBox>
);

export const DisabledItems = DisabledItemsTemplate.bind({});

const ItemsWithIconTemplate: Story = () => {
    const icon = <IconBlink width="24px" height="24px" />;

    return (
        <ListBox>
            <ListBoxItem icon={icon}>List box item #1</ListBoxItem>
            <ListBoxItem icon={icon}>List box item #2</ListBoxItem>
            <ListBoxItem icon={icon}>List box item #3</ListBoxItem>
            <ListBoxItem icon={icon}>List box item #4</ListBoxItem>
            <ListBoxItem icon={icon}>List box item #5</ListBoxItem>
            <ListBoxItem icon={icon}>List box item #6</ListBoxItem>
            <ListBoxItem icon={icon}>List box item #7</ListBoxItem>
            <ListBoxItem icon={icon}>List box item #8</ListBoxItem>
            <ListBoxItem icon={icon}>List box item #9</ListBoxItem>
        </ListBox>
    );
};

export const ItemsWithIcon = ItemsWithIconTemplate.bind({});

const ItemsWithEmojiTemplate: Story = () => {
    const emoji = (
        <span role="img" aria-label="emoji">
            😜
        </span>
    );

    return (
        <ListBox>
            <ListBoxItem icon={emoji}>List box item #1</ListBoxItem>
            <ListBoxItem icon={emoji}>List box item #2</ListBoxItem>
            <ListBoxItem icon={emoji}>List box item #3</ListBoxItem>
            <ListBoxItem icon={emoji}>List box item #4</ListBoxItem>
            <ListBoxItem icon={emoji}>List box item #5</ListBoxItem>
            <ListBoxItem icon={emoji}>List box item #6</ListBoxItem>
            <ListBoxItem icon={emoji}>List box item #7</ListBoxItem>
            <ListBoxItem icon={emoji}>List box item #8</ListBoxItem>
            <ListBoxItem icon={emoji}>List box item #9</ListBoxItem>
        </ListBox>
    );
};

export const ItemsWithEmoji = ItemsWithEmojiTemplate.bind({});

const ItemsWithImageTemplate: Story = () => {
    const image = <img src={logo as string} className="list-box-image" alt="Mozaic" />;

    return (
        <ListBox>
            <ListBoxItem icon={image}>List box item #1</ListBoxItem>
            <ListBoxItem icon={image}>List box item #2</ListBoxItem>
            <ListBoxItem icon={image}>List box item #3</ListBoxItem>
            <ListBoxItem icon={image}>List box item #4</ListBoxItem>
            <ListBoxItem icon={image}>List box item #5</ListBoxItem>
            <ListBoxItem icon={image}>List box item #6</ListBoxItem>
            <ListBoxItem icon={image}>List box item #7</ListBoxItem>
            <ListBoxItem icon={image}>List box item #8</ListBoxItem>
            <ListBoxItem icon={image}>List box item #9</ListBoxItem>
        </ListBox>
    );
};

export const ItemsWithImage = ItemsWithImageTemplate.bind({});
