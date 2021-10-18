import React, { FC, SVGAttributes } from 'react';
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
  icon: FC<SVGAttributes<SVGAElement>>;
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
        <Toggle {...props} />
      ) : (
        <button type="button" tabIndex={props.tabIndex} className={styles.btn} onClick={props.onClick}>
          {props.type === 'icon' && <props.icon className={cn(styles[`${props.iconAlignment}`], styles.icon)} />}
          <span className={styles.text}>{props.children}</span>
        </button>
      )}
    </li>
  );
};