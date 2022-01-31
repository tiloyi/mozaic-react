import React from 'react';
import { Story } from '@storybook/react';
import { columns, generateDataTableRows, getRowKey, IDataTableFixture } from './DataTable.fixtures';
import DataTable from './DataTable';

const Template: Story = () => {
    const rows = generateDataTableRows(20);

    return (
        <DataTable<IDataTableFixture>
            columns={columns}
            rows={rows}
            getRowKey={getRowKey}
            expandable={{
                expandedRowRender: row => <p style={{ margin: 0 }}> {`${row.name}`}</p>,
                rowExpandable: row => row.id % 2 !== 0
            }}
        />
    );
};

export const Basic = Template.bind({});

export const argTypes = {};
