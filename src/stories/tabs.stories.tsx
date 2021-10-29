import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tabs } from '../index';

const PlaceholderIcon = ({ ...props }) => (
  <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path stroke="currentColor" d="M3.75 12H20.25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path stroke="currentColor" d="M12 3.75V20.25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default {
  title: 'Tabs',
  component: Tabs,
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => {
  const [selectedItem, setSelectedItem] = useState('Cupcake');
  return <Tabs selectedTab={selectedItem} setSelectedTab={setSelectedItem} {...args} />;
};

export const tabs = Template.bind({});
tabs.args = {
  children: [
    { name: 'Cupcake', icon: 'left', iconComponent: <PlaceholderIcon /> },
    { name: 'Donut', icon: 'right', iconComponent: <PlaceholderIcon /> },
    { name: 'Eclair', icon: 'only', iconComponent: <PlaceholderIcon /> },
    { name: 'Jelly Bean', icon: 'none', iconComponent: <PlaceholderIcon /> },
    { name: 'Lollipop' },
    { name: 'Marshmallow' },
  ],
};
