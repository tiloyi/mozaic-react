import React from 'react';
import { Story } from '@storybook/react';
import Pagination from './Pagination';
import { IPaginationProps } from './Pagination.types';

const Template: Story<IPaginationProps> = args => <Pagination {...args} />;

export const Controls = Template.bind({});

Controls.args = {
    className: 'pagination'
};

export const argTypes = {
    isCompact: {
        control: {
            type: 'boolean'
        }
    },
    pagesNumber: {
        control: {
            type: 'number'
        }
    }
};
