import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextTag from './TextTag';
import LinkTag from './LinkTag';
import SelectableTag from './SelectableTag';
import RemovableTag from './RemovableTag';

describe('components/Tag', () => {
    describe('TextTag', () => {
        test('renders correctly with default properties', () => {
            render(<TextTag aria-label="text tag">tag</TextTag>);

            expect(screen.getByLabelText('text tag')).toHaveTextContent('tag');
            expect(screen.getByLabelText('text tag')).toHaveClass('mc-tag-text');
        });

        test('renders correctly with s size', () => {
            render(
                <TextTag size="s" aria-label="text tag">
                    tag
                </TextTag>
            );

            expect(screen.getByLabelText('text tag')).toHaveClass('mc-tag-text--s');
        });

        test('renders correctly with dark theme', () => {
            render(
                <TextTag theme="dark" aria-label="text tag">
                    tag
                </TextTag>
            );

            expect(screen.getByLabelText('text tag')).toHaveClass('mc-tag-text--dark');
        });
    });

    describe('LinkTag', () => {
        test('renders correctly with default properties', () => {
            render(
                <LinkTag href="https://google.com" aria-label="link tag">
                    tag
                </LinkTag>
            );

            expect(screen.getByLabelText('link tag')).toHaveTextContent('tag');
            expect(screen.getByLabelText('link tag')).toHaveClass('mc-tag-link');
            expect(screen.getByLabelText('link tag')).toHaveAttribute('href', 'https://google.com');
        });

        test('renders correctly with s size', () => {
            render(
                <LinkTag size="s" aria-label="link tag">
                    tag
                </LinkTag>
            );

            expect(screen.getByLabelText('link tag')).toHaveClass('mc-tag-link--s');
        });

        test('renders correctly with dark theme', () => {
            render(
                <LinkTag theme="dark" aria-label="link tag">
                    tag
                </LinkTag>
            );

            expect(screen.getByLabelText('link tag')).toHaveClass('mc-tag-link--dark');
        });
    });

    describe('SelectableTag', () => {
        test('renders correctly with default properties', () => {
            render(<SelectableTag aria-label="selectable tag">tag</SelectableTag>);

            expect(screen.getByLabelText('selectable tag')).toHaveTextContent('tag');
            expect(screen.getByLabelText('selectable tag')).toHaveClass('mc-tag-selectable');
        });

        test('renders correctly with s size', () => {
            render(
                <SelectableTag size="s" aria-label="selectable tag">
                    tag
                </SelectableTag>
            );

            expect(screen.getByLabelText('selectable tag')).toHaveClass('mc-tag-selectable--s');
        });

        test('renders correctly with dark theme', () => {
            render(
                <SelectableTag theme="dark" aria-label="selectable tag">
                    tag
                </SelectableTag>
            );

            expect(screen.getByLabelText('selectable tag')).toHaveClass('mc-tag-selectable--dark');
        });

        test('calls onChange callback', () => {
            const onChange = jest.fn();

            render(<SelectableTag onChange={onChange}>tag</SelectableTag>);

            userEvent.click(screen.getByRole('checkbox'));

            expect(onChange).toBeCalledTimes(1);
        });

        test('renders as text tag in disabled state', () => {
            render(<SelectableTag isDisabled>tag</SelectableTag>);

            expect(screen.getByRole('checkbox')).toBeDisabled();
        });
    });

    describe('RemovableTag', () => {
        test('renders correctly with default properties', () => {
            render(<RemovableTag aria-label="removable tag">tag</RemovableTag>);

            expect(screen.getByLabelText('removable tag')).toHaveTextContent('tag');
            expect(screen.getByLabelText('removable tag')).toHaveClass('mc-tag-removable');
        });

        test('renders correctly with s size', () => {
            render(
                <RemovableTag size="s" aria-label="removable tag">
                    tag
                </RemovableTag>
            );

            expect(screen.getByLabelText('removable tag')).toHaveClass('mc-tag-removable--s');
        });

        test('renders correctly with dark theme', () => {
            render(
                <RemovableTag theme="dark" aria-label="removable tag">
                    tag
                </RemovableTag>
            );

            expect(screen.getByLabelText('removable tag')).toHaveClass('mc-tag-removable--dark');
        });

        test('calls onRemove callback', () => {
            const onRemove = jest.fn();

            render(<RemovableTag onRemove={onRemove}>tag</RemovableTag>);

            userEvent.click(screen.getByRole('button'));

            expect(onRemove).toBeCalledTimes(1);
        });

        test('renders as text tag in disabled state', () => {
            render(
                <RemovableTag aria-label="removable tag" isDisabled>
                    tag
                </RemovableTag>
            );

            expect(screen.getByLabelText('removable tag')).toHaveClass('mc-tag-text');
        });
    });
});
