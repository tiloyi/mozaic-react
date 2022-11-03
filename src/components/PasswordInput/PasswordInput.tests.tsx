import React from 'react';
import { useForm } from 'react-hook-form';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../Button';
import { View } from '../View';
import PasswordInput from './PasswordInput';

interface IFormValues {
    password: string;
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
                <PasswordInput {...register('password')} aria-label="password" />
            </View>
            <Button type="submit">Submit</Button>
        </form>
    );
};

describe('components/PasswordInput', () => {
    test('renders correctly', () => {
        render(<PasswordInput defaultValue="password" />);

        expect(screen.getByDisplayValue('password')).toHaveAttribute('type', 'password');
    });

    test('toggles input type', async () => {
        render(<PasswordInput defaultValue="password" />);

        await userEvent.click(screen.getByRole('button', { name: 'Show' }));

        expect(screen.getByDisplayValue('password')).toHaveAttribute('type', 'text');

        await userEvent.click(screen.getByRole('button', { name: 'Hide' }));

        expect(screen.getByDisplayValue('password')).toHaveAttribute('type', 'password');
    });

    test('renders disabled correctly', () => {
        render(<PasswordInput defaultValue="password" isDisabled />);

        expect(screen.getByDisplayValue('password')).toBeDisabled();
        expect(screen.getByRole('button', { name: 'Show' })).toBeDisabled();
    });

    test('works with react-hook-form', async () => {
        const onSubmit = jest.fn();
        const defaultValues = {
            password: ''
        };

        render(<Form defaultValues={defaultValues} onSubmit={onSubmit} />);

        expect(screen.getByLabelText('password')).toHaveDisplayValue('');

        await userEvent.type(screen.getByLabelText('password'), 'qwerty');

        expect(screen.getByLabelText('password')).toHaveDisplayValue('qwerty');

        await userEvent.click(screen.getByRole('button', { name: 'Submit' }));

        expect(onSubmit).toHaveBeenCalledWith({ password: 'qwerty' }, expect.any(Object));
    });
});
