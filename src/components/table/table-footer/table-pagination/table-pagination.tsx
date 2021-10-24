import React from 'react';
import styles from './table-pagination.module.scss';

import { Button, Input } from '../../../../index';
import ArrowLeft from '../../../../resources/icons/arrow-left.svg';
import ArrowRight from '../../../../resources/icons/arrow-right.svg';

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
      <p className={styles.caption}>Rows per page</p>
      <Input
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
      <p className={styles.caption}>{`${selectedPage * rowsPerPage + 1}-${
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
          iconSrc={ArrowLeft}
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
          iconSrc={ArrowRight}
          size="medium"
        />
      </div>
    </div>
  );
};
