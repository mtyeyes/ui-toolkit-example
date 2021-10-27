import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Meta } from '../index';

export default {
  title: 'Meta',
  component: Meta,
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
  },
} as ComponentMeta<typeof Meta>;

const Template: ComponentStory<typeof Meta> = (args) => <Meta {...args} />;

export const meta = Template.bind({});
meta.args = {
  children: [
    { children: 'Default meta' },
    { children: 'Meta' },
    { children: 'Views meta', type: 'views' },
    { children: 'Comments meta', type: 'comments' },
    { children: 'Lorem' },
  ],
};
