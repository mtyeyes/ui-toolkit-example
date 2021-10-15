import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../index';

const ExampleIcon = ({ ...props }) => (
  <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.75 12H20.25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M12 3.75V20.25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'click' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const button = Template.bind({});
button.args = {
  theme: 'onLight',
  impact: 'high',
  isDisabled: false,
  isLoading: false,
  children: 'Button',
  size: 'medium',
  iconSrc: ExampleIcon,
};
