import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Separator } from '../index';

export default {
  title: 'Separator',
  component: Separator,
} as ComponentMeta<typeof Separator>;

const boundsStyle = { backgroundColor: '#E66' };

const Template: ComponentStory<typeof Separator> = (args) => (
  <>
    <div style={boundsStyle}>External bounds</div>
    <Separator {...args} />
    <div style={boundsStyle}>External bounds</div>
  </>
);

export const separator = Template.bind({});
separator.args = {
  offsetSize: 'small',
  isShrinked: false,
};
