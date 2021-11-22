import React from 'react';
import styles from './picker-controls.module.scss';
import cn from 'classnames';

export type PickerControlsProps = YearPickerControlsProps | DayPickerControlsProps;

interface YearPickerControlsProps extends CommonPickerControlsProps {
  dateType: 'year';
}

interface DayPickerControlsProps extends CommonPickerControlsProps {
  dateType?: 'day';
  eventsInfo: EventsInfo;
  'aria-label'?: string;
  'aria-pressed'?: boolean;
  disabled?: boolean;
  role?: 'button';
}

interface CommonPickerControlsProps {
  children: string | number;
  type?: PickerControlsType;
  isIrrelevant?: boolean;
  onClick?: () => void;
}

export type PickerControlsType = 'default' | 'today' | 'selected';

export type EventsInfo = {
  past?: boolean;
  current?: boolean;
  future?: boolean;
};
const eventsOrder: (keyof EventsInfo)[] = ['past', 'current', 'future'];

export const PickerControls = (props: PickerControlsProps) => {
  const { children, dateType = 'day', type = 'default', isIrrelevant = false, onClick } = props;

  const buttonClassName = cn({ [styles.irrelevant]: isIrrelevant }, styles[dateType], styles[type], styles.btn);

  const eventsInfoMapCallback = (event: keyof EventsInfo) => {
    if ((props as DayPickerControlsProps).eventsInfo[event] !== true) return null;
    const indicatorClassname = cn(styles[event], styles.indicator);

    return <span key={event} className={indicatorClassname} />;
  };

  return (
    <button type="button" className={buttonClassName} onClick={onClick} disabled={isIrrelevant}>
      <span className={styles.date}>{children}</span>
      {props.dateType === 'day' && (
        <span className={styles.indicatorsWrapper}>{eventsOrder.map(eventsInfoMapCallback)}</span>
      )}
    </button>
  );
};
