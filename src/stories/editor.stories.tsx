import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Editor, EditorProps } from '../index';

export default {
  title: 'Editor',
  component: Editor,
  argTypes: {
    synchronizeEditorStateOnUpdate: { action: 'editorStateSync' },
  },
} as ComponentMeta<typeof Editor>;

const Template: ComponentStory<typeof Editor> = (args) => <Editor {...args} />;

const initialValue = [
  {
    type: 'heading2',
    alignment: 'center',
    children: [{ text: 'Heading' }],
  },
  {
    type: 'foreword',
    alignment: 'center',
    children: [
      {
        text: 'Lorem ipsum dolor sit amet',
      },
    ],
  },
  {
    type: 'main',
    children: [
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      },
    ],
  },
  {
    type: 'quote',
    children: [
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ],
  },
];

export const editor = Template.bind({});
editor.args = {
  label: 'Editor label',
  isRequired: true,
  placeholder: 'Placeholder',
  initialState: initialValue,
  defaultHeight: '500px',
} as EditorProps;
