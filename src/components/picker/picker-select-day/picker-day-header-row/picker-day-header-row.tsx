import React from 'react';
import styles from './picker-day-header-row.module.scss';

export interface PickerDayHeaderRowProps {
  weekdayShorthands: string[];
}

export const PickerDayHeaderRow = ({ weekdayShorthands }: PickerDayHeaderRowProps) => {
  const weekdayShorthandsMapCallback = (day: string, i: number) => {
    return (
      <th key={`${day}${i}`} className={styles.heading}>
        {day}
      </th>
    );
  };

  return (
    <thead>
      <tr className={styles.row}>{weekdayShorthands.map(weekdayShorthandsMapCallback)}</tr>
    </thead>
  );
};
