import React, { Fragment, useEffect, useState } from 'react';
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
  alignToSide?: 'left' | 'right';
  children: { [key: string]: DropdownItemProps[] };
}

export const Dropdown = ({
  isExpanded,
  isSearchable = false,
  alignToSide = 'left',
  children,
  ...props
}: DropdownProps) => {
  const [isScrollable, setisScrollable] = useState(false);

  useEffect(() => {
    let isScrollRequired = false;

    Object.keys(children).forEach((list) => {
      if (children[list].length > 5) isScrollRequired = true;
    });
    setisScrollable(isScrollRequired);
  }, [JSON.stringify(children)]);

  const wrapperClassName = cn(
    { [styles.expanded]: isExpanded, [styles.scrollable]: isScrollable },
    styles[alignToSide],
    styles.wrapper,
  );

  const mapItemsCallback = (itemProps: DropdownItemProps) => {
    const { key, ...otherProps } = itemProps;
    return <DropdownItem tabIndex={isExpanded ? 0 : -1} key={key} {...otherProps} />;
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
          {listData.map(mapItemsCallback)}
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
            tabIndex={isExpanded ? 0 : -1}
            id={(props as SearchableDropdownProps).id}
            value={(props as SearchableDropdownProps).searchQuery}
            setValue={(value: string) => (props as SearchableDropdownProps).setSearchQuery(value)}
            placeholder={(props as SearchableDropdownProps).placeholder}
            isCondensed
          />
        </div>
      )}
      <div className={styles.listsWrapper}>{Object.keys(children).sort().map(mapListsCallback)}</div>
    </div>
  );
};
