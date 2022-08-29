import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Accordion from './Accordion';
import { sizes } from './Accordion.types';
import { AccordionContent, AccordionHeader } from './partials';
import { getSizeModifier } from './partials/Container';

describe('components/Accordion', () => {
    test.each(sizes)('renders correctly with `%s` size', size => {
        render(
            <Accordion size={size} aria-label="accordion">
                Accordion
            </Accordion>
        );

        expect(screen.getByLabelText('accordion')).toHaveClass(getSizeModifier(size));
    });

    test('renders open by default', () => {
        render(
            <Accordion aria-label="accordion" defaultIsOpen>
                Accordion
            </Accordion>
        );

        expect(screen.getByLabelText('accordion')).toHaveClass('is-open');
    });

    test('renders disabled accordion', () => {
        render(
            <Accordion aria-label="accordion" isDisabled>
                <AccordionHeader>Header</AccordionHeader>
                <AccordionContent>Content</AccordionContent>
            </Accordion>
        );

        expect(screen.getByLabelText('accordion')).toHaveClass('is-disabled');
        expect(screen.getByRole('button', { name: 'Header' })).toBeDisabled();
    });

    test('opens the content by clicking on the header', async () => {
        render(
            <Accordion aria-label="accordion">
                <AccordionHeader>Header</AccordionHeader>
                <AccordionContent>Content</AccordionContent>
            </Accordion>
        );

        expect(screen.getByLabelText('accordion')).not.toHaveClass('is-open');

        await userEvent.click(screen.getByRole('button', { name: 'Header' }));

        expect(screen.getByLabelText('accordion')).toHaveClass('is-open');
        expect(screen.getByRole('article')).toHaveAttribute('aria-hidden', 'false');
    });
});
