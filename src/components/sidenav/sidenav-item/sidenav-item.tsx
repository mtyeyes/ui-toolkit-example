import React, { FC, SVGAttributes } from 'react';
import styles from './sidenav-item.module.scss';
import cn from 'classnames';

export interface SidenavItemProps {
  isCurrent: boolean;
  iconSrc?: FC<SVGAttributes<SVGAElement>>;
  href: string;
  name: string;
}

export const SidenavItem = ({ isCurrent, iconSrc, href, name }: SidenavItemProps) => {
  const Icon = iconSrc || false;
  return (
    <li className={cn({ [styles.current]: isCurrent }, styles.item)}>
      <a href={isCurrent ? undefined : href} className={styles.link}>
        {Icon && <Icon />}
        <span>{name}</span>
      </a>
    </li>
  );
};
