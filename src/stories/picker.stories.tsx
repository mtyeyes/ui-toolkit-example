import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Picker, PickerProps } from '../index';

export default {
  title: 'Picker',
  component: Picker,
} as ComponentMeta<typeof Picker>;

const Template: ComponentStory<typeof Picker> = (args) => {
  const [value, setValue] = useState(undefined);
  return (
    <>
      <div style={{ width: '50px', height: '50px', position: 'relative', backgroundColor: 'var(--color-gray-60)' }}>
        <Picker value={value} setValue={setValue} {...args} />
      </div>
    </>
  );
};

export const datePicker = Template.bind({});
datePicker.args = {
  isVisible: true,
  valueType: 'date',
  maxDate: new Date(2022, 8, 13),
  minDate: new Date(2021, 1, 13),
  handleMonthChange: (month, year) => {},
  monthEventsInfo: [
    { current: true },
    { future: true, past: true },
    {},
    {},
    { current: true, past: true, future: true },
    {},
    { future: false },
  ],
} as PickerProps;

export const dateAndTimePicker = Template.bind({});
dateAndTimePicker.args = {
  isVisible: true,
  valueType: 'date and time',
  maxDate: new Date(2022, 8, 13),
  minDate: new Date(2021, 1, 13),
  handleMonthChange: (month, year) => {},
  monthEventsInfo: [
    { current: true },
    { future: true, past: true },
    {},
    {},
    { current: true, past: true, future: true },
    {},
    { future: false },
  ],
  id: 'uniq',
} as PickerProps;

export const dateRange = Template.bind({});
dateRange.args = {
  isVisible: true,
  valueType: 'date range',
  maxDate: new Date(2022, 8, 13),
  minDate: new Date(2021, 1, 13),
  eventsInfo: {
    startMonthEvents: [
      { current: true },
      { future: true, past: true },
      {},
      {},
      { current: true, past: true, future: true },
      {},
      { future: false },
    ],
    endMonthEvents: [
      { current: true },
      { future: true, past: true },
      {},
      {},
      { current: true, past: true, future: true },
      {},
      { future: false },
    ],
  },
} as PickerProps;

export const timePicker = Template.bind({});
timePicker.args = {
  isVisible: true,
  valueType: 'time',
  id: 'uniq',
} as PickerProps;

export const yearPicker = Template.bind({});
yearPicker.args = {
  isVisible: true,
  valueType: 'year',
  maxDate: 2035,
  minDate: 1975,
  currentYear: 2021,
} as PickerProps;
