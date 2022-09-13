import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ListBox from './ListBox';
import { ListBoxItem } from './partials';

describe('components/ListBox', () => {
    test('renders item', () => {
        render(
            <ListBox>
                <ListBoxItem>List box item</ListBoxItem>
            </ListBox>
        );

        expect(screen.getByRole('option', { name: 'List box item' })).toBeInTheDocument();
    });

    test('calls onClick', async () => {
        const onClick = jest.fn();

        render(
            <ListBox onClick={onClick}>
                <ListBoxItem value="item1">List box item #1</ListBoxItem>
                <ListBoxItem value="item2">List box item #2</ListBoxItem>
            </ListBox>
        );

        await userEvent.click(screen.getByRole('option', { name: 'List box item #1' }));

        expect(onClick).toBeCalledWith('item1');
    });

    test('renders disabled item', () => {
        render(
            <ListBox>
                <ListBoxItem isDisabled>List box item #1</ListBoxItem>
                <ListBoxItem>List box item #2</ListBoxItem>
                <ListBoxItem>List box item #3</ListBoxItem>
            </ListBox>
        );

        expect(screen.getByRole('option', { name: 'List box item #1' })).toHaveClass('is-disabled');
    });

    test('renders item with icon', () => {
        render(
            <ListBox>
                <ListBoxItem icon={<div aria-label="icon" />}>List box item</ListBoxItem>
            </ListBox>
        );

        expect(screen.getByLabelText('icon')).toBeInTheDocument();
    });

    test('renders checked item in single mode', () => {
        render(
            <ListBox value="item" mode="single">
                <ListBoxItem value="item">List box item</ListBoxItem>
            </ListBox>
        );

        expect(screen.getByRole('option', { name: 'List box item' })).toHaveClass('is-checked');
    });

    test('renders checked item in multi mode', () => {
        render(
            <ListBox values={['item1', 'item3']} mode="multi">
                <ListBoxItem value="item1">List box item #1</ListBoxItem>
                <ListBoxItem value="item2">List box item #2</ListBoxItem>
                <ListBoxItem value="item3">List box item #3</ListBoxItem>
            </ListBox>
        );

        expect(screen.getByRole('checkbox', { name: 'List box item #1' })).toBeChecked();
        expect(screen.getByRole('checkbox', { name: 'List box item #3' })).toBeChecked();
    });
});
