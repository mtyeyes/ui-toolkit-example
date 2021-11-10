import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Alert, Button } from '../index';

export default {
  title: 'Alert',
  component: Alert,
  argTypes: {
    closeModal: { action: 'close' },
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const alert = Template.bind({});
alert.args = {
  type: 'default',
  style: 'outline',
  title: 'Alert title',
  titleTag: 'h2',
  description: 'Description lorem ipsum',
  withIcon: true,
  actions: (
    <>
      <Button>Control 1</Button>
      <Button impact="none">Control 2</Button>
    </>
  ),
  isOpen: true,
};
