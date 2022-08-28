import React, { ReactElement } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ListBox from './ListBox';
import { ListBoxItem } from './index';
import { IListBoxProps } from './ListBox.types';
import SVGIcon from '../../../.storybook/assets/SVGIcon';

const setup = (options: IListBoxProps, children?: ReactElement): ReactElement => (
    <ListBox {...options}>{children}</ListBox>
);

const TestListBoxItems = (): ReactElement => (
    <>
        <ListBoxItem id="test1" isDisabled />
        <ListBoxItem id="test2" />
        <ListBoxItem id="test3" />
    </>
);

const TestListBoxItemsWithIcons = (): ReactElement => (
    <>
        <ListBoxItem id="test1" icon={<SVGIcon />} />
        <ListBoxItem id="test2" icon={<SVGIcon />} />
        <ListBoxItem id="test3" icon={<SVGIcon />} />
    </>
);

describe('components/ListBox', () => {
    test('aria labels defined', () => {
        render(setup({ isOpened: false }, <TestListBoxItems />));

        const listBoxContainer = screen.getByLabelText('listbox');
        const listBoxItems = screen.getAllByLabelText('listbox item');

        expect(listBoxContainer).toBeInTheDocument();
        expect(listBoxItems.length).toBe(3);
    });

    test('item properties works correctly', () => {
        render(setup({ defaultSelected: 'test2', isOpened: false }, <TestListBoxItems />));

        const listBoxItems = screen.getAllByLabelText('listbox item');

        expect(listBoxItems.length).toBe(3);

        expect(listBoxItems[0]).toHaveClass('is-disabled');
        expect(listBoxItems[1]).toHaveClass('is-checked');
    });

    test('cannot check disabled item', () => {
        render(setup({ isOpened: false }, <TestListBoxItems />));

        const listBoxButtonItems = screen.getAllByLabelText('listbox item button');
        const listBoxItems = screen.getAllByLabelText('listbox item');

        expect(listBoxItems.length).toBe(3);

        expect(listBoxItems[0]).toHaveClass('is-disabled');
        expect(listBoxItems[0]).not.toHaveClass('is-checked');

        userEvent.click(listBoxButtonItems[0]);

        expect(listBoxItems[0]).not.toHaveClass('is-checked');
    });

    test('check item works correctly', () => {
        render(setup({ isOpened: false }, <TestListBoxItems />));

        const listBoxButtonItems = screen.getAllByLabelText('listbox item button');
        const listBoxItems = screen.getAllByLabelText('listbox item');

        expect(listBoxItems[2]).not.toHaveClass('is-checked');

        userEvent.click(listBoxButtonItems[2]);

        expect(listBoxItems[2]).toHaveClass('is-checked');
    });

    test('check multiple items work correctly', () => {
        render(setup({ withMultiSelection: true, isOpened: false }, <TestListBoxItems />));

        const listBoxButtonItems = screen.getAllByLabelText('listbox item button');
        const listBoxItems = screen.getAllByLabelText('listbox item');

        expect(listBoxItems[1]).not.toHaveClass('is-checked');
        expect(listBoxItems[2]).not.toHaveClass('is-checked');

        userEvent.click(listBoxButtonItems[1]);
        userEvent.click(listBoxButtonItems[2]);

        expect(listBoxItems[2]).toHaveClass('is-checked');
        expect(listBoxItems[1]).toHaveClass('is-checked');
    });

    test('isOpened works', () => {
        const { rerender } = render(setup({ isOpened: false }, <TestListBoxItems />));

        const listBoxContainer = screen.getByLabelText('listbox');

        expect(listBoxContainer).not.toHaveClass('is-open');

        rerender(setup({ isOpened: true }, <TestListBoxItems />));

        expect(listBoxContainer).toHaveClass('is-open');
    });

    test('with left opening', () => {
        render(setup({ leftOpening: true, isOpened: true }, <TestListBoxItems />));

        const listBoxContainer = screen.getByLabelText('listbox');
        expect(listBoxContainer).toHaveClass('mc-listbox--left');
    });

    test('with icons', () => {
        render(setup({ isOpened: true }, <TestListBoxItemsWithIcons />));

        const icons = document.querySelectorAll('.mc-listbox__icon');
        expect(icons.length).toBe(3);
    });

    test('onChange prop triggers', () => {
        const onChangeTest = jest.fn(() => {});
        render(setup({ isOpened: true, onChange: onChangeTest }, <TestListBoxItems />));

        const listBoxButtonItems = screen.getAllByLabelText('listbox item button');
        userEvent.click(listBoxButtonItems[1]);

        expect(onChangeTest).toBeCalled();
    });
});
