import React from 'react';
import { useForm } from 'react-hook-form';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../Button';
import View from '../View';
import Radio from './Radio';

interface IFormValues {
    isChecked: boolean;
}

interface IFormProps {
    defaultValues: IFormValues;
    onSubmit: (values: IFormValues) => void;
}

const Form = ({ defaultValues, onSubmit }: IFormProps): JSX.Element => {
    const { register, handleSubmit } = useForm<IFormValues>({ defaultValues });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <View marginBottom="mu100">
                <Radio {...register('isChecked')}>Label</Radio>
            </View>
            <Button type="submit">Submit</Button>
        </form>
    );
};

describe('components/Radio', () => {
    test('renders children correctly', () => {
        render(<Radio>Radio label</Radio>);

        expect(screen.getByText('Radio label')).toBeInTheDocument();
    });

    test('renders checked correctly', () => {
        const onChange = jest.fn();

        render(
            <Radio isChecked onChange={onChange}>
                Radio label
            </Radio>
        );

        expect(screen.getByRole('radio')).toBeChecked();
    });

    test('renders unchecked correctly', () => {
        const onChange = jest.fn();

        render(
            <Radio isChecked={false} onChange={onChange}>
                Radio label
            </Radio>
        );

        expect(screen.getByRole('radio')).not.toBeChecked();
    });

    test('renders disabled correctly', () => {
        render(<Radio isDisabled>Radio label</Radio>);

        expect(screen.getByRole('radio')).toBeDisabled();
    });

    test('renders invalid correctly', () => {
        render(<Radio isInvalid>Invalid radio label</Radio>);

        expect(screen.getByRole('radio')).toHaveClass('is-invalid');
    });

    test('works with react-hook-form', async () => {
        const onSubmit = jest.fn();
        const defaultValues = {
            isChecked: true
        };

        render(<Form defaultValues={defaultValues} onSubmit={onSubmit} />);

        screen.debug();

        expect(screen.getByRole('radio')).toBeChecked();
        //
        // userEvent.click(screen.getByRole('radio'));
        //
        // expect(screen.getByRole('radio')).not.toBeChecked();
        //
        // await waitFor(() => userEvent.click(screen.getByRole('button', { name: 'Submit' })));
        //
        // expect(onSubmit).toHaveBeenCalledWith({ isChecked: false }, expect.any(Object));
    });
});
