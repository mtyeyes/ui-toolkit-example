import React, { FC, SVGAttributes } from 'react';
import styles from './menu-item.module.scss';
import cn from 'classnames';

export type MenuItemProps = MenuItemWithIconProps | MenuItemWithLabelAndIconProps | DefaultMenuItemProps;

interface MenuItemWithIconProps extends CommonMenuItemProps {
  type: 'onlyIcon';
  iconSrc: FC<SVGAttributes<SVGAElement>>;
}

interface MenuItemWithLabelAndIconProps extends CommonMenuItemProps {
  type: 'labeledIcon';
  children: string;
  iconSrc: FC<SVGAttributes<SVGAElement>>;
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
  const Icon = props.type === 'onlyIcon' || props.type === 'labeledIcon' ? props.iconSrc : null;

  return (
    <li className={itemClassName}>
      <button className={styles.btn} type="button">
        {Icon !== null && <Icon className={styles.icon} />}
        {'children' in props && <span className={styles.text}>{props.children}</span>}
      </button>
    </li>
  );
};
