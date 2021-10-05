import React, { Fragment } from 'react';
import styles from './dropdown.module.scss';
import cn from 'classnames';

import { DropdownItem, DropdownItemProps } from './dropdown-item/dropdown-item';
import { Input, Separator } from '../../index';

export type DropdownProps = SearchableDropdownProps | NotSearchableDropdownProps;

interface SearchableDropdownProps extends BasicDropdownProps {
  isSearchable: true;
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
  id: string;
  placeholder: string;
}

interface NotSearchableDropdownProps extends BasicDropdownProps {
  isSearchable?: false;
}

interface BasicDropdownProps {
  isExpanded: boolean;
  isScrollable?: boolean;
  alignToSide?: 'left' | 'right';
  children: { [key: string]: DropdownItemProps[] };
}

export const Dropdown = ({
  isExpanded,
  isScrollable = false,
  isSearchable = false,
  alignToSide = 'left',
  children,
  ...props
}: DropdownProps) => {
  const wrapperClassName = cn(
    { [styles.expanded]: isExpanded, [styles.scrollable]: isScrollable },
    styles[alignToSide],
    styles.wrapper,
  );

  const mapItemsCallback = (itemProps: DropdownItemProps) => {
    const { key, ...otherProps } = itemProps;
    return <DropdownItem key={key} {...otherProps} />;
  };

  const mapListsCallback = (listName: string, i: number, array: string[]) => {
    const listData = children[listName];
    if (listData.length === 0) {
      return null;
    }

    const isPreviousArrayNotEmpty = i !== 0 && children[array[i - 1]].length !== 0;

    return (
      <Fragment key={listName}>
        {isPreviousArrayNotEmpty && <Separator offsetSize="micro" isShrinked={!isExpanded} />}

        <ul className={styles.list} key={i}>
          {isScrollable ? listData.map(mapItemsCallback) : listData.slice(0, 5).map(mapItemsCallback)}
        </ul>
      </Fragment>
    );
  };

  return (
    <div className={wrapperClassName}>
      {isSearchable && (
        <div className={styles.searchContainer}>
          <Input
            type="search"
            id={(props as SearchableDropdownProps).id}
            name="search"
            value={(props as SearchableDropdownProps).searchQuery}
            setValue={(value) => (props as SearchableDropdownProps).setSearchQuery(value)}
            placeholder={(props as SearchableDropdownProps).placeholder}
            isCondensed
          />
        </div>
      )}
      <div className={styles.listsWrapper}>{Object.keys(children).sort().map(mapListsCallback)}</div>
    </div>
  );
};
