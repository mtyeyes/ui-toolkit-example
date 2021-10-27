import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Sidenav } from '../index';

const PlaceholderIcon = ({ ...props }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M3.75 12H20.25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 3.75V20.25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default {
  title: 'Sidenav',
  component: Sidenav,
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
  },
} as ComponentMeta<typeof Sidenav>;

const Template: ComponentStory<typeof Sidenav> = (args) => <Sidenav {...args} />;

export const sidenav = Template.bind({});
sidenav.args = {
  children: [
    { name: 'Cupcake', href: '#' },
    { name: 'Donut', href: '#' },
    { name: 'Eclair', href: '#', iconSrc: PlaceholderIcon, isCurrent: true },
    { name: 'Jelly Bean', href: '#' },
    { name: 'Lollipop', href: '#', iconSrc: PlaceholderIcon },
    { name: 'Marshmallow', href: '#', isCurrent: true },
  ],
};
