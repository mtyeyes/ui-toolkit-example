import React from 'react';
import styles from './dotnav.module.scss';
import cn from 'classnames';

export interface DotnavProps {
  id: string;
  numberOfItems: number;
  selectedItem: number;
  setSelectedItem: (num: number) => void;
}

export const Dotnav = ({ id, numberOfItems, selectedItem, setSelectedItem }: DotnavProps) => {
  const mapItemsCallback = (blank: any, i: number) => {
    const isSelected = i === selectedItem;
    const itemId = `${id}-${i}-dotnav`;

    const handleChange = () => {
      setSelectedItem(i);
    };

    return (
      <li className={styles.item} key={i}>
        <input
          className={styles.input}
          checked={isSelected}
          id={itemId}
          onChange={handleChange}
          type="radio"
          name={id}
        />
        <label className={cn({ [styles.selected]: isSelected }, styles.label)} htmlFor={itemId} />
      </li>
    );
  };

  return <ul className={styles.list}>{[...Array(numberOfItems)].map(mapItemsCallback)}</ul>;
};
