import React from 'react';
import { render, screen } from '@testing-library/react';
import { magicUnits, sanitizeMagicUnit } from '../View';
import { directions, flexWraps, alignItemsVariants, alignContentVariants, justifyContentVariants } from './Flex.types';
import Flex, {
    getDirectionModifier,
    getWrapModifier,
    getAlignContentModifier,
    getAlignItemsModifier,
    getJustifyContentModifier
} from './Flex';

describe('components/Flex', () => {
    test.each(directions)('renders with flex-direction: %s', direction => {
        render(<Flex direction={direction}>Flex</Flex>);

        expect(screen.getByText('Flex')).toHaveClass(getDirectionModifier(direction));
    });

    test.each(flexWraps)('renders with flex-wrap: %s', wrap => {
        render(<Flex wrap={wrap}>Flex</Flex>);

        expect(screen.getByText('Flex')).toHaveClass(getWrapModifier(wrap));
    });

    test.each(alignItemsVariants)('renders with align-items: %s', alignItems => {
        render(<Flex alignItems={alignItems}>Flex</Flex>);

        expect(screen.getByText('Flex')).toHaveClass(getAlignItemsModifier(alignItems));
    });

    test.each(alignContentVariants)('renders with align-content: %s', alignContent => {
        render(<Flex alignContent={alignContent}>Flex</Flex>);

        expect(screen.getByText('Flex')).toHaveClass(getAlignContentModifier(alignContent));
    });

    test.each(justifyContentVariants)('renders with justify-content: %s', justifyContent => {
        render(<Flex justifyContent={justifyContent}>Flex</Flex>);

        expect(screen.getByText('Flex')).toHaveClass(getJustifyContentModifier(justifyContent));
    });

    test.each(magicUnits)('renders with gap: %s', gap => {
        render(<Flex gap={gap}>Flex</Flex>);

        expect(screen.getByText('Flex')).toHaveClass(`ml-flex--g-${sanitizeMagicUnit(gap)}`);
    });

    test.each(magicUnits)('renders with row gap: %s', gap => {
        render(<Flex rowGap={gap}>Flex</Flex>);

        expect(screen.getByText('Flex')).toHaveClass(`ml-flex--rg-${sanitizeMagicUnit(gap)}`);
    });

    test.each(magicUnits)('renders with column gap: %s', gap => {
        render(<Flex columnGap={gap}>Flex</Flex>);

        expect(screen.getByText('Flex')).toHaveClass(`ml-flex--cg-${sanitizeMagicUnit(gap)}`);
    });

    test.each(magicUnits)('treats equal row gap and column gap as gap: %s', gap => {
        render(
            <Flex rowGap={gap} columnGap={gap}>
                Flex
            </Flex>
        );

        expect(screen.getByText('Flex')).toHaveClass(`ml-flex--g-${sanitizeMagicUnit(gap)}`);
    });
});
