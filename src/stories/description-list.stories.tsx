import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DescriptionList } from '../index';

export default {
  title: 'Description List',
  component: DescriptionList,
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
  },
} as ComponentMeta<typeof DescriptionList>;

const Template: ComponentStory<typeof DescriptionList> = (args) => <DescriptionList {...args} />;

export const descriptionList = Template.bind({});
descriptionList.args = {
  isCondensed: false,
  isVertical: false,
  children: [
    { title: 'Pizza', description: 'Good food' },
    {
      title: 'Dune',
      description:
        'Good movie. Though Bladerunner 2049 is superior and there would be no arguments just some lorem ipsum for excessively long description',
    },
    { title: 'Morrowind', description: 'Good game' },
    { title: 'Depeche Mode', description: 'Good music' },
  ],
};
