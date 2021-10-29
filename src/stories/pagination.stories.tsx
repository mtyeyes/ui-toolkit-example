import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Pagination } from '../index';

export default {
  title: 'Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => {
  const [selectedPage, setSelectedPage] = useState(1);
  return <Pagination currentPage={selectedPage} setCurrentPage={setSelectedPage} {...args} />;
};

export const pagination = Template.bind({});
pagination.args = {
  totalPages: 20,
};
