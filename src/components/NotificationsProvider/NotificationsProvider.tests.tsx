import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../Button';
import { NotificationsProvider, useNotifications } from './NotificationsContext';
import NotificationsRenderer from './NotificationsRenderer';

const Scene = (): JSX.Element => {
    const { add, info, success, warning, danger, update, remove } = useNotifications();

    return (
        <div>
            <Button onClick={() => add({ id: 'notification', title: 'Title', isAutoClosable: false })}>
                Add notification
            </Button>
            <Button onClick={() => update('notification', { title: 'New title', isAutoClosable: false })}>
                Update title
            </Button>
            <Button onClick={() => remove('notification')}>Remove notification</Button>
            <Button onClick={() => info({ title: 'Info', isAutoClosable: false })}>Add info</Button>
            <Button onClick={() => success({ title: 'Success', isAutoClosable: false })}>Add success</Button>
            <Button onClick={() => warning({ title: 'Warning', isAutoClosable: false })}>Add warning</Button>
            <Button onClick={() => danger({ title: 'Danger', isAutoClosable: false })}>Add danger</Button>
        </div>
    );
};

const setup = (): RenderResult =>
    render(
        <NotificationsProvider>
            <Scene />
            <NotificationsRenderer />
        </NotificationsProvider>
    );

describe('components/NotificationsProvider', () => {
    test('adds notification', async () => {
        setup();

        await userEvent.click(screen.getByRole('button', { name: 'Add notification' }));

        expect(screen.getByRole('status')).toBeInTheDocument();
    });

    test('updates notification', async () => {
        setup();

        await userEvent.click(screen.getByRole('button', { name: 'Add notification' }));

        expect(screen.getByRole('heading')).toHaveTextContent('Title');

        await userEvent.click(screen.getByRole('button', { name: 'Update title' }));

        expect(screen.getByRole('heading')).toHaveTextContent('New title');
    });

    test('removes notification', async () => {
        setup();

        await userEvent.click(screen.getByRole('button', { name: 'Add notification' }));

        expect(screen.getByRole('status')).toBeInTheDocument();

        await userEvent.click(screen.getByRole('button', { name: 'Remove notification' }));

        expect(screen.queryByRole('status')).not.toBeInTheDocument();
    });

    test('adds `info` notification', async () => {
        setup();

        await userEvent.click(screen.getByRole('button', { name: 'Add info' }));

        expect(screen.getByRole('status')).toBeInTheDocument();
        expect(screen.getByRole('heading')).toHaveTextContent('Info');
    });

    test('adds `success` notification', async () => {
        setup();

        await userEvent.click(screen.getByRole('button', { name: 'Add success' }));

        expect(screen.getByRole('status')).toBeInTheDocument();
        expect(screen.getByRole('heading')).toHaveTextContent('Success');
    });

    test('adds `warning` notification', async () => {
        setup();

        await userEvent.click(screen.getByRole('button', { name: 'Add warning' }));

        expect(screen.getByRole('status')).toBeInTheDocument();
        expect(screen.getByRole('heading')).toHaveTextContent('Warning');
    });

    test('adds `danger` notification', async () => {
        setup();

        await userEvent.click(screen.getByRole('button', { name: 'Add danger' }));

        expect(screen.getByRole('alert')).toBeInTheDocument();
        expect(screen.getByRole('heading')).toHaveTextContent('Danger');
    });
});
