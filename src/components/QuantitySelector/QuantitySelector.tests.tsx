import React from 'react';
import { render, screen } from '@testing-library/react';
import QuantitySelector from './QuantitySelector';

describe('components/QuantitySelector', () => {
    test.skip('renders correctly', () => {
        render(<QuantitySelector value={50} placeholder="Value" />);

        screen.debug();

        expect(screen.getByPlaceholderText('Value')).toBeInTheDocument();
    });

    test.todo('renders disabled');

    test.todo('increases the value');

    test.todo('decreases the value');

    test.todo('increases the value with specified step');

    test.todo('decreases the value with specified step');

    test.todo('locks increment button if value is greater than or equal to maxValue');

    test.todo('locks decrement button if value is less than or equal to minValue');
});
