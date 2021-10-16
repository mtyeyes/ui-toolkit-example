import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Separator } from '../index';

export default {
  title: 'Separator',
  component: Separator,
} as ComponentMeta<typeof Separator>;

const Template: ComponentStory<typeof Separator> = (args) => (
  <>
    <Separator {...args} />
    <Separator {...args} />
    <Separator {...args} />
  </>
);

export const separator = Template.bind({});
separator.args = {
  offsetSize: 'small',
  isShrinked: false,
};
