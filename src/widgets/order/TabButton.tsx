import React, { FC } from 'react';
import {
  TabButtonsItem
} from './styles';
type TabButtonProps = {
  name: string;
  setActiveTab: (name: string) => void;
  activeTab: string;
  Icon: FC;
  children: React.ReactNode;
};

export const TabButton: FC<TabButtonProps> = ({ name, setActiveTab, activeTab, Icon, children }) => (
  <TabButtonsItem onClick={() => setActiveTab(name)}
                  className={activeTab === name ? 'active' : ''}>
    <Icon/>{children}
  </TabButtonsItem>
);
