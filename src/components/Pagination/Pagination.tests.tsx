import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
    PaginationContainer,
    PaginationSelect,
    PaginationNextPageButton,
    PaginationPreviousPageButton
} from './partials';
import { IPaginationContextProps } from './Pagination.types';

const setup = (props: IPaginationContextProps): RenderResult => {
    const options = Array.from({ length: props.pagesTotal }).map((_: unknown, index: number) => ({
        value: index + 1,
        label: `Page ${index + 1} of ${props.pagesTotal}`
    }));

    return render(
        <PaginationContainer {...props} options={options}>
            <PaginationPreviousPageButton aria-label="Previous page" />
            <PaginationSelect />
            <PaginationNextPageButton aria-label="Next page" />
        </PaginationContainer>
    );
};

describe('components/Pagination', () => {
    test('renders correctly', () => {
        setup({ currentPage: 5, pagesTotal: 10 });

        expect(screen.getByLabelText('Previous page')).toBeEnabled();
        expect(screen.getByLabelText('Next page')).toBeEnabled();
        expect(screen.getByRole('combobox')).toHaveValue('5');
    });

    test('locks previous page button if current page is first', () => {
        setup({ currentPage: 1, pagesTotal: 10 });

        expect(screen.getByLabelText('Previous page')).toBeDisabled();
    });

    test('locks next page button if current page is last', () => {
        setup({ currentPage: 10, pagesTotal: 10 });

        expect(screen.getByLabelText('Next page')).toBeDisabled();
    });

    test('renders correctly in disabled state', () => {
        setup({ currentPage: 1, pagesTotal: 10, isDisabled: true });

        expect(screen.getByLabelText('Previous page')).toBeDisabled();
        expect(screen.getByLabelText('Next page')).toBeDisabled();
        expect(screen.getByRole('combobox')).toBeDisabled();
    });

    test('renders correctly without page selector', () => {
        setup({ currentPage: 1, pagesTotal: 10, isCompact: true });

        expect(screen.queryByRole('combobox')).not.toBeInTheDocument();
    });

    test('calls onChange and onPrevious callbacks', async () => {
        const onChange = jest.fn();
        const onPrevious = jest.fn();

        setup({ currentPage: 5, pagesTotal: 10, onChange, onPrevious });

        await userEvent.click(screen.getByLabelText('Previous page'));

        expect(onChange).toBeCalledWith(4);
        expect(onPrevious).toBeCalledTimes(1);
    });

    test('calls onChange and onNext callbacks', async () => {
        const onChange = jest.fn();
        const onNext = jest.fn();

        setup({ currentPage: 5, pagesTotal: 10, onChange, onNext });

        await userEvent.click(screen.getByLabelText('Next page'));

        expect(onChange).toBeCalledWith(6);
        expect(onNext).toBeCalledTimes(1);
    });

    test('handles page selector', async () => {
        const onChange = jest.fn();

        setup({ currentPage: 1, pagesTotal: 10, onChange });

        await userEvent.selectOptions(screen.getByRole('combobox'), '6');

        expect(onChange).toBeCalledWith(6);
    });
});
