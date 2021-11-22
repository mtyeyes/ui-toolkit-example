import React from 'react';
import styles from './picker.module.scss';
import cn from 'classnames';
import { eachDayOfInterval, isBefore, isAfter } from 'date-fns';

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

      const getSelectedDates = () => {
        if (value?.startDate && value?.endDate) {
          return eachDayOfInterval({ start: value.startDate, end: value.endDate });
        }
        if (value?.startDate) return value.startDate;
        if (value?.endDate) return value.endDate;
        return undefined;
      };

      return (
        <>
          <div>
            <PickerSelectDay
              selectedDate={getSelectedDates()}
              setSelectedDate={(selectedDate) => {
                if (value?.endDate && isAfter(selectedDate, value.endDate)) {
                  return setValue({ startDate: value.endDate, endDate: selectedDate });
                }
                setValue({ startDate: selectedDate, endDate: value?.endDate });
              }}
              monthEventsInfo={eventsInfo.startMonthEvents}
              handleMonthChange={(month, year) => {
                onMonthChange({ month, year }, 'start');
              }}
              minDate={minDate}
              maxDate={maxDate}
              {...pickerProps}
            />
          </div>
          <div className={styles.separator} />
          <div>
            <PickerSelectDay
              selectedDate={getSelectedDates()}
              setSelectedDate={(selectedDate) => {
                if (value?.startDate && isBefore(selectedDate, value.startDate)) {
                  return setValue({ startDate: selectedDate, endDate: value.startDate });
                }
                setValue({ startDate: value?.startDate, endDate: selectedDate });
              }}
              monthEventsInfo={eventsInfo.endMonthEvents}
              handleMonthChange={(month, year) => {
                onMonthChange({ month, year }, 'end');
              }}
              minDate={minDate}
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
