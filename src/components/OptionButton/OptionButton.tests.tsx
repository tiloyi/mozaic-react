import React from 'react';
import { render, screen } from '@testing-library/react';
import OptionButton from './OptionButton';

describe('components/OptionButton', () => {
    test('renders children correctly', () => {
        render(<OptionButton>Option button label</OptionButton>);

        expect(screen.getByText('Option button label')).toBeInTheDocument();
    });

    test('renders as checked radio correctly', () => {
        const onClick = jest.fn();

        render(
            <OptionButton isChecked onClick={onClick}>
                Option button label
            </OptionButton>
        );

        expect(screen.getByRole('radio')).toBeChecked();
    });

    test('renders as checked checkbox correctly', () => {
        const onClick = jest.fn();

        render(
            <OptionButton isChecked type="checkbox" onClick={onClick}>
                Option button label
            </OptionButton>
        );

        expect(screen.getByRole('checkbox')).toBeChecked();
    });

    test('renders as unchecked radio correctly', () => {
        const onClick = jest.fn();

        render(
            <OptionButton isChecked={false} onClick={onClick}>
                Option button label
            </OptionButton>
        );

        expect(screen.getByRole('radio')).not.toBeChecked();
    });

    test('renders as disabled radio correctly', () => {
        render(<OptionButton isDisabled>Option button label</OptionButton>);

        expect(screen.getByRole('radio')).toBeDisabled();
    });

    test('renders as disabled checkbox correctly', () => {
        render(
            <OptionButton isDisabled type="checkbox">
                Option button label
            </OptionButton>
        );

        expect(screen.getByRole('checkbox')).toBeDisabled();
    });

    test('renders full width correctly', () => {
        render(<OptionButton width="full">Full width option button label</OptionButton>);

        expect(screen.getByRole('radio')).toHaveClass('mc-option-button--full');
    });
});
