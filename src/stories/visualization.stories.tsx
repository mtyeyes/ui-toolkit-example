import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Visualization } from '../index';

export default {
  title: 'Visualization',
  component: Visualization,
} as ComponentMeta<typeof Visualization>;

const Template: ComponentStory<typeof Visualization> = (args) => <Visualization {...args} />;

export const visualization = Template.bind({});
visualization.args = {
  size: 'normal',
  progress: 33,
};
