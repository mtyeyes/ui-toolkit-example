import React, { Fragment, useEffect } from 'react';
import styles from './picker-select-day.module.scss';
import { getDate, isWithinInterval, Interval } from 'date-fns';

import { PickerControls, PickerControlsType, EventsInfo } from '../picker-controls/picker-controls';
import { PickerDayHeaderRow } from './picker-day-header-row/picker-day-header-row';
import { PickerHeader } from '../picker-header/picker-header';
import { useDayzed, DateObj } from 'dayzed';

export interface PickerSelectDayProps {
  minDate: Date;
  maxDate: Date;
  currentDate?: Date;
  selectedDate: Date | undefined;
  setSelectedDate: (newDate: Date) => void;
  monthEventsInfo: EventsInfo[];
  handleMonthChange: (month: number, year: number) => void;
  monthNames?: string[];
  weekdayNames?: string[];
  firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  selectedInterval?: Interval;
}

const monthNamesShort = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];
const weekdayNamesShort = ['п', 'в', 'с', 'ч', 'п', 'с', 'в'];

export const PickerSelectDay = ({
  maxDate,
  minDate,
  currentDate = new Date(),
  selectedDate,
  setSelectedDate,
  monthEventsInfo,
  handleMonthChange,
  monthNames = monthNamesShort,
  weekdayNames = weekdayNamesShort,
  firstDayOfWeek = 1,
  selectedInterval,
}: PickerSelectDayProps) => {
  const dayzedSettings = {
    firstDayOfWeek,
    showOutsideDays: true,
    date: currentDate,
    maxDate,
    minDate,
    selected: selectedDate,
    onDateSelected: (value: DateObj) => {
      setSelectedDate(value.date);
    },
  };

  const { calendars, getBackProps, getForwardProps, getDateProps } = useDayzed(dayzedSettings);

  useEffect(() => {
    handleMonthChange(calendars[0].month, calendars[0].year);
  }, [calendars]);

  if (!calendars.length) return null;
  return (
    <div className={styles.wrapper}>
      {calendars.map((calendar) => {
        const { disabled: isBeforeDisabled, ...beforeSelectProps } = getBackProps({ calendars });
        const { disabled: isAfterDisabled, ...afterSelectProps } = getForwardProps({ calendars });
        return (
          <Fragment key="calendar">
            <PickerHeader
              beforeSelectProps={{ isDisabled: isBeforeDisabled, ...beforeSelectProps }}
              afterSelectProps={{ isDisabled: isAfterDisabled, ...afterSelectProps }}
            >{`${monthNames[calendar.month]}, ${calendar.year}`}</PickerHeader>
            <table className={styles.table}>
              <PickerDayHeaderRow weekdayShorthands={weekdayNames} />
              <tbody>
                {calendar.weeks.map((week, weekIndex) => {
                  const weekKey = `${calendar.month}${calendar.year}${weekIndex}`;

                  const weekdaysMapCallback = (dateObj: '' | DateObj, dayIndex: number) => {
                    if (!dateObj) {
                      return <td className={styles.cell} />;
                    }

                    const { date, selected, today, prevMonth, nextMonth } = dateObj;
                    const currentMonth = prevMonth === false && nextMonth === false;
                    const day = getDate(date);
                    const insideMinMaxRange = isWithinInterval(date, { start: minDate, end: maxDate });

                    const controlsType = ((): PickerControlsType => {
                      if (
                        selected ||
                        (selectedInterval !== undefined && currentMonth && isWithinInterval(date, selectedInterval))
                      )
                        return 'selected';
                      if (today) return 'today';
                      return 'default';
                    })();

                    return (
                      <td className={styles.cell} key={`${weekKey}${dayIndex}${dateObj.nextMonth}${dateObj.prevMonth}`}>
                        <PickerControls
                          dateType="day"
                          type={controlsType}
                          isIrrelevant={!currentMonth || !insideMinMaxRange}
                          eventsInfo={(currentMonth && monthEventsInfo[day - 1]) || {}}
                          {...getDateProps({ dateObj })}
                        >
                          {date.getDate()}
                        </PickerControls>
                      </td>
                    );
                  };

                  return <tr key={weekKey}>{week.map(weekdaysMapCallback)}</tr>;
                })}
              </tbody>
            </table>
          </Fragment>
        );
      })}
    </div>
  );
};
