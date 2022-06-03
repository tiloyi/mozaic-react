import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import { languages, food } from './Select.fixtures';
import { ISelectProps } from './Select.types';
import Select from './Select';

const setup = (props: Partial<ISelectProps>): RenderResult => render(<Select {...props} options={languages} />);

describe('components/Select', () => {
    test('renders correctly with list of options', () => {
        const [language] = languages;

        setup({ defaultValue: language.value });

        expect(screen.getByRole('combobox')).toBeInTheDocument();

        languages.forEach(lang => {
            expect(screen.getByRole('option', { name: lang.label })).toBeInTheDocument();
        });

        expect(screen.getByRole('option', { name: language.label })).toHaveAttribute('selected', '');
    });

    test('renders correctly with groups of options', () => {
        render(<Select options={food} defaultValue={food[0].options[0].value} />);

        food.forEach(group => {
            expect(screen.getByRole('group', { name: group.label })).toBeInTheDocument();

            group.options.forEach(option => {
                expect(screen.getByRole('option', { name: option.label })).toBeInTheDocument();
            });
        });
    });

    test('renders select with name attribute if provided', () => {
        render(<Select options={food} defaultValue={food[0].options[0].value} name="food" />);
        const select: HTMLSelectElement | null = document.querySelector('select');

        expect(select?.name).toEqual('food');
    })

    test('renders valid correctly', () => {
        setup({ isValid: true });

        expect(screen.getByRole('combobox')).toHaveClass('is-valid');
    });

    test('renders invalid correctly', () => {
        setup({ isInvalid: true });

        expect(screen.getByRole('combobox')).toHaveClass('is-invalid');
        expect(screen.getByRole('combobox')).toHaveAttribute('aria-invalid', 'true');
    });

    test('renders disabled correctly', () => {
        setup({ isDisabled: true });

        expect(screen.getByRole('combobox')).toBeDisabled();
    });

    test('renders in small size', () => {
        setup({ size: 's' });

        expect(screen.getByRole('combobox')).toHaveClass('mc-select--s');
    });

    test('throws an error if `isValid` and `isInvalid` are specified as true', () => {
        expect(() => setup({ isValid: true, isInvalid: true })).toThrow(
            'The properties `isValid` and `isInvalid` can not be true in the same time'
        );
    });
});
