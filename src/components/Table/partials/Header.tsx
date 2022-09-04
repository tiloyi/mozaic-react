import React, { FC } from 'react';
import { ITableHeaderProps } from '../Table.types';

const TableHeader: FC<ITableHeaderProps> = ({ children, ...props }) => <thead {...props}>{children}</thead>;

export default TableHeader;
