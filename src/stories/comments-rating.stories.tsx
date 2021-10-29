import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentsRating, UserRating } from '../index';

export default {
  title: 'Comments Rating',
  component: CommentsRating,
} as ComponentMeta<typeof CommentsRating>;

const Template: ComponentStory<typeof CommentsRating> = () => {
  const [rating, setRating] = useState(0);
  const [userRating, setUserRating] = useState<UserRating>(null);

  const handleRatingChange = (rating: UserRating) => {
    if (rating === 'downvote') {
      setRating((prevRating) => prevRating - 1);
      setUserRating('downvote');
      return;
    }
    if (rating === 'upvote') {
      setRating((prevRating) => prevRating + 1);
      setUserRating('upvote');
      return;
    }
    if (rating === null) {
      setRating((prevRating) => (userRating === 'upvote' ? prevRating - 1 : prevRating + 1));
      setUserRating(null);
      return;
    }
  };

  return <CommentsRating rating={rating} changeRating={handleRatingChange} userRating={userRating} />;
};

export const commentsRating = Template.bind({});
