import React, { ReactNode } from 'react';
import styles from './menu-item.module.scss';
import cn from 'classnames';

export type MenuItemProps = MenuItemWithIconProps | MenuItemWithLabelAndIconProps | DefaultMenuItemProps;

interface MenuItemWithIconProps extends CommonMenuItemProps {
  type: 'onlyIcon';
  iconComponent: ReactNode;
}

interface MenuItemWithLabelAndIconProps extends CommonMenuItemProps {
  type: 'labeledIcon';
  children: string;
  iconComponent: ReactNode;
}

interface DefaultMenuItemProps extends CommonMenuItemProps {
  type?: 'default';
  children: string;
}

interface CommonMenuItemProps {
  isCurrent?: boolean;
  onClick?: () => void;
}

export const MenuItem = (props: MenuItemProps) => {
  const itemClassName = cn({ [styles.current]: props.isCurrent }, styles[props.type || 'default'], styles.item);
  const Icon = 'iconComponent' in props && props.iconComponent;

  return (
    <li className={itemClassName}>
      <button className={styles.btn} type="button">
        {Icon}
        {'children' in props && <span className={styles.text}>{props.children}</span>}
      </button>
    </li>
  );
};
