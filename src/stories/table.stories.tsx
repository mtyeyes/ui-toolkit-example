import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Table, Button } from '../index';

const PlaceholderIcon = ({ ...props }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M3.75 12H20.25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 3.75V20.25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DownloadIcon = ({ ...props }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M8.0625 10.3135L12 14.2499L15.9375 10.3135" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 3.75V14.2472" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M20.25 14.25V19.5C20.25 19.6989 20.171 19.8897 20.0303 20.0303C19.8897 20.171 19.6989 20.25 19.5 20.25H4.5C4.30109 20.25 4.11032 20.171 3.96967 20.0303C3.82902 19.8897 3.75 19.6989 3.75 19.5V14.25"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const placeholderImage =
  'data:image/jpeg;base64,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';

export default {
  title: 'Table',
  component: Table,
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
  },
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Table
      tableHeaders={{
        isRowSelected: isChecked,
        rowData: [
          {
            cellType: 'toggle',
            type: 'checkbox',
            id: 'h1',
            isChecked: isChecked,
            setIsChecked: setIsChecked,
            key: 'h1',
          },
          { cellType: 'header', children: 'Header', key: 'h2' },
          { cellType: 'header', children: 'Header', key: 'h3' },
          { cellType: 'header', children: 'Header', key: 'h4' },
          { cellType: 'header', children: 'Header', key: 'h5' },
          { cellType: 'header', children: 'Header', key: 'h6' },
        ],
      }}
      handleDownload={() => {}}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      {...args}
    >
      {new Array(19).fill('').map((blank, i) => {
        return {
          isRowSelected: isChecked,
          rowData: [
            {
              cellType: 'toggle',
              type: 'checkbox',
              id: `checkbx${i}`,
              isChecked: isChecked,
              setIsChecked: setIsChecked,
              key: `tc${i}1`,
            },
            { cellType: 'text', children: `Row ${i + 1}`, key: `tc${i}2` },
            { cellType: 'badge', children: 'Ipsum', key: `tc${i}3` },
            {
              cellType: 'usercard',
              avatarSrc: placeholderImage,
              type: 'photo',
              userName: 'Экзампл',
              children: 'description',
              key: `tc${i}4`,
            },
            { cellType: 'text', children: 'Filler text lorem ipsum', key: `ft${i}2` },
            { cellType: 'numeric', children: `${i + 1}`, key: `tc${i}5` },
            {
              cellType: 'menu',
              children: (
                <div
                  style={{
                    backgroundColor: '#fff',
                    position: 'absolute',
                    top: 'calc(100% + 6px)',
                    right: '0',
                    zIndex: 1,
                  }}
                >
                  Место для ваших батанов
                </div>
              ),
              key: `tc${i}6`,
            },
          ],
        };
      })}
    </Table>
  );
};

export const table = Template.bind({});
table.args = {
  headerSlot: (
    <>
      <Button theme="onLight" impact="none" size="medium" icon="only" iconSrc={DownloadIcon} />
      <Button icon="only" iconSrc={PlaceholderIcon} />
    </>
  ),
  footerSlot: (
    <Button icon="left" iconSrc={PlaceholderIcon}>
      Footer slot
    </Button>
  ),
  selectableAmountOfRows: ['3', '5', '10'],
  isStriped: true,
  isCondensed: false,
};
