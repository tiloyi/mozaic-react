import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../Button';
import ModalsProvider, { useModals } from '../ModalsProvider';
import Layer from './Layer';

interface ISceneProps {
    onOpen?: () => void;
    onClose?: () => void;
}

const Scene = ({ onOpen, onClose }: ISceneProps): JSX.Element => {
    const { open } = useModals();

    return (
        <>
            <Button onClick={() => open('layer')}>Open</Button>
            <Layer id="layer" onOpen={onOpen} onClose={onClose}>
                Test
            </Layer>
        </>
    );
};

describe('components/Layer', () => {
    test('renders correctly', () => {
        render(
            <ModalsProvider>
                <Scene />
            </ModalsProvider>
        );

        expect(screen.getByRole('document')).not.toHaveClass('is-open');

        userEvent.click(screen.getByText(/Open/));

        expect(screen.getByText('Test')).toBeInTheDocument();
        expect(screen.getByRole('document')).toHaveClass('is-open');
    });

    test('calls `onOpen` callback', () => {
        const onOpen = jest.fn();

        render(
            <ModalsProvider>
                <Scene onOpen={onOpen} />
            </ModalsProvider>
        );

        userEvent.click(screen.getByText(/Open/));

        expect(onOpen).toBeCalledTimes(1);
    });

    test('calls `onClose` callback', () => {
        const onClose = jest.fn();

        render(
            <ModalsProvider>
                <Scene onClose={onClose} />
            </ModalsProvider>
        );

        userEvent.click(screen.getByText(/Open/));

        expect(screen.getByRole('document')).toHaveClass('is-open');

        userEvent.click(screen.getByRole('button', { name: /Close/ }));

        expect(onClose).toBeCalledTimes(1);
    });
});
