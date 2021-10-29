import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Blockqoute } from '../index';

export default {
  title: 'Blockqoute',
  component: Blockqoute,
} as ComponentMeta<typeof Blockqoute>;

const Template: ComponentStory<typeof Blockqoute> = (args) => <Blockqoute {...args} />;

export const blockqoute = Template.bind({});
blockqoute.args = {
  children:
    'Once upon a time, deep deep in the jungle. There was a little engine that could. He was chugging his way across the enemy line…chugga chugga, toot toot. This little engines’ mission was to take some AK-47’s and a nuclear payload, over the mountain to the 2063 Battalion. Needless to say, there was plenty of opposition. You think that stopped the little engine that could? No siree bob. He just kept chugging along…chugga chugga toot toot.',
};
