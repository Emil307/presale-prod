import React, {useState} from 'react';
import { TabButton } from './TabButton';
import { TabContentStandart } from './TabContentStandart';
import { TabContentEvm } from './TabContentEvm';
import { TabContentCard } from './TabContentCard';
import {
  Section,
  Container,
  Title,
  Text,
  TabWrapper,
  TabButtons,
  TabContent,
} from './styles';

import { Sol, Ton, Evm, Card, ETH } from '../../iconComponents/TabIcons';

const tabs = [
  { name: 'SOL', icon: Sol, label: 'SOL' },
  { name: 'TON', icon: Ton, label: 'TON' },
  { name: 'EVM', icon: Evm, label: 'EVM' },
  { name: 'CARD', icon: Card, label: 'CARD' },
];


export const Order: React.FC = () => {
  const [activeTab, setActiveTab] = useState('SOL');
  const [inputValue, setInputValue] = useState('2.00');
  const [activeFilter, setActiveFilter] = useState({name:'ETHEREUM', Icon: ETH});


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const tabComponents: {[key: string]: JSX.Element} = {
    SOL: <TabContentStandart inputValue={inputValue} handleInputChange={handleInputChange} name='SOL' Icon={Sol}/>,
    TON: <TabContentStandart inputValue={inputValue} handleInputChange={handleInputChange} name='TON' Icon={Ton}/>,
    EVM: <TabContentEvm activeFilter={activeFilter} setActiveFilter={setActiveFilter}/>,
    CARD: <TabContentCard inputValue={inputValue} handleInputChange={handleInputChange} name='CARD'/>,
  };

  return (
    <Section>
      <Container>
        <Title>Trade & Setup Your order</Title>
        <Text>Preset Limit Orders or DCA in advance to acquire tokens at launch. New tokens are volatile, set a maximum price limit when trading them.</Text>
        <TabWrapper>
          <TabButtons>
            {tabs.map(tab => (
              <TabButton key={tab.name}
                         name={tab.name}
                         setActiveTab={setActiveTab}
                         activeTab={activeTab}
                         Icon={tab.icon}>
                {tab.label}
              </TabButton>
            ))}
          </TabButtons>
          <TabContent>
            {tabComponents[activeTab]}
          </TabContent>
        </TabWrapper>
      </Container>
    </Section>
  );
}

