import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FileUploader } from '../index';

export default {
  title: 'File Uploader',
  component: FileUploader,
} as ComponentMeta<typeof FileUploader>;

const Template: ComponentStory<typeof FileUploader> = (args) => {
  const [file, setFile] = useState(null);
  return <FileUploader file={file} setFile={setFile} {...args} />;
};

export const fileUploader = Template.bind({});
fileUploader.args = {
  id: 'uniq',
};
