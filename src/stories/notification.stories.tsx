import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Notification, Button } from '../index';

export default {
  title: 'Notification',
  component: Notification,
  argTypes: {
    closeModal: { action: 'close' },
  },
} as ComponentMeta<typeof Notification>;

const Template: ComponentStory<typeof Notification> = (args) => <Notification {...args} />;

export const notification = Template.bind({});
notification.args = {
  isOpen: true,
  type: 'default',
  title: 'Notification title',
  titleTag: 'h2',
  description: 'Notification content lorem',
  percentageOfTimeLeft: 73,
  controls: (
    <>
      <Button size="small">Control 1</Button>
      <Button size="small" impact="none">
        Control 2
      </Button>
    </>
  ),
};
