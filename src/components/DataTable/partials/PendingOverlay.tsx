import React from 'react';
import Flex from '../../Flex';
import Loader from '../../Loader';
import './PendingOverlay.scss';

const DataTablePendingOverlay = (): JSX.Element => (
    <Flex className="mc-datatable__pending-overlay" alignItems="center" justifyContent="center">
        <Loader size="l" />
    </Flex>
);

export default DataTablePendingOverlay;
