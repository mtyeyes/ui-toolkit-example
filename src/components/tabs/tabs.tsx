import React from 'react';
import styles from './tabs.module.scss';

import { Tab, TabWithIconProps, TabWithoutIconProps } from './tab/tab';

export interface TabsProps {
  selectedTab: string;
  setSelectedTab: (selectedTab: string) => void;
  children: (TabWithIconProps | TabWithoutIconProps)[];
}

export const Tabs = ({ selectedTab, setSelectedTab, children }: TabsProps) => {
  const childrenMapCallback = (props: TabWithIconProps | TabWithoutIconProps) => {
    return (
      <Tab
        key={(props as TabWithIconProps).name}
        name={(props as TabWithIconProps).name}
        groupName={`${children[0].name}-tabs`}
        isChecked={selectedTab === (props as TabWithIconProps).name}
        setIsChecked={() => {
          setSelectedTab((props as TabWithIconProps).name);
        }}
        icon={(props as TabWithIconProps).icon}
        iconComponent={(props as TabWithIconProps).iconComponent}
      />
    );
  };

  return <ul className={styles.list}>{children.map(childrenMapCallback)}</ul>;
};
