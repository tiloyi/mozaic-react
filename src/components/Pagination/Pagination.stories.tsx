import React, { useState } from 'react';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Pagination from './Pagination';
import { IPaginationProps } from './Pagination.types';

export const ControlsTemplate: Story<IPaginationProps> = args => {
    const options = Array.from({ length: args.pagesTotal }).map((_: unknown, index: number) => ({
        value: index + 1,
        label: `Page ${index + 1} of ${args.pagesTotal}`
    }));

    return <Pagination {...args} options={options} onChange={action('Change!')} />;
};

export const Controls = ControlsTemplate.bind({});

Controls.args = {
    currentPage: 1,
    pagesTotal: 10,
    isCompact: false,
    isDisabled: false
};

export const ExampleTemplate: Story = () => {
    const [page, setPage] = useState(1);
    const pagesTotal = 10;

    const options = Array.from({ length: pagesTotal }).map((_: unknown, index: number) => ({
        value: index + 1,
        label: `Page ${index + 1} of ${pagesTotal}`
    }));

    return (
        <Pagination
            currentPage={page}
            pagesTotal={pagesTotal}
            options={options}
            onChange={nextPage => setPage(nextPage)}
        />
    );
};

export const Example = ExampleTemplate.bind({});

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
