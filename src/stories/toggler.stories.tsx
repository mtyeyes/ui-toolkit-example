import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Toggler } from '../index';

export default {
  title: 'Toggler',
  component: Toggler,
} as ComponentMeta<typeof Toggler>;

const Template: ComponentStory<typeof Toggler> = (args) => <Toggler {...args} />;

export const toggler = Template.bind({});
toggler.args = {
  isToggled: false,
  setIsToggled: () => {},
};
