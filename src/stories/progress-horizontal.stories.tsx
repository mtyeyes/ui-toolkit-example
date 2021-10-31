import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProgressHorizontal } from '../index';

export default {
  title: 'Progress Horizontal',
  component: ProgressHorizontal,
} as ComponentMeta<typeof ProgressHorizontal>;

const Template: ComponentStory<typeof ProgressHorizontal> = (args) => <ProgressHorizontal {...args} />;

export const progressHorizontal = Template.bind({});
progressHorizontal.args = {
  progress: 60,
};
