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
  Label,
  AddressContainer,
  Btn,
} from './styles';

type TabContentProps = {
  inputValue: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  Icon: FC;
};

export const TabContentStandart: FC<TabContentProps> = ({ inputValue, handleInputChange, name, Icon }) => {
  const [isSendOrder, setSendOrder] = useState<boolean>(false);
  const resetStatus = () => {
    setSendOrder(false);
  }

  useEffect(() => {
    if(isSendOrder) {
      return resetStatus;
    }
  })

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
            <Label>
              <div className="svgWrap">
                <Icon/>
              </div>
              {name}
              </Label>
          </InputContainer>
          <AddressContainer>
            <SubTitle>Your Solana address</SubTitle>
            <Input value='2v8dhFoY2Pes2EYZsHh8G' readOnly />
          </AddressContainer>
          <Btn onClick={() => setSendOrder(true)}>Pending approval</Btn>
        </TabContentItem>
      ):(
        <SendOrder inputValue={inputValue} name={name} Icon={Icon}/>
      )}
    </>
  )
};
