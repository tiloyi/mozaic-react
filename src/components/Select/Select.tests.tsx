import React from 'react';
import { render, screen } from '@testing-library/react';
import { options } from './Select.fixtures';
import { ISelectProps, SelectSize } from './Select.types';
import Select from './Select';

const setup = (props: Partial<ISelectProps>) => render(<Select {...props} options={options} />);

describe('components/Select', () => {
    test('renders correctly with options', () => {
        const [option] = options;

        setup({ defaultValue: option.value });

        expect(screen.getByRole('combobox')).toBeInTheDocument();

        options.forEach(o => {
            expect(screen.getByRole('option', { name: o.label })).toBeInTheDocument();
        });

        expect(screen.getByRole('option', { name: option.label })).toHaveAttribute('selected', '');
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
