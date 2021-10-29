import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Breadcrumbs } from '../index';

export default {
  title: 'Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
  },
} as ComponentMeta<typeof Breadcrumbs>;

const Template: ComponentStory<typeof Breadcrumbs> = (args) => <Breadcrumbs {...args} />;

const Link = ({ ...props }) => {
  return <a {...props} />;
};

export const breadcrumbs = Template.bind({});
breadcrumbs.args = {
  basepath: 'https://cronmedia.gitlab.io/***REMOVED***club/ds',
  paths: ['?path=/story/breadcrumbs--breadcrumbs', 'somewhere', 'curent'],
  pathsNames: ['Breadcrumbs story', 'Random link', 'Current page'],
  Link,
};
