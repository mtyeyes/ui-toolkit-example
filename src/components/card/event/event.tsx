import React from 'react';
import styles from './event.module.scss';

import { Badge, BadgeProps } from '../../../index';

export interface EventProps {
  type: 'event';
  imgSrc: string;
  badges?: BadgeProps[];
}

export const Event = ({ imgSrc, badges = [] }: EventProps) => {
  const mapBadgesCallback = (badgeProps: BadgeProps) => (
    <li key={badgeProps.children}>
      <Badge {...badgeProps} />
    </li>
  );

  return (
    <>
      <figure className={styles.imageWrapper}>
        <ul className={styles.badgeList}>{badges.map(mapBadgesCallback)}</ul>
        <img className={styles.img} src={imgSrc} />
      </figure>
    </>
  );
};
