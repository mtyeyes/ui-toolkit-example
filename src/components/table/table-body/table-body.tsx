import React from 'react';
import styles from './table-body.module.scss';
import cn from 'classnames';

import { TableCell, SpecificTableCellProps } from './table-cell/table-cell';

export interface TableBodyProps {
  children: RowsData;
  tableHeaders?: RowData;
  isCondensed?: boolean;
  isStriped?: boolean;
}

export type RowsData = RowData[];

interface RowData {
  isRowSelected: boolean;
  rowData: (SpecificTableCellProps & TableCellKey)[];
}

interface TableCellKey {
  key: string;
}

export const TableBody = ({ children, tableHeaders, isCondensed = false, isStriped = false }: TableBodyProps) => {
  const headersMapCallback = ({ key, ...headerData }: SpecificTableCellProps & TableCellKey) => {
    return <TableCell key={key} isCondensed={isCondensed} isHeader={true} {...headerData} />;
  };

  const rowsMapCallback = ({ isRowSelected, rowData }: RowData) => {
    const rowKey = rowData.reduce((prevValue, curValue) => {
      return prevValue + curValue.key;
    }, '');
    return (
      <tr key={rowKey} className={cn({ [styles.selected]: isRowSelected }, styles.row)}>
        {rowData.map(({ key, ...cellData }) => (
          <TableCell key={key} isCondensed={isCondensed} isHeader={false} {...(cellData as SpecificTableCellProps)} />
        ))}
      </tr>
    );
  };

  const tableClassName = cn(
    {
      [styles.condensed]: isCondensed,
      [styles.stripped]: isStriped,
    },
    styles.table,
  );

  return (
    <div className={styles.overflowContainer}>
      <table className={tableClassName}>
        {tableHeaders !== undefined && (
          <thead>
            <tr className={cn({ [styles.selected]: tableHeaders.isRowSelected }, styles.row, styles.headerRow)}>
              {tableHeaders.rowData.map(headersMapCallback)}
            </tr>
          </thead>
        )}
        <tbody>{children.map(rowsMapCallback)}</tbody>
      </table>
    </div>
  );
};
