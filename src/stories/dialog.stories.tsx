import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dialog, Button } from '../index';

export default {
  title: 'Dialog',
  component: Dialog,
  argTypes: {
    closeModal: { action: 'close' },
  },
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => <Dialog {...args} />;

export const dialog = Template.bind({});
dialog.args = {
  isOpen: true,
  title: 'Dialog title',
  description: 'Dialog content lorem',
  controls: (
    <>
      <Button>Control 1</Button>
      <Button impact="none">Control 2</Button>
    </>
  ),
};
