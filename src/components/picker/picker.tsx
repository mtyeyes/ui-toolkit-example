import React from 'react';
import styles from './picker.module.scss';
import cn from 'classnames';

import { PickerSelectTime, PickerSelectTimeProps } from './picker-select-time/picker-select-time';
import { PickerSelectDay, PickerSelectDayProps } from './picker-select-day/picker-select-day';
import { PickerSelectYear, PickerSelectYearProps } from './picker-select-year/picker-select-year';
import { EventsInfo } from './picker-controls/picker-controls';

export type PickerProps = PickerDate | PickerDateRange | PickerDateAndTime | PickerTime | PickerYear;

type PickerDate = Omit<PickerSelectDayProps, 'selectedDate' | 'setSelectedDate'> &
  CommonPickerProps & {
    valueType: 'date';
    value: Date;
    setValue: (value: Date) => void;
  };

type PickerDateRange = Omit<
  PickerSelectDayProps,
  'selectedDate' | 'setSelectedDate' | 'monthEventsInfo' | 'handleMonthChange'
> &
  CommonPickerProps & {
    valueType: 'date range';
    value: { startDate: Date; endDate: Date };
    setValue: (value: { startDate: Date; endDate: Date }) => void;
    eventsInfo: { startMonthEvents: EventsInfo[]; endMonthEvents: EventsInfo[] };
    onMonthChange: (value: { month: number; year: number }, target: 'start' | 'end') => void;
  };

type PickerDateAndTime = Omit<PickerSelectDayProps, 'selectedDate' | 'setSelectedDate'> &
  Omit<PickerSelectTimeProps, 'time' | 'setTime'> &
  CommonPickerProps & {
    valueType: 'date and time';
    value: { date: Date; time: { hours: number; minutes: number } };
    setValue: (value: { date: Date; time: { hours: number; minutes: number } }) => void;
  };

type PickerTime = Omit<PickerSelectTimeProps, 'time' | 'setTime'> &
  CommonPickerProps & {
    valueType: 'time';
    value: { hours: number; minutes: number };
    setValue: (value: { hours: number; minutes: number }) => void;
  };

type PickerYear = Omit<PickerSelectYearProps, 'selectedYear' | 'setSelectedYear'> &
  CommonPickerProps & {
    valueType: 'year';
    value: number;
    setValue: (value: number) => void;
  };

interface CommonPickerProps {
  isVisible?: boolean;
}

export const Picker = (props: PickerProps) => {
  const containerClassName = cn(
    {
      [styles.visible]: props.isVisible,
      [styles.horizontal]: props.valueType === 'date range',
    },
    styles.container,
  );

  const renderControls = () => {
    if (props.valueType === 'year') {
      const { valueType, isVisible, value, setValue, ...pickerProps } = props;

      return <PickerSelectYear selectedYear={value} setSelectedYear={setValue} {...pickerProps} />;
    }
    if (props.valueType === 'time') {
      const { valueType, isVisible, value, setValue, ...pickerProps } = props;

      return <PickerSelectTime time={value} setTime={setValue} {...pickerProps} />;
    }
    if (props.valueType === 'date and time') {
      const { valueType, isVisible, id, value, setValue, ...selectDayProps } = props;

      return (
        <>
          <PickerSelectDay
            selectedDate={value?.date}
            setSelectedDate={(date) => {
              setValue({ time: value?.time, date });
            }}
            {...selectDayProps}
          />
          <PickerSelectTime
            id={id}
            time={value?.time}
            setTime={(time) => {
              setValue({ date: value?.date, time });
            }}
          />
        </>
      );
    }
    if (props.valueType === 'date range') {
      const { valueType, isVisible, value, setValue, eventsInfo, onMonthChange, minDate, maxDate, ...pickerProps } =
        props;
      return (
        <>
          <div>
            <PickerSelectDay
              selectedDate={value?.startDate}
              setSelectedDate={(selectedDate) => {
                setValue({ startDate: selectedDate, endDate: value?.endDate });
              }}
              selectedInterval={
                value?.startDate && value?.endDate ? { start: value.startDate, end: value.endDate } : undefined
              }
              monthEventsInfo={eventsInfo.startMonthEvents}
              handleMonthChange={(month, year) => {
                onMonthChange({ month, year }, 'start');
              }}
              minDate={minDate}
              maxDate={value?.endDate < maxDate ? value.endDate : maxDate}
              {...pickerProps}
            />
          </div>
          <div className={styles.separator} />
          <div>
            <PickerSelectDay
              selectedDate={value?.endDate}
              setSelectedDate={(selectedDate) => {
                setValue({ startDate: value?.startDate, endDate: selectedDate });
              }}
              selectedInterval={
                value?.startDate && value?.endDate ? { start: value.startDate, end: value.endDate } : undefined
              }
              monthEventsInfo={eventsInfo.endMonthEvents}
              handleMonthChange={(month, year) => {
                onMonthChange({ month, year }, 'end');
              }}
              minDate={value?.startDate > minDate ? value.startDate : minDate}
              maxDate={maxDate}
              {...pickerProps}
            />
          </div>
        </>
      );
    }
    if (props.valueType === 'date') {
      const { valueType, isVisible, value, setValue, monthEventsInfo, handleMonthChange, ...pickerProps } = props;

      return (
        <PickerSelectDay
          selectedDate={value}
          setSelectedDate={setValue}
          monthEventsInfo={monthEventsInfo}
          handleMonthChange={handleMonthChange}
          {...pickerProps}
        />
      );
    }
  };

  return <div className={containerClassName}>{renderControls()}</div>;
};
