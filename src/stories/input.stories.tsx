import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from '../index';

export default {
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  const [value, setValue] = useState('');
  return <Input value={value} setValue={setValue} {...args} />;
};

const TemplateInputCounter: ComponentStory<typeof Input> = (args) => {
  const [value, setValue] = useState<number | string>('');

  const increment = () => {
    return value < 100 ? setValue(+value + 1) : setValue(100);
  };
  const decrement = () => {
    return value > 0 ? setValue(+value - 1) : setValue(0);
  };
  const setVal = (val: number) => {
    if (val < 0) return setValue(0);
    if (val > 100) return setValue(100);
    setValue(val);
  };

  return <Input type="number" value={value} setValue={setVal} increment={increment} decrement={decrement} {...args} />;
};

const TemplateInputFile: ComponentStory<typeof Input> = (args) => {
  return <Input {...args} />;
};

const TemplateInputMultiselect: ComponentStory<typeof Input> = (args) => {
  const [value, setValue] = useState([]);
  const [selectableValues, setSelectedValues] = useState(['lorem', 'ipsum', 'fuu', 'bar', 'baz', 'boom']);
  return (
    <Input
      type="multiselect"
      selectedValues={value}
      setSelectedValues={setValue}
      selectableValues={selectableValues}
      setSelectableValues={setSelectedValues}
      {...args}
    />
  );
};

export const inputText = Template.bind({});
inputText.args = {
  type: 'text',
  id: 'unique',
  unitsLeftSide: 'Plhdr',
  unitsRightSide: 'Plhdr',
  placeholder: 'Placeholder',
  isDisabled: false,
  isCondensed: false,
  isInvalid: false,
  isReadOnly: false,
  isFilled: false,
};

export const wrappedInput = Template.bind({});
wrappedInput.args = {
  type: 'text',
  id: 'unique',
  isWrapped: true,
  label: 'Wrapped input',
  helperText: 'Helper text',
  helperCounter: {
    maxCount: 22,
    currentCount: 2,
  },
  unitsLeftSide: 'Plhdr',
  unitsRightSide: 'Plhdr',
  placeholder: 'Placeholder',
  isRequired: true,
  isDisabled: false,
  isCondensed: false,
  isInvalid: false,
  isReadOnly: false,
  isFilled: false,
};

export const inputTextarea = Template.bind({});
inputTextarea.args = {
  type: 'textarea',
  id: 'unique',
  placeholder: 'Placeholder',
  isDisabled: false,
  isCondensed: false,
  isInvalid: false,
  isReadOnly: false,
  isFilled: false,
};

export const InputSearch = Template.bind({});
InputSearch.args = {
  type: 'search',
  id: 'unique',
  placeholder: 'Placeholder',
  isDisabled: false,
  isCondensed: false,
  isInvalid: false,
  isReadOnly: false,
  isFilled: false,
};

export const inputEmail = Template.bind({});
inputEmail.args = {
  type: 'email',
  id: 'unique',
  placeholder: 'Placeholder',
  isDisabled: false,
  isCondensed: false,
  isInvalid: false,
  isReadOnly: false,
  isFilled: false,
};

export const inputPassword = Template.bind({});
inputPassword.args = {
  type: 'password',
  id: 'unique',
  placeholder: 'Placeholder',
  isDisabled: false,
  isCondensed: false,
  isInvalid: false,
  isReadOnly: false,
  isFilled: false,
};

export const inputPhone = Template.bind({});
inputPhone.args = {
  type: 'tel',
  id: 'unique',
  placeholder: 'Placeholder',
  isDisabled: false,
  isCondensed: false,
  isInvalid: false,
  isReadOnly: false,
  isFilled: false,
};

export const inputCounter = TemplateInputCounter.bind({});
inputCounter.args = {
  id: 'unique',
  placeholder: 'Placeholder',
  isDisabled: false,
  isCondensed: false,
  isInvalid: false,
  isReadOnly: false,
  isFilled: false,
};

export const inputFile = TemplateInputFile.bind({});
inputFile.args = {
  type: 'file',
  id: 'unique',
  placeholder: 'Placeholder',
  isDisabled: false,
  isCondensed: false,
  isInvalid: false,
  isReadOnly: false,
  isFilled: false,
};

export const inputSelect = Template.bind({});
inputSelect.args = {
  type: 'select',
  id: 'unique',
  placeholder: 'Placeholder',
  selectableValues: ['lorem', 'ipsum', 'fuu', 'bar', 'baz', 'boom'],
  isDisabled: false,
  isCondensed: false,
  isInvalid: false,
  isReadOnly: false,
  isFilled: false,
};

export const inputMultiselect = TemplateInputMultiselect.bind({});
inputMultiselect.args = {
  id: 'unique',
  placeholder: 'Placeholder',
  selectableValues: ['lorem', 'ipsum', 'fuu', 'bar', 'baz', 'boom'],
  isDisabled: false,
  isCondensed: false,
  isInvalid: false,
  isReadOnly: false,
  isFilled: false,
};
