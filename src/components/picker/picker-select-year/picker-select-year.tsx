import React, { useState } from 'react';
import styles from './picker-select-year.module.scss';
import { getYear } from 'date-fns';

import { PickerHeader } from '../picker-header/picker-header';
import { PickerControls, PickerControlsType } from '../picker-controls/picker-controls';

export interface PickerSelectYearProps {
  minDate: number;
  maxDate: number;
  currentYear?: number;
  yearOffset?: number;
  selectedYear?: number;
  setSelectedYear: (newYear: number) => void;
}

export const PickerSelectYear = ({
  minDate,
  maxDate,
  currentYear = getYear(Date.now()),
  yearOffset = 2,
  selectedYear,
  setSelectedYear,
}: PickerSelectYearProps) => {
  const [page, setPage] = useState(0);
  const yearsPerPage = 12;

  const yearSelectMapCallback = (blank: any, i: number) => {
    const year = currentYear + i - yearOffset + yearsPerPage * page;
    const yearType = ((): PickerControlsType => {
      if (year === selectedYear) return 'selected';
      if (year === currentYear) return 'today';
      return 'default';
    })();

    return (
      <li key={year}>
        <PickerControls
          dateType="year"
          type={yearType}
          isIrrelevant={year < minDate || year > maxDate}
          onClick={() => {
            setSelectedYear(year);
          }}
        >
          {year}
        </PickerControls>
      </li>
    );
  };

  return (
    <>
      <div className={styles.headerWrapper}>
        <PickerHeader
          beforeSelectProps={{
            onClick: () => setPage((curentPage) => --curentPage),
            disabled: currentYear > minDate && currentYear - yearOffset + yearsPerPage * page < minDate,
          }}
          afterSelectProps={{
            onClick: () => setPage((curentPage) => ++curentPage),
            disabled: currentYear < maxDate && currentYear - yearOffset + yearsPerPage * (page + 1) > maxDate,
          }}
        >{`${currentYear - yearOffset + yearsPerPage * page} - ${
          currentYear - yearOffset + yearsPerPage * (page + 1)
        }`}</PickerHeader>
      </div>
      <ul className={styles.controlsList}>{[...Array(yearsPerPage)].map(yearSelectMapCallback)}</ul>
    </>
  );
};
