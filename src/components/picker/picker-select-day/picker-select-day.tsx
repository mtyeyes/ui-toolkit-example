import React, { Fragment, useEffect } from 'react';
import styles from './picker-select-day.module.scss';
import { getDate, add, isSameDay, isWithinInterval } from 'date-fns';

import { PickerControls, PickerControlsType, EventsInfo } from '../picker-controls/picker-controls';
import { PickerDayHeaderRow } from './picker-day-header-row/picker-day-header-row';
import { PickerHeader } from '../picker-header/picker-header';
import { useDayzed, DateObj } from 'dayzed';

export interface PickerSelectDayProps {
  minDate: Date;
  maxDate: Date;
  currentDate?: Date;
  selectedDate: Date | Date[] | undefined;
  setSelectedDate: (newDate: Date) => void;
  monthEventsInfo: EventsInfo[];
  handleMonthChange: (month: number, year: number) => void;
  monthNames?: string[];
  weekdayNames?: string[];
  firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
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

  const fillCalendarToNWeeks = (weeks: DateObj[][], total: number): DateObj[][] => {
    const weeksTotal = weeks.length;
    if (weeksTotal === total) return weeks;
    const weeksToGenerate = total - weeksTotal;

    const generatedWeeks = [...weeks];

    for (let i = 0; i < weeksToGenerate; i++) {
      const generateWeek = () => {
        const lastWeek = generatedWeeks[generatedWeeks.length - 1];
        const lastDayOfTheLastWeek = lastWeek[lastWeek.length - 1];

        return [...Array(7)].map((blank: any, dayIndex: number): DateObj => {
          const generatedDate = add(lastDayOfTheLastWeek.date, { days: dayIndex + 1 });
          return {
            date: generatedDate,
            nextMonth: true,
            prevMonth: false,
            selectable: false,
            selected: false,
            today: isSameDay(generatedDate, currentDate),
          };
        });
      };

      generatedWeeks.push(generateWeek());
    }

    return generatedWeeks;
  };

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
                {fillCalendarToNWeeks(calendar.weeks as DateObj[][], 6).map((week, weekIndex) => {
                  const weekKey = `${calendar.month}${calendar.year}${weekIndex}`;

                  const weekdaysMapCallback = (dateObj: '' | DateObj, dayIndex: number) => {
                    if (!dateObj) {
                      return <td className={styles.cell} />;
                    }

                    const { date, selected, prevMonth, nextMonth } = dateObj;
                    const currentMonth = prevMonth === false && nextMonth === false;
                    const day = getDate(date);
                    const insideMinMaxRange = isWithinInterval(date, { start: minDate, end: maxDate });

                    const controlsType = ((): PickerControlsType => {
                      if (selected) return 'selected';
                      if (isSameDay(currentDate, date)) return 'today';
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
