import React, {useState} from 'react';
import { TabButton } from './TabButton';
import { TabContentStandart } from './TabContentStandart';
import { Onboarding } from '../../widgets/onboarding';
import { SimpleSwapTON } from './SimpleSwapTON';

import {
  Section,
  Container,
  Title,
  Text,
  TabWrapper,
  TabButtons,
  TabContent,
} from './styles';

import { Sol, Ton, Evm } from '../../iconComponents/TabIcons';
import themeState from '../../pages/Presale/store/themeState';
import { observer } from 'mobx-react-lite';
import { DeBridge } from './DeBridge';

const tabs = [
  { name: 'SOL', icon: Sol, label: 'SOL' },
  { name: 'TON', icon: Ton, label: 'TON' },
  { name: 'EVM', icon: Evm, label: 'EVM' },
];


export const Order: React.FC = observer(() => {
  const [activeTab, setActiveTab] = useState('SOL');
  const [inputValue, setInputValue] = useState('2.00');

  const [isOpenModal, setIsOpenModal] = useState<boolean>(true);


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const tabComponents: {[key: string]: JSX.Element} = {
    SOL: <TabContentStandart inputValue={inputValue} handleInputChange={handleInputChange} name='SOL' Icon={Sol}/>,
    TON: <SimpleSwapTON/>,
    EVM: <DeBridge/>,
  };

  return (
    <Section id='order'>
      <Container>
        <Title style={{color: themeState.theme === 'light' ? 'var(--text-black)' : 'var(--text-white)'}}>Trade & Setup Your order</Title>
        <Text style={{color: themeState.theme === 'light' ? 'var(--text-black)' : 'var(--text-white)'}}>Preset Limit Orders or DCA in advance to acquire tokens at launch. New tokens are volatile, set a maximum price limit when trading them.</Text>
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

      <Onboarding isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} setActiveTab={setActiveTab}/>
    </Section>
  );
});
