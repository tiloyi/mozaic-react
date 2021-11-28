import React from 'react';
import { render, screen } from '@testing-library/react';
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
});
