import React from 'react';
import { Story } from '@storybook/react';
import { generateDataTableRows, columns, getRowKey, IDataTableFixture } from './DataTable.fixtures';
import DataTable from './DataTable';

const Template: Story = () => {
    const rows = generateDataTableRows(20);

    return <DataTable<IDataTableFixture> columns={columns} rows={rows} getRowKey={getRowKey} />;
};

export const Basic = Template.bind({});

export const argTypes = {};
