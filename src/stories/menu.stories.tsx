import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Menu } from '../index';

const PlaceholderIcon = ({ ...props }) => (
  <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path stroke="currentColor" d="M3.75 12H20.25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path stroke="currentColor" d="M12 3.75V20.25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default {
  title: 'Menu',
  component: Menu,
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
  },
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const menuWithLabels = Template.bind({});
menuWithLabels.args = {
  children: [
    { children: 'Uno' },
    { children: 'Duo', type: 'default' },
    { children: 'Trecio' },
    { children: 'Quadro' },
    { children: 'Extremly elongated menu label', isCurrent: true },
    { children: 'Penta' },
  ],
};

export const menuWithLabeledIcons = Template.bind({});
menuWithLabeledIcons.args = {
  children: [
    { children: 'Uno', type: 'labeledIcon', iconComponent: <PlaceholderIcon /> },
    { children: 'Duo', type: 'labeledIcon', iconComponent: <PlaceholderIcon /> },
    { children: 'Trecio', type: 'labeledIcon', iconComponent: <PlaceholderIcon /> },
    { children: 'Quadro', type: 'labeledIcon', iconComponent: <PlaceholderIcon /> },
    {
      children: 'Extremly elongated menu label',
      type: 'labeledIcon',
      iconComponent: <PlaceholderIcon />,
      isCurrent: true,
    },
    { children: 'Penta', type: 'labeledIcon', iconComponent: <PlaceholderIcon /> },
  ],
};

export const menuWithIcons = Template.bind({});
menuWithIcons.args = {
  children: [
    { type: 'onlyIcon', iconComponent: <PlaceholderIcon /> },
    { type: 'onlyIcon', iconComponent: <PlaceholderIcon /> },
    { type: 'onlyIcon', iconComponent: <PlaceholderIcon /> },
    { type: 'onlyIcon', iconComponent: <PlaceholderIcon /> },
    { type: 'onlyIcon', iconComponent: <PlaceholderIcon />, isCurrent: true },
    { type: 'onlyIcon', iconComponent: <PlaceholderIcon /> },
  ],
};
