import React, { ReactNode } from 'react';
import styles from './table-header.module.scss';
import cn from 'classnames';

import { Input } from '../../../index';

export interface TableHeaderProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  handleDownload: () => void;
  headerSlot?: ReactNode;
  isCondensed?: boolean;
}

export const TableHeader = ({ searchQuery, setSearchQuery, isCondensed = false, headerSlot }: TableHeaderProps) => {
  const headerClassName = cn({ [styles.condensed]: isCondensed }, styles.header);

  return (
    <header className={headerClassName}>
      <Input
        placeholder="Search by name"
        id="table-search"
        type="search"
        value={searchQuery}
        setValue={setSearchQuery}
        isCondensed
      />
      {headerSlot}
    </header>
  );
};
