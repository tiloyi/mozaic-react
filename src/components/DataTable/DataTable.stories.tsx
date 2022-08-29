import React, { ChangeEvent, useCallback, useMemo, useState } from 'react';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Badge from '../Badge';
import CheckBox from '../CheckBox';
import Pagination, { IPaginationOption } from '../Pagination';
import { TableExpandButton, TTableSortDirection } from '../Table';
import Text from '../Text';
import {
    IBasicFixture,
    generateBasicRows,
    ICustomCellFixture,
    generateCustomCellRows,
    ISelectableFixture,
    generateSelectableRows,
    IExpandableFixture,
    generateExpandableRows
} from './DataTable.fixtures';
import { DataTableRow, ExpandableDataTableRow, DataTableFooter, DataTableEmptyView } from './partials';
import { IDataTableColumn } from './DataTable.types';
import DataTable from './DataTable';
import './DataTable.stories.scss';
import usePaginationState from '../../hooks/usePaginationState';

const BasicTemplate: Story = () => {
    const rows = generateBasicRows(15);

    const columns: Array<IDataTableColumn<IBasicFixture>> = useMemo(
        () => [
            {
                label: 'Id',
                key: 'id'
            },
            {
                label: 'Name',
                key: 'name'
            },
            {
                label: 'Count',
                key: 'count',
                variant: 'number'
            }
        ],
        []
    );

    const getRowKey = useCallback((row: IBasicFixture) => row.id, []);

    return <DataTable<IBasicFixture> rows={rows} columns={columns} getRowKey={getRowKey} />;
};

export const Basic = BasicTemplate.bind({});

const EmptyTableTemplate: Story = () => {
    const columns: Array<IDataTableColumn<IBasicFixture>> = useMemo(
        () => [
            {
                label: 'Id',
                key: 'id'
            },
            {
                label: 'Name',
                key: 'name'
            },
            {
                label: 'Count',
                key: 'count',
                variant: 'number'
            }
        ],
        []
    );

    const getRowKey = useCallback((row: IBasicFixture) => row.id, []);

    return (
        <DataTable<IBasicFixture> className="story-datatable" columns={columns} rows={[]} getRowKey={getRowKey}>
            <DataTableEmptyView>
                <Text size="l" theme="light">
                    No items to display
                </Text>
            </DataTableEmptyView>
        </DataTable>
    );
};

export const EmptyTable = EmptyTableTemplate.bind({});

const PendingTemplate: Story = () => {
    const rows = generateBasicRows(10);

    const columns: Array<IDataTableColumn<IBasicFixture>> = useMemo(
        () => [
            {
                label: 'Id',
                key: 'id'
            },
            {
                label: 'Name',
                key: 'name'
            },
            {
                label: 'Count',
                key: 'count',
                variant: 'number'
            }
        ],
        []
    );

    const getRowKey = useCallback((row: IBasicFixture) => row.id, []);

    return <DataTable<IBasicFixture> columns={columns} rows={rows} getRowKey={getRowKey} isPending />;
};

export const Pending = PendingTemplate.bind({});

const HiddenHeaderTemplate: Story = () => {
    const rows = generateBasicRows(15);

    const columns: Array<IDataTableColumn<IBasicFixture>> = useMemo(
        () => [
            {
                label: 'Id',
                key: 'id'
            },
            {
                label: 'Name',
                key: 'name'
            },
            {
                label: 'Count',
                key: 'count',
                variant: 'number'
            }
        ],
        []
    );

    const getRowKey = useCallback((row: IBasicFixture) => row.id, []);

    return <DataTable<IBasicFixture> rows={rows} columns={columns} getRowKey={getRowKey} isHeaderHidden />;
};

export const HiddenHeader = HiddenHeaderTemplate.bind({});

const StickyHeaderTemplate: Story = () => {
    const rows = generateBasicRows(15);

    const columns: Array<IDataTableColumn<IBasicFixture>> = useMemo(
        () => [
            {
                label: 'Id',
                key: 'id'
            },
            {
                label: 'Name',
                key: 'name'
            },
            {
                label: 'Count',
                key: 'count',
                variant: 'number'
            }
        ],
        []
    );

    const getRowKey = useCallback((row: IBasicFixture) => row.id, []);

    return (
        <DataTable<IBasicFixture>
            className="story-table"
            rows={rows}
            columns={columns}
            getRowKey={getRowKey}
            withStickyHeader
        />
    );
};

export const StickyHeader = StickyHeaderTemplate.bind({});

const ClickOnRowTemplate: Story = () => {
    const rows = generateBasicRows(5);

    const columns: Array<IDataTableColumn<IBasicFixture>> = useMemo(
        () => [
            {
                label: 'Id',
                key: 'id'
            },
            {
                label: 'Name',
                key: 'name'
            },
            {
                label: 'Count',
                key: 'count',
                variant: 'number'
            }
        ],
        []
    );

    const getRowKey = useCallback((row: IBasicFixture) => row.id, []);

    return (
        <DataTable<IBasicFixture> columns={columns} rows={rows} getRowKey={getRowKey} onRowClick={action('Click!')} />
    );
};

