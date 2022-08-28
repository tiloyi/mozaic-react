import React from 'react';
import { useForm } from 'react-hook-form';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../Button';
import View from '../View';
import CheckBox from './CheckBox';

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
                <CheckBox {...register('isChecked')}>Label</CheckBox>
            </View>
            <Button type="submit">Submit</Button>
        </form>
    );
};

describe('components/CheckBox', () => {
    test('renders children correctly', () => {
        render(<CheckBox>Check box label</CheckBox>);

        expect(screen.getByText('Check box label')).toBeInTheDocument();
    });

    test('renders checked correctly', () => {
        const onChange = jest.fn();

        render(
            <CheckBox isChecked onChange={onChange}>
                Check box label
            </CheckBox>
        );

        expect(screen.getByRole('checkbox')).toBeChecked();
    });

    test('renders unchecked correctly', () => {
        const onChange = jest.fn();

        render(
            <CheckBox isChecked={false} onChange={onChange}>
                Check box label
            </CheckBox>
        );

        expect(screen.getByRole('checkbox')).not.toBeChecked();
    });

    test('renders disabled correctly', () => {
        render(<CheckBox isDisabled>Disabled check box label</CheckBox>);

        expect(screen.getByRole('checkbox')).toBeDisabled();
    });

    test('renders invalid correctly', () => {
        render(<CheckBox isInvalid>Invalid check box label</CheckBox>);

        expect(screen.getByRole('checkbox')).toHaveClass('is-invalid');
    });

    test('renders indeterminate correctly', () => {
        render(<CheckBox isIndeterminate>Indeterminate check box label</CheckBox>);

        expect(screen.getByRole('checkbox')).toBePartiallyChecked();
    });

    test('works with react-hook-form', async () => {
        const onSubmit = jest.fn();
        const defaultValues = {
            isChecked: true
        };

        render(<Form defaultValues={defaultValues} onSubmit={onSubmit} />);

        expect(screen.getByRole('checkbox')).toBeChecked();

        await userEvent.click(screen.getByRole('checkbox'));

        expect(screen.getByRole('checkbox')).not.toBeChecked();

        await userEvent.click(screen.getByRole('button', { name: 'Submit' }));

        expect(onSubmit).toHaveBeenCalledWith({ isChecked: false }, expect.any(Object));
    });
});
