import React from 'react';
import { render, screen } from '@testing-library/react';
import { FlexDirection } from './Flex.types';
import Flex from './Flex';

describe('components/Flex', () => {
    test('renders correctly with default properties', () => {
        render(<Flex>Flex</Flex>);

        expect(screen.getByText('Flex')).toHaveClass('ml-flex-row');
    });

    test.each([FlexDirection.Row, FlexDirection.RowReverse, FlexDirection.Column, FlexDirection.ColumnReverse])(
        'renders with %s direction',
        (direction: FlexDirection) => {
            render(<Flex direction={direction}>Flex</Flex>);

            expect(screen.getByText('Flex')).toHaveClass(`ml-flex-${direction}`);
        }
    );
});
