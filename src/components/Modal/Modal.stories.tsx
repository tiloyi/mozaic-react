import React from 'react';
import { Story } from '@storybook/react';
import { IModalProps } from './Modal.types';
import Modal from './Modal';

const Template: Story<IModalProps> = args => <Modal {...args}/>;

export const ModalStory = Template.bind({});

ModalStory.args = {};

export default {
    title: 'Modal',
    component: Modal,
    argTypes: {}
};
