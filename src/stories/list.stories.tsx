import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { List, ListItem, ListProps } from '../index';

export default {
  title: 'List',
  component: List,
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (props) => <List {...props} />;

export const list = Template.bind({});
list.args = {
  type: 'ordered',
  isCondensed: false,
  children: ['Cupcake', 'Donut', 'Eclair', 'Jelly Bean', 'Lollipop', 'Marshmallow'].map((item) => (
    <ListItem key={item}>{item}</ListItem>
  )),
} as ListProps;
