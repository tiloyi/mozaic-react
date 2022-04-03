import React from 'react';
import { Story } from '@storybook/react';
import { columns, generateDataTableRows, getRowKey, IDataTableFixture } from './DataTable.fixtures';
import DataTable from './DataTable';

const CustomRowTemplate: Story = () => {
    const rows = generateDataTableRows(20);

    return <DataTable<IDataTableFixture> columns={columns} rows={rows} getRowKey={getRowKey} />;
};

export const CustomRowRender = CustomRowTemplate.bind({});

export const argTypes = {};
