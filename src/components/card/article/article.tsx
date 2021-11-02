import React from 'react';
import styles from './article.module.scss';

import { Meta, Badge, BadgeProps } from '../../../index';
import { CardTitle, CardTitleProps } from '../card-title/card-title';

export interface ArticleProps extends CardTitleProps {
  type: 'article';
  imgSrc?: string;
  badges?: BadgeProps[];
  totalViews: number;
  totalComents: number;
  date: string;
}

export const Article = ({ imgSrc, badges = [], totalViews, totalComents, date, ...titleProps }: ArticleProps) => {
  const mapBadgesCallback = (badgeProps: BadgeProps) => (
    <li key={badgeProps.children}>
      <Badge {...badgeProps} />
    </li>
  );

  return (
    <>
      <CardTitle {...titleProps} />
      <figure className={styles.imageWrapper}>
        <ul className={styles.badgeList}>{badges.map(mapBadgesCallback)}</ul>
        <img className={styles.img} src={imgSrc} />
      </figure>
      <Meta
        data={[
          { type: 'views', children: totalViews },
          { type: 'comments', children: totalComents },
          { type: 'default', children: date },
        ]}
      />
    </>
  );
};
