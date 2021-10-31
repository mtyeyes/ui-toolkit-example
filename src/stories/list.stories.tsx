import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { List } from '../index';

export default {
  title: 'List',
  component: List,
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const list = Template.bind({});
list.args = {
  type: 'ordered',
  isCondensed: false,
  children: ['Cupcake', 'Donut', 'Eclair', 'Jelly Bean', 'Lollipop', 'Marshmallow'],
};
