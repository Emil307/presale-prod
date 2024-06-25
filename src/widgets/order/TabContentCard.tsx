import React, { FC, useState, useEffect } from 'react';
import { SendOrder } from './SendOrder';
import {
  TabContentItem,
  TabContentItemTop,
  SubTitle,
  Count,
  Part,
  InputContainer,
  Input,
  AddressContainer,
  Btn,
  Dropdown,
  DropdownButton,
  DropdownContent,
  DropdownItem
} from './styles';
import { USD, EUR, RUB } from '../../iconComponents/TabIcons';
import { Caret } from '../../iconComponents/CaretIcon';

type TabContentProps = {
  inputValue: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
};

interface CurrencyOption {
  code: string;
  Icon: FC;
}

export const TabContentCard: FC<TabContentProps> = ({ inputValue, handleInputChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyOption>({ code: 'USD', Icon: USD });
  const [isSendOrder, setSendOrder] = useState<boolean>(false);
  const resetStatus = () => {
    setSendOrder(false);
  }

  useEffect(() => {
    if(isSendOrder) {
      return resetStatus;
    }
  })

  const toggleDropdown = () => setIsOpen(!isOpen);

  const currencies: CurrencyOption[] = [
    { code: 'USD', Icon: USD },
    { code: 'EUR', Icon: EUR },
    { code: 'RUB', Icon: RUB }
  ];
  const handleSelect = (currency: CurrencyOption) => {
    setSelectedCurrency(currency);
    setIsOpen(false);
  };

  return (
    <>
      { !isSendOrder ? (
        <TabContentItem className='active'>
        <TabContentItemTop>
          <SubTitle>You're paying</SubTitle>
          <Count>0,2456 usdc</Count>
          <Part>half</Part>
          <Part>max</Part>
        </TabContentItemTop>
        <InputContainer>
          <Input value={inputValue} onChange={handleInputChange} />
          <Dropdown>
            <DropdownButton onClick={toggleDropdown} className={`${isOpen ? 'show': ''}`}>
              <selectedCurrency.Icon/>
              {selectedCurrency.code}
              <Caret/>
            </DropdownButton>
            {isOpen && (
              <DropdownContent>
                {currencies.map(currency => (
                  <DropdownItem className={`${selectedCurrency.code === currency.code ? 'active' : ''}`} key={currency.code} onClick={() => handleSelect(currency)}>
                    {currency.code}
                    <currency.Icon/>
                  </DropdownItem>
                ))}
              </DropdownContent>
            )}
          </Dropdown>
        </InputContainer>
        <AddressContainer>
          <SubTitle>Your Solana address</SubTitle>
          <Input value='2v8dhFoY2Pes2EYZsHh8G' readOnly />
        </AddressContainer>
        <Btn onClick={() => setSendOrder(true)}>Pending approval</Btn>
      </TabContentItem>
      ) : (
        <SendOrder inputValue={inputValue} name={selectedCurrency.code} Icon={selectedCurrency.Icon}/>
    )} </>
  )
};
