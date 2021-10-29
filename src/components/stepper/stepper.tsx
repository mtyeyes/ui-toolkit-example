import React from 'react';
import styles from './stepper.module.scss';
import cn from 'classnames';

export interface StepperProps {
  id: string;
  stepsTotal: number;
  selectedStep: number;
  setSelectedStep: (num: number) => void;
}

export const Stepper = ({ id, stepsTotal, selectedStep, setSelectedStep }: StepperProps) => {
  const mapStepsCallback = (blank: any, i: number) => {
    const step = i + 1;
    const isSelected = step === selectedStep;
    const itemId = `${id}-${step}-step`;

    const handleChange = () => {
      setSelectedStep(step);
    };

    return (
      <>
        {step !== 1 && <div className={styles.line} />}
        <li className={styles.item} key={step}>
          <input
            className={styles.input}
            checked={isSelected}
            id={itemId}
            onChange={handleChange}
            type="radio"
            name={id}
          />
          <label
            className={cn(
              {
                [styles.selected]: isSelected,
                [styles.previous]: step < selectedStep,
                [styles.next]: step > selectedStep,
              },
              styles.label,
            )}
            htmlFor={itemId}
          >
            {step}
          </label>
        </li>
      </>
    );
  };

  return <ul className={styles.list}>{[...Array(stepsTotal)].map(mapStepsCallback)}</ul>;
};
