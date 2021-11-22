import React from 'react';
import styles from './picker-select-time.module.scss';

import { Input } from '../../../index';

export interface PickerSelectTimeProps {
  id: string;
  time: Time;
  setTime: (time: Time) => void;
}

type Time = {
  hours: number;
  minutes: number;
};

export const PickerSelectTime = ({ id, time, setTime }: PickerSelectTimeProps) => {
  const hours = time?.hours || 0;
  const minutes = time?.minutes || 0;

  const handleHoursChange = (newTime: number) => {
    if (newTime > 23) return setTime({ hours: 23, minutes });
    if (newTime < 0) return setTime({ hours: 0, minutes });
    setTime({ hours: newTime, minutes });
  };

  const incrementHours = () => {
    hours < 23 ? setTime({ hours: hours + 1, minutes }) : setTime({ hours: 0, minutes });
  };

  const decrementHours = () => {
    hours > 0 ? setTime({ hours: hours - 1, minutes }) : setTime({ hours: 23, minutes });
  };

  const handleMinutesChange = (newTime: number) => {
    if (newTime > 59) return setTime({ hours, minutes: 59 });
    if (newTime < 0) return setTime({ hours, minutes: 0 });
    setTime({ hours, minutes: newTime });
  };

  const incrementMinutes = () => {
    minutes < 59 ? setTime({ hours, minutes: minutes + 1 }) : setTime({ hours, minutes: 0 });
  };

  const decrementMinutes = () => {
    minutes > 0 ? setTime({ hours, minutes: minutes - 1 }) : setTime({ hours, minutes: 59 });
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <Input
          type="number"
          id={`${id}-hours`}
          value={hours < 10 ? `0${hours}` : `${hours}`}
          setValue={handleHoursChange}
          increment={incrementHours}
          decrement={decrementHours}
          longPressDelay={100}
        />
        <label htmlFor={`${id}-hours`} className={styles.label}>
          Часов
        </label>
      </div>
      <div className={styles.inputWrapper}>
        <Input
          type="number"
          id={`${id}-minutes`}
          value={minutes < 10 ? `0${minutes}` : `${minutes}`}
          setValue={handleMinutesChange}
          increment={incrementMinutes}
          decrement={decrementMinutes}
          longPressDelay={100}
        />
        <label htmlFor={`${id}-minutes`} className={styles.label}>
          Минут
        </label>
      </div>
    </div>
  );
};
