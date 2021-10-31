import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Spacer } from '../index';

export default {
  title: 'Spacer',
  component: Spacer,
} as ComponentMeta<typeof Spacer>;

const Template: ComponentStory<typeof Spacer> = (args) => (
  <>
    <div style={{ backgroundColor: 'var(--color-gray-60)', padding: '20px' }}>Element</div>
    <Spacer {...args}></Spacer>
    <div style={{ backgroundColor: 'var(--color-gray-60)', padding: '20px' }}>Element</div>
  </>
);

export const spacer = Template.bind({});
spacer.args = {
  size: 'medium',
};
