import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Notification from './Notification';
import { sizes, TNotificationTheme } from './Notification.types';

describe('components/Notification', () => {
    test('renders correctly', () => {
        render(<Notification title="Title" message="Message" footer="Footer" />);

        expect(screen.getByRole('heading')).toHaveTextContent('Title');
        expect(screen.getByText('Message')).toBeInTheDocument();
        expect(screen.getByText('Footer')).toBeInTheDocument();
    });

    test('renders with custom message component', () => {
        render(<Notification message={<div data-testid="message" />} />);

        expect(screen.getByTestId('message')).toBeInTheDocument();
    });

    test('renders with custom footer component', () => {
        render(<Notification footer={<div data-testid="footer" />} />);

        expect(screen.getByTestId('footer')).toBeInTheDocument();
    });

    test('renders with close button', async () => {
        const onClose = jest.fn();

        render(<Notification title="Title" isClosable onClose={onClose} />);

        await userEvent.click(screen.getByRole('button'));

        expect(onClose).toHaveBeenCalledTimes(1);
    });

    test.each(['danger', 'warning', 'success'])('renders with `%s` theme correctly', theme => {
        render(<Notification title="Title" theme={theme as TNotificationTheme} role="status" />);

        expect(screen.getByRole('status')).toHaveClass(`mc-notification--${theme}`);
    });

    test.each(sizes)('renders with `%s` size correctly', size => {
        render(<Notification title="Title" size={size} role="status" />);

        expect(screen.getByRole('status')).toHaveClass(`mc-notification--${size}`);
    });
});
