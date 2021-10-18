import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Fab } from '../index';

export default {
  title: 'Fab',
  component: Fab,
  argTypes: {
    onClick: { action: 'click' },
  },
} as ComponentMeta<typeof Fab>;

const Template: ComponentStory<typeof Fab> = (args) => <Fab {...args} />;

export const fab = Template.bind({});
fab.args = {
  size: 'medium',
  impact: 'high',
  isLoading: false,
  onClick: () => {},
};
