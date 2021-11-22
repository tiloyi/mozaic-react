import React from 'react';
import { render, screen } from '@testing-library/react';
import { textAligns, sizes, weights, tags, THeadingUnderline } from './Heading.types';
import Heading from './Heading';

describe('components/Heading', () => {
    test.each(tags)('renders as `%s` tag correctly', tag => {
        render(<Heading as={tag}>Heading</Heading>);

        expect(screen.getByText('Heading').tagName).toBe(tag.toUpperCase());
    });

    test('renders with default size correctly', () => {
        render(<Heading>Heading</Heading>);

        expect(screen.getByText('Heading')).toHaveClass(`mt-heading--m`);
    });

    test.each(sizes)('renders with `%s` size correctly', size => {
        render(<Heading size={size}>Heading</Heading>);

        expect(screen.getByText('Heading')).toHaveClass(`mt-heading--${size}`);
    });

    test.each(textAligns)('renders with `%s` text textAlign correctly', textAlign => {
        render(<Heading textAlign={textAlign}>Heading</Heading>);

        expect(screen.getByText('Heading')).toHaveClass(`mt-heading--${textAlign}`);
    });

    test.each(weights)('renders with `%s` weight correctly', weight => {
        render(<Heading weight={weight}>Heading</Heading>);

        expect(screen.getByText('Heading')).toHaveClass(`mt-heading--${weight}`);
    });

    test('renders with underline correctly', () => {
        render(<Heading underline="primary-01-500">Heading</Heading>);

        expect(screen.getByText('Heading')).toHaveClass(`mt-heading--underline`);
    });

    test.each(['primary-01-200', 'primary-02-200', 'primary-02-600'])(
        'renders with `%s` underline correctly',
        underline => {
            render(<Heading underline={underline as THeadingUnderline}>Heading</Heading>);

            expect(screen.getByText('Heading')).toHaveClass(`mt-heading--line-${underline}`);
        }
    );
});
