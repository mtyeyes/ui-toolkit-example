import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tooltip } from '../index';

export default {
  title: 'Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => {
  const [element, setElement] = useState<HTMLElement | null>(null);
  return (
    <>
      <div style={{ width: '200px', height: '200px', overflow: 'scroll' }}>
        <div
          style={{
            width: '50px',
            height: '50px',
            margin: '50px 70px',
            position: 'relative',
            backgroundColor: 'var(--color-gray-30)',
          }}
          ref={setElement}
        >
          <Tooltip referenceElement={element} {...args} />
        </div>
        <div style={{ width: '1px', height: '1px', margin: '300px' }} />
      </div>
    </>
  );
};

export const tooltip = Template.bind({});
tooltip.args = {
  isVisible: true,
  position: 'top',
  align: 'center',
  offset: { x: 0, y: 4 },
  theme: 'dark',
  size: 'small',
  children: 'Tooltip',
};
