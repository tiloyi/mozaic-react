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
    test('renders correctly', async () => {
        render(
            <ModalsProvider>
                <Scene />
            </ModalsProvider>
        );

        expect(screen.getByRole('document')).not.toHaveClass('is-open');

        await userEvent.click(screen.getByText(/Open/));

        expect(screen.getByText('Test')).toBeInTheDocument();
        expect(screen.getByRole('document')).toHaveClass('is-open');
    });

    test('calls `onOpen` callback', async () => {
        const onOpen = jest.fn();

        render(
            <ModalsProvider>
                <Scene onOpen={onOpen} />
            </ModalsProvider>
        );

        await userEvent.click(screen.getByText(/Open/));

        expect(onOpen).toBeCalledTimes(1);
    });

    test('calls `onClose` callback by button click', async () => {
        const onClose = jest.fn();

        render(
            <ModalsProvider>
                <Scene onClose={onClose} />
            </ModalsProvider>
        );

        await userEvent.click(screen.getByText(/Open/));

        expect(screen.getByRole('document')).toHaveClass('is-open');

        await userEvent.click(screen.getByRole('button', { name: /Close/ }));

        expect(onClose).toBeCalledTimes(1);
    });

    test('calls `onClose` callback by overlay click', async () => {
        const onClose = jest.fn();

        render(
            <ModalsProvider>
                <Scene onClose={onClose} />
            </ModalsProvider>
        );

        await userEvent.click(screen.getByText(/Open/));

        expect(screen.getByRole('document')).toHaveClass('is-open');

        await userEvent.click(screen.getAllByRole('dialog')[1]);

        expect(onClose).toBeCalledTimes(1);
    });

    test('calls `onClose` callback by escape button press', async () => {
        const onClose = jest.fn();

        render(
            <ModalsProvider>
                <Scene onClose={onClose} />
            </ModalsProvider>
        );

        await userEvent.click(screen.getByText(/Open/));

        expect(screen.getByRole('document')).toHaveClass('is-open');

        await userEvent.keyboard('[Escape]');

        expect(onClose).toBeCalledTimes(1);
    });
});
