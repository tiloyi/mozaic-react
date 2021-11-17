import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('components/Button', () => {
    test('renders correctly', () => {
        render(<Button>Click!</Button>);

        expect(screen.getByRole('button')).toHaveTextContent('Click!');
    });

    test('renders disabled correctly', () => {
        render(<Button isDisabled>Click!</Button>);

        expect(screen.getByRole('button')).toBeDisabled();
    });

    test('renders left icon', () => {
        render(<Button leftIcon={<div data-testid="leftIcon" />}>Click!</Button>);

        expect(screen.getByTestId('leftIcon')).toBeInTheDocument();
    });

    test('renders right icon', () => {
        render(<Button rightIcon={<div data-testid="rightIcon" />}>Click!</Button>);

        expect(screen.getByTestId('rightIcon')).toBeInTheDocument();
    });

    test('renders with full width', () => {
        render(<Button width="full">Click!</Button>);

        expect(screen.getByRole('button')).toHaveClass('mc-button--full');
    });

    test('renders with `s` size', () => {
        render(<Button size="s">Click!</Button>);

        expect(screen.getByRole('button')).toHaveClass('mc-button--s');
    });

    test('renders with `l` size', () => {
        render(<Button size="l">Click!</Button>);

        expect(screen.getByRole('button')).toHaveClass('mc-button--l');
    });
});
