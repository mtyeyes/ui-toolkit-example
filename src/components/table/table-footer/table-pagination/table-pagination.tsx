import React from 'react';
import styles from './table-pagination.module.scss';
import cn from 'classnames';

import { Button, Input } from '../../../../index';
import { ArrowRight, ArrowLeft } from 'phosphor-react';
// import ArrowLeft from '../../../../resources/icons/arrow-left.svg';
// import ArrowRight from '../../../../resources/icons/arrow-right.svg';

export interface TablePaginationProps {
  rowsPerPage: number;
  setRowsPerPage: (numOfRows: number) => void;
  selectedPage: number;
  setSelectedPage: (page: number) => void;
  selectableAmountOfRows: string[];
  amountOfRows: number;
}

export const TablePagination = ({
  rowsPerPage,
  setRowsPerPage,
  selectedPage,
  setSelectedPage,
  selectableAmountOfRows,
  amountOfRows,
}: TablePaginationProps) => {
  const isPreviousPageAvailable = selectedPage !== 0;
  const isNextPageAvailable = selectedPage * rowsPerPage + rowsPerPage < amountOfRows;

  return (
    <div className={styles.paginationWrapper}>
      <div className={styles.inputContainer}>
        <p className={styles.text}>Rows per page</p>
        <Input
          className={styles.input}
          type="select"
          id="table-rows-select"
          value={rowsPerPage.toString()}
          setValue={(value: string | null) => {
            if (value !== null) {
              setRowsPerPage(+value);
            }
          }}
          selectableValues={selectableAmountOfRows || ['5', '10']}
        />
      </div>
      <p className={cn(styles.text, styles.caption)}>{`${selectedPage * rowsPerPage + 1}-${
        selectedPage * rowsPerPage + rowsPerPage < amountOfRows
          ? selectedPage * rowsPerPage + rowsPerPage
          : amountOfRows
      } of ${amountOfRows}`}</p>
      <div className={styles.btnWrapper}>
        <Button
          onClick={() => {
            if (isPreviousPageAvailable) setSelectedPage(selectedPage - 1);
          }}
          isDisabled={!isPreviousPageAvailable}
          theme="onLight"
          impact="none"
          icon="only"
          iconComponent={<ArrowLeft size="24px" />}
          size="medium"
        />
        <Button
          onClick={() => {
            if (isNextPageAvailable) setSelectedPage(selectedPage + 1);
          }}
          isDisabled={!isNextPageAvailable}
          theme="onLight"
          impact="none"
          icon="only"
          iconComponent={<ArrowRight size="24px" />}
          size="medium"
        />
      </div>
    </div>
  );
};
