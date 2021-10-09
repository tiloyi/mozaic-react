import React from 'react';
import { render, screen } from '@testing-library/react';
import { languages, food } from './Select.fixtures';
import { ISelectProps, SelectSize } from './Select.types';
import Select from './Select';

const setup = (props: Partial<ISelectProps>) => render(<Select {...props} options={languages} />);

describe('components/Select', () => {
    test('renders correctly with languages', () => {
        const [language] = languages;

        setup({ defaultValue: language.value });

        expect(screen.getByRole('combobox')).toBeInTheDocument();

        languages.forEach(lang => {
            expect(screen.getByRole('option', { name: lang.label })).toBeInTheDocument();
        });

        expect(screen.getByRole('option', { name: language.label })).toHaveAttribute('selected', '');
    });

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
        setup({ size: SelectSize.S });

        expect(screen.getByRole('combobox')).toHaveClass('mc-select--s');
    });

    test('throws an error if `isValid` and `isInvalid` are specified as true', () => {
        expect(() => setup({ isValid: true, isInvalid: true })).toThrow(
            'The properties `isValid` and `isInvalid` can not be true in the same time'
        );
    });
});