export const ClickOnRow = ClickOnRowTemplate.bind({});

const SortingTemplate: Story = () => {
    const [rows, setRows] = useState<Array<IBasicFixture>>(() => generateBasicRows(10));

    const [key, setKey] = useState<'name' | 'count' | undefined>();
    const [direction, setDirection] = useState<TTableSortDirection | undefined>();

    const countSorter =
        (dir: TTableSortDirection) =>
        (a: IBasicFixture, b: IBasicFixture): number =>
            dir === 'asc' ? a.count - b.count : b.count - a.count;

    const nameSorter =
        (dir: TTableSortDirection) =>
        (a: IBasicFixture, b: IBasicFixture): number =>
            dir === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);

    const handleSortByCount = useCallback((nextDirection: TTableSortDirection): void => {
        setKey('count');
        setDirection(nextDirection);
        setRows(prevData => prevData.sort(countSorter(nextDirection)));
    }, []);

    const handleSortByName = useCallback((nextDirection: TTableSortDirection): void => {
        setKey('name');
        setDirection(nextDirection);
        setRows(prevData => prevData.sort(nameSorter(nextDirection)));
    }, []);

    const columns: Array<IDataTableColumn<IBasicFixture>> = useMemo(
        () => [
            {
                label: 'Id',
                key: 'id'
            },
            {
                label: 'Name',
                key: 'name',
                isSortable: true,
                sortDirection: key === 'name' ? direction : undefined,
                onSort: handleSortByName
            },
            {
                label: 'Count',
                key: 'count',
                variant: 'number',
                isSortable: true,
                sortDirection: key === 'count' ? direction : undefined,
                onSort: handleSortByCount
            }
        ],
        [key, direction, handleSortByName, handleSortByCount]
    );

    const getRowKey = useCallback((row: IBasicFixture) => row.id, []);

    return <DataTable<IBasicFixture> columns={columns} rows={rows} getRowKey={getRowKey} />;
};

export const Sorting = SortingTemplate.bind({});

const CustomCellTemplate: Story = () => {
    const rows = generateCustomCellRows(15);

    const columns: Array<IDataTableColumn<ICustomCellFixture>> = useMemo(
        () => [
            {
                label: 'Id',
                key: 'id'
            },
            {
                label: 'Name',
                key: 'name'
            },
            {
                label: 'Count',
                key: 'count',
                variant: 'number'
            },
            {
                key: 'date',
                render: row => row.date.toLocaleDateString(),
                renderLabel: () => (
                    <Text theme="warning" size="s">
                        Date
                    </Text>
                )
            },
            {
                label: 'Status',
                key: 'status',
                render: row => <Badge theme={row.status === 'success' ? 'success' : 'danger'}>{row.status}</Badge>
            }
        ],
        []
    );

    const getRowKey = useCallback((row: ICustomCellFixture) => row.id, []);

    return <DataTable<ICustomCellFixture> columns={columns} rows={rows} getRowKey={getRowKey} />;
};

export const CustomCell = CustomCellTemplate.bind({});

const CustomRowsTemplate: Story = () => {
    const rows = generateCustomCellRows(15);

    const columns: Array<IDataTableColumn<ICustomCellFixture>> = useMemo(
        () => [
            {
                label: 'Id',
                key: 'id'
            },
            {
                label: 'Name',
                key: 'name'
            },
            {
                label: 'Count',
                key: 'count',
                variant: 'number'
            },
            {
                label: 'Date',
                key: 'date',
                render: row => row.date.toLocaleDateString()
            },
            {
                label: 'Status',
                key: 'status',
                render: row => <Badge theme={row.status === 'success' ? 'success' : 'danger'}>{row.status}</Badge>
            }
        ],
        []
    );

    const getRowKey = useCallback((row: ICustomCellFixture) => row.id, []);

    const rowRendererSelector = useCallback((row, key) => key % 2 === 0, []);

    const renderRow = (row: ICustomCellFixture): JSX.Element => (
        <DataTableRow<ICustomCellFixture>
            key={getRowKey(row)}
            row={row}
            getRowKey={getRowKey}
            columns={columns}
            isSelected
        />
    );

    return (
        <DataTable<ICustomCellFixture>
            columns={columns}
            rows={rows}
            getRowKey={getRowKey}
            selectCustomRow={rowRendererSelector}
            renderCustomRow={renderRow}
        />
    );
};

export const CustomRows = CustomRowsTemplate.bind({});

