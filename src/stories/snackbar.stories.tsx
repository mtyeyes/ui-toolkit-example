import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Snackbar } from '../index';

export default {
  title: 'Snackbar',
  component: Snackbar,
  argTypes: {
    onClick: { action: 'click' },
  },
} as ComponentMeta<typeof Snackbar>;

const Template: ComponentStory<typeof Snackbar> = (args) => <Snackbar {...args} />;

export const snackbar = Template.bind({});
snackbar.args = {
  isVisible: true,
  title: 'Snackbar',
  btnText: 'Button',
};
