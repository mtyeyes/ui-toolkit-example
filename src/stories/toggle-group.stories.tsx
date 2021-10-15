import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ToggleGroup, Toggle, ToggleProps } from '../index';

export default {
  title: 'ToggleGroup',
  component: ToggleGroup,
  argTypes: {
    typeOfToggles: {
      options: ['checkbox', 'radiobutton', 'switch'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof ToggleGroup>;

const Template: ComponentStory<typeof ToggleGroup> = ({ amountOfToggles, typeOfToggles, ...args }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <ToggleGroup {...args}>
      {new Array(amountOfToggles).fill('').map((blank, i) => (
        <Toggle
          key={`${typeOfToggles}-${i}`}
          type={typeOfToggles}
          id={`TGExample-${i}`}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
        >
          {`Toggle №${i}`}
        </Toggle>
      ))}
    </ToggleGroup>
  );
};

export const toggleGroup = Template.bind({});
toggleGroup.args = {
  amountOfToggles: 8,
  typeOfToggles: 'checkbox',
  label: 'Group label',
  isRequired: false,
  isInvalid: false,
  helperText: 'Helper text',
  helperCounter: { maxCount: 17, currentCount: 2 },
};
