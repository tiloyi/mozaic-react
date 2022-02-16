import React from 'react';
import { useForm } from 'react-hook-form';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import View from '../View';
import Button from '../Button';
import Toggle from './Toggle';

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
                <Toggle {...register('isChecked')}>Toggle label</Toggle>
            </View>
            <Button type="submit">Submit</Button>
        </form>
    );
};

describe('components/Toggle', () => {
    test('renders children correctly', () => {
        render(<Toggle>Toggle label</Toggle>);

        expect(screen.getByText('Toggle label')).toBeInTheDocument();
    });

    test('renders checked correctly', () => {
        const onChange = jest.fn();

        render(
            <Toggle isChecked onChange={onChange}>
                Toggle label
            </Toggle>
        );

        expect(screen.getByRole('checkbox')).toBeChecked();
    });

    test('renders unchecked correctly', () => {
        const onChange = jest.fn();

        render(
            <Toggle isChecked={false} onChange={onChange}>
                Toggle label
            </Toggle>
        );

        expect(screen.getByRole('checkbox')).not.toBeChecked();
    });

    test('renders disabled correctly', () => {
        const onChange = jest.fn();

        render(
            <Toggle isDisabled onChange={onChange}>
                Toggle label
            </Toggle>
        );

        expect(screen.getByRole('checkbox')).toBeDisabled();
    });

    test('works with react-hook-form', async () => {
        const onSubmit = jest.fn();
        const defaultValues = {
            isChecked: true
        };

        render(<Form defaultValues={defaultValues} onSubmit={onSubmit} />);

        expect(screen.getByRole('checkbox')).toBeChecked();

        userEvent.click(screen.getByRole('checkbox'));

        expect(screen.getByRole('checkbox')).not.toBeChecked();

        await waitFor(() => userEvent.click(screen.getByRole('button', { name: 'Submit' })));

        expect(onSubmit).toHaveBeenCalledWith({ isChecked: false }, expect.any(Object));
    });
});
