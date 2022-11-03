import React from 'react';
import { useForm } from 'react-hook-form';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SVGIcon from '../../../.storybook/assets/SVGIcon';
import { View } from '../View';
import Button from '../Button';
import TextInput from './TextInput';

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
                <TextInput {...register('message')} />
            </View>
            <Button type="submit">Submit</Button>
        </form>
    );
};

describe('components/TextInput', () => {
    test('renders correctly', () => {
        render(<TextInput defaultValue="text" />);

        expect(screen.getByRole('textbox')).toHaveDisplayValue('text');
    });

    test('renders valid correctly', () => {
        render(<TextInput isValid />);

        expect(screen.getByRole('textbox')).toHaveClass('is-valid');
    });

    test('renders invalid correctly', () => {
        render(<TextInput isInvalid />);

        expect(screen.getByRole('textbox')).toHaveClass('is-invalid');
        expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
    });

    test('renders disabled correctly', () => {
        render(<TextInput isDisabled />);

        expect(screen.getByRole('textbox')).toBeDisabled();
    });

    test('renders in small size', () => {
        render(<TextInput size="s" />);

        expect(screen.getByRole('textbox')).toHaveClass('mc-text-input--s');
    });

    test('renders with icon', () => {
        render(<TextInput icon={<SVGIcon />} />);

        const wrapperDiv = document.querySelector('div.mc-left-icon-input');
        const span = document.querySelector('span.mc-left-icon-input__icon');

        expect(wrapperDiv).toBeTruthy();
        expect(span).toBeTruthy();

        expect(screen.getByRole('textbox')).toHaveClass('mc-left-icon-input__input');
    });

    test('throws an error if `isValid` and `isInvalid` are specified as true', () => {
        expect(() => render(<TextInput isInvalid isValid />)).toThrow(
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
