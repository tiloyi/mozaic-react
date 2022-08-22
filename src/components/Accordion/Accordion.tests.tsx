import React from 'react';
import { render, screen } from '@testing-library/react';
import Accordion from './Accordion';
import { sizes } from './Accordion.types';

describe('components/Accordion', () => {
    test.each(sizes)('renders as `%s` size correctly with size', size => {
        render(
            <Accordion size={size} title="Accordion">
                Accordion
            </Accordion>
        );
        expect(screen.getByTestId('accordion-wrapper')).toHaveClass(`mc-accordion mc-accordion--${size}`);
    });
    test('Renders with default is open class', () => {
        render(
            <Accordion title="Accordion" isDefaultOpen>
                Accordion
            </Accordion>
        );
        expect(screen.getByTestId('accordion-wrapper')).toHaveClass(`mc-accordion mc-accordion--m is-open`);
    });
    test('renders disabled accordion', () => {
        render(
            <Accordion title="Accordion" isDisabled>
                Accordion
            </Accordion>
        );
        expect(screen.getByTestId('accordion-button')).toBeDisabled();
    });
});
