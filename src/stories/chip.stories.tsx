import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Chip } from '../index';

export default {
  title: 'Chip',
  component: Chip,
  argTypes: {
    onClick: { action: 'click' },
  },
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const chip = Template.bind({});
chip.args = {
  theme: 'accent',
  withIcon: true,
  isDisabled: false,
  children: 'chip',
};
