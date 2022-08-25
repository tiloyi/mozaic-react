import React from 'react';
import Table, { TableContainer } from '../../Table';
import { IDataTableContainerProps } from '../DataTable.types';
import { DataTableContextProvider } from '../DataTableContext';

function DataTableContainer<R>({ children, ...props }: IDataTableContainerProps<R>): JSX.Element {
    return (
        <DataTableContextProvider>
            <TableContainer>
                <Table>{children}</Table>
            </TableContainer>
        </DataTableContextProvider>
    );
}

export default DataTableContainer;
