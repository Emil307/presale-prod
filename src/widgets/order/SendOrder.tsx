import { FC, useState, useEffect } from 'react';
import qrCode from '../../assets/img/qrcode.png';
import copy from '../../assets/icons/copy.svg';
import share from '../../assets/icons/share.svg';
import dots from '../../assets/icons/status-dots.svg';
import info from '../../assets/icons/info.svg';
import close from '../../assets/icons/info-close.svg';
import confirm from '../../assets/icons/confirm.svg';
import {
  TabContentItem,
  SubTitle,
  Label,
  Btn,
  AddressContainer,
  Input,
  OrderPrice,
  OrderCount,
  OrderAddressConteiner,
  OrderAddress,
  OrderAddressQR,
  OrderAddressWallet,
  OrderAddressButtons,
  OrderAddressButton,
  OrderStatusWrap,
  OrderStatus,
  OrderStatusImg,
  OrderStatusName,
  OrderInfo,
  OrderInfoContent,
  OrderInfoBtn,
  OrderBottom,
  OrderBottomText,
  OrderTop,
  OrderConfirmed
} from './styles';

type SendOrderProps = {
  inputValue: string;
  name: string;
  Icon: FC;
};

type Status = {
  name: string;
  isDone: boolean;
};

export const SendOrder: FC<SendOrderProps> = ({ inputValue, name, Icon }) => {
  const [isOpenInfo, setIsOpenInfo] = useState<boolean>(true);
  const [statusAll, setStatusAll] = useState<string>('pending');
  const [statuses, setStatuses] = useState<Status[]>([
    { name: 'pending deposit', isDone: false },
    { name: 'Confirming', isDone: false },
    { name: 'exchanging', isDone: false },
    { name: 'Sending', isDone: false },
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setStatuses(currentStatuses => {
        const index = currentStatuses.findIndex(status => !status.isDone);
        if (index !== -1) {
          const newStatuses = [...currentStatuses];
          newStatuses[index].isDone = true;
          return newStatuses;
        }
        return currentStatuses;
      });
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (statuses[3].isDone) {
      setStatusAll('done');
    }
  });

  return (
    <TabContentItem className='active' >
      <OrderTop>
        {statusAll === 'pending' ? (
          <>
            <SubTitle>send deposit:</SubTitle>
            <OrderPrice>
              <OrderCount>{inputValue}</OrderCount>
              <Label className='orderLabel'>
                <div className="svgWrap">
                  <Icon/>
                </div>
                {name}
              </Label>
            </OrderPrice>
            <OrderAddressConteiner>
              <SubTitle>deposit address</SubTitle>
              <OrderAddress>
                <OrderAddressQR src={qrCode} alt='QR code'/>
                <OrderAddressWallet>UQAZZti55XSNJSAfcORb1C--9VKUBN7fi_UA0F5AQy31ucb</OrderAddressWallet>
                <OrderAddressButtons>
                  <OrderAddressButton>
                    <img src={copy} alt="Copy" />
                    Copy
                  </OrderAddressButton>
                  <OrderAddressButton>
                    <img src={share} alt="Share" />
                    Share
                  </OrderAddressButton>
                </OrderAddressButtons>
              </OrderAddress>
            </OrderAddressConteiner>
          </>
        ) : (
          <OrderConfirmed><img src={confirm} alt="Confirm" />exchange confirmed</OrderConfirmed>
        )}
      </OrderTop>
      <OrderStatusWrap>
        {statuses.map((status, idx) => (
          <OrderStatus key={idx}>
            <OrderStatusImg className={status.isDone ? 'done' : ''}>
              <img src={dots} alt="" />
            </OrderStatusImg>
            <OrderStatusName className={status.isDone ? 'done' : ''}>{status.name}</OrderStatusName>
          </OrderStatus>))
        }
      </OrderStatusWrap>
      {isOpenInfo ? (
        <OrderInfo>
        <img src={info} alt="Info" />
        <OrderInfoContent>
          if you sent the coins and the status did not change immediately, do not owrry. our system needs a few minutes to detect the transaction
        </OrderInfoContent>
        <OrderInfoBtn>
          <img src={close} alt="Close" onClick={()=>setIsOpenInfo(false)} />
        </OrderInfoBtn>
      </OrderInfo>
      ): null}
      <OrderBottom>
        <AddressContainer className='addressContainer'>
          <SubTitle>Your Solana address</SubTitle>
          <Input value='2v8dhFoY2Pes2EYZsHh8G' readOnly />
        </AddressContainer>
      </OrderBottom>
      <OrderBottomText>
        Don't forget to press it! <br/>Otherwise you will not participate in the PreSale
      </OrderBottomText>

      <Btn className={statusAll === 'done' ? '': 'disabled'}>
        press to buy $pizza’s</Btn>
    </TabContentItem>
  )
};