const SelectableRowsTemplate: Story = () => {
    const [rows, setRows] = useState<Array<ISelectableFixture>>(() => generateSelectableRows(10));

    const handleChange = useCallback(
        (rowId: number) => (event: ChangeEvent<HTMLInputElement>) => {
            const index = rows.findIndex(r => r.id === rowId);
            const isSelected = event.target.checked;

            if (index !== -1) {
                setRows(prevRows => [
                    ...prevRows.slice(0, index),
                    {
                        ...prevRows[index],
                        isSelected
                    },
                    ...prevRows.slice(index + 1)
                ]);
            }
        },
        [rows]
    );

    const handleAllRowsChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const isSelected = event.target.checked;

        setRows(prevRows => prevRows.map(r => ({ ...r, isSelected })));
    }, []);

    const columns: Array<IDataTableColumn<ISelectableFixture>> = useMemo(
        () => [
            {
                render: row => <CheckBox isChecked={row.isSelected} onChange={handleChange(row.id)} />,
                renderLabel() {
                    const isChecked = rows.every(r => r.isSelected);
                    const isIndeterminate = rows.some(r => r.isSelected) && !isChecked;

                    return (
                        <CheckBox
                            isChecked={isIndeterminate ? undefined : isChecked}
                            isIndeterminate={isChecked ? undefined : isIndeterminate}
                            onChange={handleAllRowsChange}
                        />
                    );
                },
                variant: 'checkbox'
            },
            {
                label: 'Id',
                key: 'id'
            },
            {
                label: 'Name',
                key: 'name'
            },
            {
                label: 'Count',
                key: 'count',
                variant: 'number'
            }
        ],
        [handleChange, rows]
    );

    const getRowKey = useCallback((row: ISelectableFixture) => row.id, []);

    const getRowClassName = useCallback((row: ISelectableFixture) => (row.isSelected ? 'selected' : undefined), []);

    return (
        <DataTable<ISelectableFixture>
            columns={columns}
            rows={rows}
            getRowKey={getRowKey}
            getRowClassName={getRowClassName}
        />
    );
};

export const SelectableRows = SelectableRowsTemplate.bind({});

const ExpandableRowsTemplate: Story = () => {
    const expandableRowIds = [1, 3, 5];
    const [expandedRowIds, setExpandedRowIds] = useState<Array<number>>([3]);
    const rows = generateExpandableRows(10);

    const selectCustomRow = useCallback(
        (row: IExpandableFixture) => expandableRowIds.includes(row.id),
        [expandableRowIds]
    );

    const handleExpand = useCallback(
        (rowId: number) => () => {
            setExpandedRowIds(prevRowIds => {
                if (prevRowIds.includes(rowId)) {
                    return prevRowIds.filter(id => id !== rowId);
                }

                return [...prevRowIds, rowId];
            });
        },
        []
    );

    const columns: Array<IDataTableColumn<IExpandableFixture>> = useMemo(
        () => [
            {
                className: 'story-action-column',
                render: row => (selectCustomRow(row) ? <TableExpandButton onClick={handleExpand(row.id)} /> : null)
            },
            {
                label: 'Id',
                key: 'id'
            },
            {
                label: 'Name',
                key: 'name'
            },
            {
                label: 'Count',
                key: 'count',
                variant: 'number'
            }
        ],
        []
    );

    const getRowKey = useCallback((row: IExpandableFixture) => row.id, []);

    const renderCustomRow = (row: IExpandableFixture): JSX.Element => (
        <ExpandableDataTableRow<IExpandableFixture>
            key={getRowKey(row)}
            row={row}
            getRowKey={getRowKey}
            columns={columns}
            isExpanded={expandedRowIds.includes(row.id)}
        >
            <Text theme="warning">Put content here!</Text>
        </ExpandableDataTableRow>
    );

    return (
        <DataTable<IExpandableFixture>
            columns={columns}
            rows={rows}
            getRowKey={getRowKey}
            selectCustomRow={selectCustomRow}
            renderCustomRow={renderCustomRow}
        />
    );
};

export const ExpandableRows = ExpandableRowsTemplate.bind({});

const WithPaginationTemplate: Story = () => {
    const pageSize = 10;
    const { currentPage, pagesTotal, fromIndex, goNext, goPrevious, change } = usePaginationState(1, pageSize, 100);

    const rows = generateBasicRows(pageSize, fromIndex);

    const columns: Array<IDataTableColumn<IBasicFixture>> = useMemo(
        () => [
            {
                label: 'Id',
                key: 'id'
            },
            {
                label: 'Name',
                key: 'name'
            },
            {
                label: 'Count',
                key: 'count',
                variant: 'number'
            }
        ],
        []
    );

    const options = useMemo(
        () =>
            Array.from({ length: pagesTotal }).map((_: unknown, index: number) => ({
                value: index + 1,
                label: `Page ${index + 1} of ${pagesTotal}`
            })),
        [pagesTotal]
    );

    const getRowKey = useCallback((row: IBasicFixture) => row.id, []);

    return (
        <DataTable<IBasicFixture> rows={rows} columns={columns} getRowKey={getRowKey}>
            <DataTableFooter>
                <Pagination
                    currentPage={currentPage}
                    pagesTotal={pagesTotal}
                    options={options}
                    onChange={change}
                    onNext={goNext}
                    onPrevious={goPrevious}
                />
            </DataTableFooter>
        </DataTable>
    );
};

export const WithPagination = WithPaginationTemplate.bind({});
