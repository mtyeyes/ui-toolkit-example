import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Menu } from '../index';

const ExampleIcon = ({ ...props }) => (
  <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.75 12H20.25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M12 3.75V20.25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
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
    { children: 'Uno', type: 'labeledIcon', iconSrc: ExampleIcon },
    { children: 'Duo', type: 'labeledIcon', iconSrc: ExampleIcon },
    { children: 'Trecio', type: 'labeledIcon', iconSrc: ExampleIcon },
    { children: 'Quadro', type: 'labeledIcon', iconSrc: ExampleIcon },
    { children: 'Extremly elongated menu label', type: 'labeledIcon', iconSrc: ExampleIcon, isCurrent: true },
    { children: 'Penta', type: 'labeledIcon', iconSrc: ExampleIcon },
  ],
};

export const menuWithIcons = Template.bind({});
menuWithIcons.args = {
  children: [
    { type: 'onlyIcon', iconSrc: ExampleIcon },
    { type: 'onlyIcon', iconSrc: ExampleIcon },
    { type: 'onlyIcon', iconSrc: ExampleIcon },
    { type: 'onlyIcon', iconSrc: ExampleIcon },
    { type: 'onlyIcon', iconSrc: ExampleIcon, isCurrent: true },
    { type: 'onlyIcon', iconSrc: ExampleIcon },
  ],
};
