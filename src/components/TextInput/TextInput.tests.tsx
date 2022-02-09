import React from 'react';
import { render, screen } from '@testing-library/react';
import TextInput from './TextInput';
import SVGIcon from "../../../.storybook/assets/SVGIcon";

describe('components/TextInput', () => {
    test('renders correctly', () => {
        render(<TextInput defaultValue="text" />);

        expect(screen.getByRole('textbox')).toHaveDisplayValue('text');
    });

    test('renders valid correctly', () => {
        render(<TextInput isValid />);

        expect(screen.getByRole('textbox')).toHaveClass('is-valid');
    });

    test('renders invalid correctly', () => {
        render(<TextInput isInvalid />);

        expect(screen.getByRole('textbox')).toHaveClass('is-invalid');
        expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
    });

    test('renders disabled correctly', () => {
        render(<TextInput isDisabled />);

        expect(screen.getByRole('textbox')).toBeDisabled();
    });

    test('renders in small size', () => {
        render(<TextInput size="s" />);

        expect(screen.getByRole('textbox')).toHaveClass('mc-text-input--s');
    });

    test('renders with icon', () => {
        render(<TextInput icon={<SVGIcon />} />);

        const wrapperDiv = document.querySelector('div.mc-left-icon-input');
        const span = document.querySelector('span.mc-left-icon-input__icon');

        expect(wrapperDiv).toBeTruthy();
        expect(span).toBeTruthy();

        expect(screen.getByRole('textbox')).toHaveClass('mc-left-icon-input__input');
    });

    test('throws an error if `isValid` and `isInvalid` are specified as true', () => {
        expect(() => render(<TextInput isInvalid isValid />)).toThrow(
            'The properties `isValid` and `isInvalid` can not be true in the same time'
        );
    });
});
