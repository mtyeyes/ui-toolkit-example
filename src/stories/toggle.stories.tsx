import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Toggle } from '../index';

export default {
  title: 'Toggle',
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = ({ isChecked, setIsChecked, ...args }) => {
  const [isCheckedDummy, setIsCheckedDummy] = useState(false);

  return <Toggle isChecked={isCheckedDummy} setIsChecked={setIsCheckedDummy} {...args} />;
};

export const checkbox = Template.bind({});
checkbox.args = {
  type: 'checkbox',
  id: 'unique',
  children: 'Checkbox',
  isIntermidiate: false,
  isDisabled: false,
  isInvalid: false,
  isRequired: false,
  isFilled: false,
};

export const radiobutton = Template.bind({});
radiobutton.args = {
  type: 'radiobutton',
  id: 'unique',
  children: 'Radiobutton',
  isIntermidiate: false,
  isDisabled: false,
  isInvalid: false,
  isRequired: false,
  isFilled: false,
};

export const swich = Template.bind({});
swich.args = {
  type: 'switch',
  id: 'unique',
  children: 'Switch',
  isIntermidiate: false,
  isDisabled: false,
  isInvalid: false,
  isRequired: false,
  isFilled: false,
};
