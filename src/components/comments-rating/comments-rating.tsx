import React, { useState } from 'react';
import styles from './comments-rating.module.scss';
import cn from 'classnames';

import { CaretDown, CaretUp, X } from 'phosphor-react';

export interface CommentsRatingProps {
  rating: number;
  changeRating: (rating: UserRating) => void;
  userRating: UserRating;
}

export type UserRating = 'upvote' | 'downvote' | null;

export const CommentsRating = ({ rating, changeRating, userRating }: CommentsRatingProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [inFocus, setInFocus] = useState(false);

  const handleUpvote = () => {
    userRating === null ? changeRating('upvote') : changeRating(null);
  };

  const handleDownvote = () => {
    userRating === null ? changeRating('downvote') : changeRating(null);
  };

  return (
    <div className={styles.wrapper}>
      <button
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        onFocus={() => {
          setInFocus(true);
        }}
        onBlur={() => {
          setInFocus(false);
        }}
        className={cn({ [styles.used]: userRating !== null }, styles.btn, styles.downvote)}
        onClick={handleDownvote}
        disabled={userRating === 'upvote'}
        type="button"
      >
        {(inFocus || isHovered) && userRating === 'downvote' ? <X size="24px" /> : <CaretDown size="24px" />}
      </button>
      <div className={cn({ [styles.positive]: rating > 0, [styles.negative]: rating < 0 }, styles.counter)}>
        {rating}
      </div>
      <button
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        onFocus={() => {
          setInFocus(true);
        }}
        onBlur={() => {
          setInFocus(false);
        }}
        className={cn({ [styles.used]: userRating !== null }, styles.btn, styles.upvote)}
        onClick={handleUpvote}
        disabled={userRating === 'downvote'}
        type="button"
      >
        {(inFocus || isHovered) && userRating === 'upvote' ? <X size="24px" /> : <CaretUp size="24px" />}
      </button>
    </div>
  );
};
