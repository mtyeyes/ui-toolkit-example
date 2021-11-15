import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Popover } from '../index';

export default {
  title: 'Popover',
  component: Popover,
  argTypes: {
    handlePaste: { action: 'paste' },
    handleCancel: { action: 'cancel' },
    handleDelete: { action: 'delete' },
  },
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => {
  const [element, setElement] = useState<HTMLElement | null>(null);
  return (
    <div
      ref={setElement}
      style={{
        width: '50px',
        height: '50px',
        margin: '230px',
        position: 'relative',
        backgroundColor: 'var(--color-gray-30)',
      }}
    >
      <Popover referenceElement={element} {...args} />
    </div>
  );
};

export const popoverInput = Template.bind({});
popoverInput.args = {
  type: 'input',
  inputOnePlaceholder: 'Placeholder',
  inputOneValue: '',
  setInputOneValue: (value: string) => value,
  inputTwoPlaceholder: 'Placeholder',
  inputTwoValue: '',
  setInputTwoValue: (value: string) => value,
  isVisible: true,
  position: 'top',
  align: 'center',
};

export const popoverPrompt = Template.bind({});
popoverPrompt.args = {
  type: 'prompt',
  title: 'Prompt title',
  description: 'Short descrition!',
  isVisible: true,
  position: 'top',
  align: 'center',
};
