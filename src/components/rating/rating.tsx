import React from 'react';
import styles from './rating.module.scss';
import cn from 'classnames';

import Star from '../../resources/icons/star.svg';

export interface RatingProps {
  rating?: 0 | 1 | 2 | 3 | 4 | 5;
  className?: string;
}

const ratingLength = 5;

export const Rating = ({ rating = 0, className }: RatingProps) => {
  const ratingStarsCallback = (emptyVal: undefined, i: number) => {
    const isFilled = ++i <= rating;

    return <Star className={cn({ [styles.starFilled]: isFilled }, styles.star)} key={`${i}${isFilled}`} />;
  };

  return <div className={cn(styles.starWrapper, className)}>{[...Array(ratingLength)].map(ratingStarsCallback)}</div>;
};
