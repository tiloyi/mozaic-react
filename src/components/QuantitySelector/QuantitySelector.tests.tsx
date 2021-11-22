import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import QuantitySelector from './QuantitySelector';

describe('components/QuantitySelector', () => {
    test('renders correctly', () => {
        render(<QuantitySelector value={50} placeholder="Placeholder text" />);

        expect(screen.getByPlaceholderText('Placeholder text')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Placeholder text')).toHaveValue(50);
    });

    test('renders disabled', () => {
        render(<QuantitySelector value={50} placeholder="Placeholder text" isDisabled />);

        expect(screen.getByPlaceholderText('Placeholder text')).toBeDisabled();
        expect(screen.getByRole('button', { name: 'Increment' })).toBeDisabled();
        expect(screen.getByRole('button', { name: 'Decrement' })).toBeDisabled();
    });

    test('locks increment button if value is greater than or equal to maxValue', () => {
        render(<QuantitySelector value={50} maxValue={50} />);

        expect(screen.getByRole('button', { name: 'Increment' })).toBeDisabled();
    });

    test('locks decrement button if value is less than or equal to minValue', () => {
        render(<QuantitySelector value={0} minValue={0} />);

        expect(screen.getByRole('button', { name: 'Decrement' })).toBeDisabled();
    });

    test('increases the value', () => {
        const onChange = jest.fn();

        render(<QuantitySelector value={5} onChange={onChange} />);

        fireEvent.click(screen.getByRole('button', { name: 'Increment' }));

        expect(onChange).toBeCalledWith(6);
    });

    test('decreases the value', () => {
        const onChange = jest.fn();

        render(<QuantitySelector value={5} onChange={onChange} />);

        fireEvent.click(screen.getByRole('button', { name: 'Decrement' }));

        expect(onChange).toBeCalledWith(4);
    });

    test('increases the value with specified step', () => {
        const onChange = jest.fn();

        render(<QuantitySelector value={5} step={5} onChange={onChange} />);

        fireEvent.click(screen.getByRole('button', { name: 'Increment' }));

        expect(onChange).toBeCalledWith(10);
    });

    test('does not increase if next value is greater than max value', () => {
        const onChange = jest.fn();

        render(<QuantitySelector value={7} step={5} maxValue={10} onChange={onChange} />);

        fireEvent.click(screen.getByRole('button', { name: 'Increment' }));

        expect(onChange).not.toBeCalled();
    });

    test('decreases the value with specified step', () => {
        const onChange = jest.fn();

        render(<QuantitySelector value={5} step={5} onChange={onChange} />);

        fireEvent.click(screen.getByRole('button', { name: 'Decrement' }));

        expect(onChange).toBeCalledWith(0);
    });

    test('does not decrease if next value is less than min value', () => {
        const onChange = jest.fn();

        render(<QuantitySelector value={3} step={5} minValue={0} onChange={onChange} />);

        fireEvent.click(screen.getByRole('button', { name: 'Decrement' }));

        expect(onChange).not.toBeCalled();
    });

    test('changes value', () => {
        const onChange = jest.fn();

        render(<QuantitySelector placeholder="Placeholder" value={5} onChange={onChange} />);

        fireEvent.change(screen.getByPlaceholderText('Placeholder'), { target: { value: 10 } });

        expect(onChange).toBeCalledWith(10);
    });

    test('does not change value if next value is less than min value', () => {
        const onChange = jest.fn();

        render(<QuantitySelector placeholder="Placeholder" value={5} minValue={0} onChange={onChange} />);

        fireEvent.change(screen.getByPlaceholderText('Placeholder'), { target: { value: -1 } });

        expect(onChange).not.toBeCalled();
    });

    test('does not change value if next value is greater than max value', () => {
        const onChange = jest.fn();

        render(<QuantitySelector placeholder="Placeholder" value={5} maxValue={10} onChange={onChange} />);

        fireEvent.change(screen.getByPlaceholderText('Placeholder'), { target: { value: 11 } });

        expect(onChange).not.toBeCalled();
    });
});
