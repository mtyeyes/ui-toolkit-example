import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tooltip } from '../index';

export default {
  title: 'Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => {
  return (
    <div
      style={{
        width: '50px',
        height: '50px',
        margin: '50px',
        position: 'relative',
        backgroundColor: 'var(--color-gray-30)',
      }}
    >
      <Tooltip {...args} />
    </div>
  );
};

export const tooltip = Template.bind({});
tooltip.args = {
  isVisible: true,
  position: 'top',
  theme: 'dark',
  size: 'small',
  align: 'center',
  children: 'Tooltip',
};
