import React, { useState, CSSProperties } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dropdown } from '../index';

const ExampleIcon = ({ ...props }) => (
  <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.75 12H20.25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M12 3.75V20.25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);

export default {
  title: 'Dropdown',
  component: Dropdown,
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = ({ parentWidth, ...args }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const searchQueryPlaceholder =
    args.isSearchable && args.searchQuery === undefined && args.setSearchQuery === undefined
      ? { searchQuery, setSearchQuery }
      : {};

  const parentStyle = {
    position: 'relative',
    outline: '2px solid black',
    height: '50px',
    textAlign: 'center',
    width: parentWidth,
  } as CSSProperties;

  return (
    <div style={parentStyle}>
      Parent component
      <Dropdown {...searchQueryPlaceholder} {...args} />
    </div>
  );
};

export const dropdown = Template.bind({});
dropdown.args = {
  parentWidth: '200px',
  isSearchable: true,
  id: 'unique',
  isExpanded: true,
  placeholder: 'Input placeholder',
  children: {
    aFirstList: [
      {
        type: 'checkbox',
        id: 'unique1',
        key: 'unique1',
        isChecked: false,
        setIsChecked: () => {},
        children: 'checkbox',
      },
      {
        type: 'radiobutton',
        id: 'unique2',
        key: 'unique2',
        isChecked: false,
        setIsChecked: () => {},
        children: 'radiobutton',
      },
      {
        type: 'switch',
        id: 'unique3',
        key: 'unique3',
        isChecked: false,
        setIsChecked: () => {},
        children: 'switch',
      },
      { type: 'label', key: 'unique4', onClick: () => {}, isCurrent: true, children: 'Current label' },
      {
        type: 'icon',
        key: 'unique5',
        icon: ExampleIcon,
        onClick: () => {},
        isCurrent: true,
        children: 'Current label with icon',
      },
    ],
    anyString: [
      {
        type: 'icon',
        key: 'unique6',
        icon: ExampleIcon,
        onClick: () => {},
        iconAlignment: 'left',
        children: 'Label with icon on the left',
      },
      {
        type: 'icon',
        key: 'unique7',
        icon: ExampleIcon,
        onClick: () => {},
        iconAlignment: 'right',
        children: 'Label with icon on the right',
      },
      { type: 'label', key: 'unique8', onClick: () => {}, children: 'label' },
    ],
  },
};
