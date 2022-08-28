import React from 'react';
import { render, screen } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import userEvent from '@testing-library/user-event';
import View from '../View';
import Button from '../Button';
import TextArea from './TextArea';

interface IFormValues {
    message: string;
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
                <TextArea {...register('message')} />
            </View>
            <Button type="submit">Submit</Button>
        </form>
    );
};

describe('components/TextArea', () => {
    test('renders correctly', () => {
        render(<TextArea defaultValue="text" />);

        expect(screen.getByRole('textbox')).toHaveDisplayValue('text');
    });

    test('renders with placeholder correctly', () => {
        render(<TextArea placeholder="text" />);

        expect(screen.getByPlaceholderText('text')).toBeInTheDocument();
    });

    test('renders valid correctly', () => {
        render(<TextArea isValid />);

        expect(screen.getByRole('textbox')).toHaveClass('is-valid');
    });

    test('renders invalid correctly', () => {
        render(<TextArea isInvalid />);

        expect(screen.getByRole('textbox')).toHaveClass('is-invalid');
        expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
    });

    test('renders disabled correctly', () => {
        render(<TextArea isDisabled />);

        expect(screen.getByRole('textbox')).toBeDisabled();
    });

    test('throws an error if `isValid` and `isInvalid` are specified as true', () => {
        expect(() => render(<TextArea isInvalid isValid />)).toThrow(
            'The properties `isValid` and `isInvalid` can not be true in the same time'
        );
    });

    test('works with react-hook-form', async () => {
        const onSubmit = jest.fn();
        const defaultValues = {
            message: 'lorem ipsum'
        };

        render(<Form defaultValues={defaultValues} onSubmit={onSubmit} />);

        expect(screen.getByRole('textbox')).toHaveDisplayValue('lorem ipsum');

        await userEvent.type(screen.getByRole('textbox'), ' dolor sit amet');

        expect(screen.getByRole('textbox')).toHaveDisplayValue('lorem ipsum dolor sit amet');

        await userEvent.click(screen.getByRole('button', { name: 'Submit' }));

        expect(onSubmit).toHaveBeenCalledWith({ message: 'lorem ipsum dolor sit amet' }, expect.any(Object));
    });
});
