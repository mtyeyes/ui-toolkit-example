import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Toggler } from '../index';

export default {
  title: 'Toggler',
  component: Toggler,
} as ComponentMeta<typeof Toggler>;

const Template: ComponentStory<typeof Toggler> = () => {
  const [isToggled, setIsToggled] = useState(false);
  return <Toggler isToggled={isToggled} setIsToggled={setIsToggled} />;
};

export const toggler = Template.bind({});
