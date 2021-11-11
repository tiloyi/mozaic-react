import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './Modal';
import { Button, ModalsProvider, useModals } from '../index';

const ModalSetup = () => {
    const { open } = useModals();
    return (
        <>
            <Button onClick={() => open('modal')}>Open</Button>
            <Modal id="modal">Test</Modal>
        </>
    );
};

describe('components/Modal', () => {
    test('renders correctly', () => {
        document.body.innerHTML = `
            <div id='portal-modal-modal'></div>
        `;

        render(
            <ModalsProvider>
                <ModalSetup />
            </ModalsProvider>
        );

        fireEvent.click(screen.getByText(/Open/));

        expect(screen.getByText('Test')).toBeInTheDocument();
    });
});
