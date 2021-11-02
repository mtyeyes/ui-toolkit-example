import React from 'react';
import styles from './card.module.scss';

import { UserCard, AvatarProps, UserCardProps, Toggler } from '../../index';
import { Article, ArticleProps } from './article/article';
import { Event, EventProps } from './event/event';
import { Vaccancy, VaccancyProps } from './vaccancy/vaccancy';

export type CardProps = (ArticleProps | EventProps | VaccancyProps) & CommonCardProps;

interface CommonCardProps {
  isFavorite: boolean;
  LinkComponent: keyof JSX.IntrinsicElements;
  href: string;
  setIsFavorite: (isFavorite: boolean) => void;
  userData: Pick<UserCardProps, 'userName'> & AvatarProps;
}

export const Card = ({ userData, isFavorite, setIsFavorite, LinkComponent, href, ...props }: CardProps) => {
  const renderData = () => {
    if (props.type === 'article') return <Article {...props} />;
    if (props.type === 'event') return <Event {...props} />;
    if (props.type === 'vaccancy') return <Vaccancy {...props} />;
  };

  return (
    <article className={styles.wrapper}>
      {renderData()}
      <LinkComponent className={styles.link} href={href} />
      <div className={styles.footer}>
        <UserCard {...userData} size="small" />
        <Toggler className={styles.toggler} isToggled={isFavorite} setIsToggled={setIsFavorite} />
      </div>
    </article>
  );
};
