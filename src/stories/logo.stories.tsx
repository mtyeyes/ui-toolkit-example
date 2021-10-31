import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Logo } from '../index';

export default {
  title: 'Logo',
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const logo = Template.bind({});
logo.args = {
  size: 'normal',
  with5: true,
};
