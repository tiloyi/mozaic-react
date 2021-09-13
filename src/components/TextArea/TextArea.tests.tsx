import React from 'react';
import { render, screen } from '@testing-library/react';
import TextArea from './TextArea';

describe('components/TextArea', () => {
    test('renders correctly', () => {
        render(<TextArea defaultValue="text" />);

        expect(screen.getByRole('textbox')).toHaveDisplayValue('text');
    });

    test('renders valid correctly', () => {
        render(<TextArea isValid />);

        expect(screen.getByRole('textbox')).toHaveClass('is-valid');
    });

    test('renders invalid correctly', () => {
        render(<TextArea isInvalid />);

        expect(screen.getByRole('textbox')).toHaveClass('is-invalid');
        expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
    });

    test('renders disabled correctly', () => {
        render(<TextArea isDisabled />);

        expect(screen.getByRole('textbox')).toBeDisabled();
    });

    test('throws an error if `isValid` and `isInvalid` are specified as true', () => {
        expect(() => render(<TextArea isInvalid isValid />)).toThrow(
            'The properties `isValid` and `isInvalid` can not be true in the same time'
        );
    });
});
