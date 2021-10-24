import React, { useEffect, useState } from 'react';
import styles from './table.module.scss';

import { TableHeader, TableHeaderProps } from './table-header/table-header';
import { TableFooter, TableFooterProps } from './table-footer/table-footer';
import { TableBody, TableBodyProps, RowsData } from './table-body/table-body';

export interface TableProps
  extends TableHeaderProps,
    Pick<TableFooterProps, 'footerSlot' | 'selectableAmountOfRows'>,
    Pick<TableBodyProps, 'isStriped' | 'tableHeaders'> {
  rowsPerPage?: number;
  isCondensed?: boolean;
  children: RowsData;
}

export const Table = ({
  handleDownload,
  searchQuery,
  setSearchQuery,
  rowsPerPage,
  selectableAmountOfRows,
  children,
  tableHeaders,
  headerSlot,
  footerSlot,
  isStriped = false,
  isCondensed = false,
}: TableProps) => {
  const [displayedRowsPerPage, setDisplayedRowsPerPage] = useState(rowsPerPage || 5);
  const [selectedPage, setSelectedPage] = useState(0);

  useEffect(() => {
    setSelectedPage(0);
  }, [rowsPerPage, displayedRowsPerPage]);

  const filterDisplayedRows = (rowData: any, i: number) => {
    return i >= selectedPage * displayedRowsPerPage && i < (selectedPage + 1) * displayedRowsPerPage;
  };

  return (
    <section className={styles.section}>
      <TableHeader
        handleDownload={handleDownload}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        headerSlot={headerSlot}
        isCondensed={isCondensed}
      />
      <TableBody tableHeaders={tableHeaders} isCondensed={isCondensed} isStriped={isStriped}>
        {children.filter(filterDisplayedRows)}
      </TableBody>
      <TableFooter
        footerSlot={footerSlot}
        rowsPerPage={displayedRowsPerPage}
        setRowsPerPage={setDisplayedRowsPerPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        selectableAmountOfRows={selectableAmountOfRows}
        amountOfRows={children.length}
        isCondensed={isCondensed}
      />
    </section>
  );
};
