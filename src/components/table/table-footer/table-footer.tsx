import React, { ReactNode } from 'react';
import styles from './table-footer.module.scss';
import cn from 'classnames';

import { TablePagination, TablePaginationProps } from './table-pagination/table-pagination';

export interface TableFooterProps extends TablePaginationProps {
  footerSlot?: ReactNode;
  isCondensed?: boolean;
}

export const TableFooter = ({ footerSlot, isCondensed = false, ...tablePaginationProps }: TableFooterProps) => {
  const footerClassName = cn({ [styles.condensed]: isCondensed }, styles.footer);

  return (
    <footer className={footerClassName}>
      {footerSlot}
      <TablePagination {...tablePaginationProps} />
    </footer>
  );
};
