import React from 'react';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Pagination from './Pagination';
import { IPaginationProps } from './Pagination.types';

export const PaginationTemplate: Story<IPaginationProps> = args => {
    const options = Array.from({ length: args.pagesTotal }).map((_: unknown, index: number) => ({
        value: index + 1,
        label: `Page ${index + 1} of ${args.pagesTotal}`
    }));

    return <Pagination {...args} options={options} onChange={action('Change!')} />;
};

export const Controls = PaginationTemplate.bind({});

Controls.args = {
    currentPage: 1,
    pagesTotal: 10,
    isCompact: false,
    isDisabled: false
};

export const argTypes = {
    isCompact: {
        control: {
            type: 'boolean'
        }
    },
    options: {
        table: {
            disable: true
        }
    }
};
