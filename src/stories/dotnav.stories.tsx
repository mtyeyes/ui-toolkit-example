import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dotnav } from '../index';

export default {
  title: 'Dotnav',
  component: Dotnav,
} as ComponentMeta<typeof Dotnav>;

const Template: ComponentStory<typeof Dotnav> = (args) => {
  const [selectedItem, setSelectedItem] = useState(0);
  return <Dotnav selectedItem={selectedItem} setSelectedItem={setSelectedItem} {...args} />;
};

export const dotnav = Template.bind({});
dotnav.args = {
  id: 'uniq',
  numberOfItems: 8,
};
