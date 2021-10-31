import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Overlay } from '../index';

export default {
  title: 'Overlay',
  component: Overlay,
  argTypes: {
    onClick: { action: 'click' },
  },
} as ComponentMeta<typeof Overlay>;

const Template: ComponentStory<typeof Overlay> = (args) => {
  return (
    <>
      <p>Text to test backdrop filter</p>
      <Overlay {...args}></Overlay>
    </>
  );
};

export const overlay = Template.bind({});
overlay.args = {
  children: (
    <div style={{ width: '200px', height: '200px', backgroundColor: 'var(--color-white-100)', padding: '20px' }}>
      Место для ваших модалок
    </div>
  ),
};
