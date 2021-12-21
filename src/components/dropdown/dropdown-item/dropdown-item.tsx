import React, { ReactNode } from 'react';
import styles from './dropdown-item.module.scss';
import cn from 'classnames';

import { ToggleProps, Toggle } from '../../../index';

export type DropdownItemProps = DropDownToggleItem | DropDownIconItem | DropDownLabelItem;

type DropDownToggleItem = ToggleProps & ItemWithKey;

interface DropDownIconItem extends LabelWithIcon, ItemWithKey {
  type: 'icon';
}

interface DropDownLabelItem extends LabelWithoutIcon, ItemWithKey {
  type: 'label';
}

interface LabelWithIcon extends LabelWithoutIcon {
  iconComponent: ReactNode;
  iconAlignment?: 'left' | 'right';
}

interface LabelWithoutIcon {
  isCurrent?: boolean;
  tabIndex?: number;
  onClick: () => void;
  children: string;
}

interface ItemWithKey {
  key: string;
}

export const DropdownItem = (props: DropdownItemProps) => {
  const itemClassName = cn(
    {
      [styles.current]: 'isCurrent' in props && props.isCurrent === true,
      [styles.borderInset]: props.type !== 'icon' && props.type !== 'label',
    },
    styles.item,
  );

  return (
    <li className={itemClassName}>
      {props.type !== 'icon' && props.type !== 'label' ? (
        <Toggle className={cn(styles.toggle, props.className)} {...props} />
      ) : (
        <button type="button" tabIndex={props.tabIndex} className={styles.btn} onClick={props.onClick}>
          {props.type === 'icon' && (
            <div className={cn(styles.iconWrapper, cn(styles[`${props.iconAlignment}`]))}>{props.iconComponent}</div>
          )}
          <span className={styles.text}>{props.children}</span>
        </button>
      )}
    </li>
  );
};
