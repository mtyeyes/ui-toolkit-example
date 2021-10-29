import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Stepper } from '../index';

export default {
  title: 'Stepper',
  component: Stepper,
} as ComponentMeta<typeof Stepper>;

const Template: ComponentStory<typeof Stepper> = (args) => {
  const [step, setStep] = useState(1);
  return <Stepper selectedStep={step} setSelectedStep={setStep} {...args} />;
};

export const stepper = Template.bind({});
stepper.args = {
  id: 'uniq',
  stepsTotal: 11,
};
