import React from 'react';
import { useController, useForm } from 'react-hook-form';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../Button';
import View from '../View';
import QuantitySelector from './QuantitySelector';

interface IFormValues {
    value: number;
}

interface IFormProps {
    defaultValues: IFormValues;
    onSubmit: (values: IFormValues) => void;
}

const Form = ({ defaultValues, onSubmit }: IFormProps): JSX.Element => {
    const { control, handleSubmit } = useForm<IFormValues>({
        defaultValues
    });

    const {
        field: { value, onChange }
    } = useController({ control, name: 'value' });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <View marginBottom="mu100">
                <QuantitySelector placeholder="quantity" value={value} onChange={onChange} />
            </View>
            <Button type="submit">Submit</Button>
        </form>
    );
};

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

        userEvent.click(screen.getByRole('button', { name: 'Increment' }));

        expect(onChange).toBeCalledWith(6);
    });

    test('decreases the value', () => {
        const onChange = jest.fn();

        render(<QuantitySelector value={5} onChange={onChange} />);

        userEvent.click(screen.getByRole('button', { name: 'Decrement' }));

        expect(onChange).toBeCalledWith(4);
    });

    test('increases the value with specified step', () => {
        const onChange = jest.fn();

        render(<QuantitySelector value={5} step={5} onChange={onChange} />);

        userEvent.click(screen.getByRole('button', { name: 'Increment' }));

        expect(onChange).toBeCalledWith(10);
    });

    test('does not increase if next value is greater than max value', () => {
        const onChange = jest.fn();

        render(<QuantitySelector value={7} step={5} maxValue={10} onChange={onChange} />);

        userEvent.click(screen.getByRole('button', { name: 'Increment' }));

        expect(onChange).not.toBeCalled();
    });

    test('decreases the value with specified step', () => {
        const onChange = jest.fn();

        render(<QuantitySelector value={5} step={5} onChange={onChange} />);

        userEvent.click(screen.getByRole('button', { name: 'Decrement' }));

        expect(onChange).toBeCalledWith(0);
    });

    test('does not decrease if next value is less than min value', () => {
        const onChange = jest.fn();

        render(<QuantitySelector value={3} step={5} minValue={0} onChange={onChange} />);

        userEvent.click(screen.getByRole('button', { name: 'Decrement' }));

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

    test('works with react-hook-form', async () => {
        const onSubmit = jest.fn();
        const defaultValues = {
            value: 0
        };

        render(<Form defaultValues={defaultValues} onSubmit={onSubmit} />);

        expect(screen.getByPlaceholderText('quantity')).toHaveDisplayValue('0');

        userEvent.click(screen.getByRole('button', { name: 'Increment' }));

        expect(screen.getByPlaceholderText('quantity')).toHaveDisplayValue('1');

        await waitFor(() => userEvent.click(screen.getByRole('button', { name: 'Submit' })));

        expect(onSubmit).toHaveBeenCalledWith({ value: 1 }, expect.any(Object));
    });
});
