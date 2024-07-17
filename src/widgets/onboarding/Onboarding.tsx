import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import close from '../../assets/icons/close2.svg';
import {
  ModalBackdrop,
  ModalContainer,
  ModalButtonClose,
  Title,
  Text,
  ButtonPanel,
  Button
} from './styles';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  setActiveTab: (method: string) => void;
}

interface FirstModalProps {
  onClose: () => void;
}

const FirstModal: React.FC<FirstModalProps>  = ({onClose}) => {
  const handleNoClick = () => {
    window.location.href = 'https://wepunks.wtf';
  };

  return (
    <>
      <Title>welcome,punks!🍕</Title>
      <Text>
        By entering, you will be one of the earliest users of PIZZA'S beta PUNKS project.
        <br/><br/>
        We are recruiting brave on-chain catdets to be the first to spear their cat claws through the decentralized meta.
        <br/><br/>
        Ready for chaos?
      </Text>
      <ButtonPanel>
        <Button onClick={handleNoClick}>no</Button>
        <Button className='white' onClick={onClose}>
          yes!
        </Button>
      </ButtonPanel>
    </>
  )
}

export const Onboarding: React.FC<ModalProps> = observer(({ isOpen, onClose }) => {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;
  
  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <ModalButtonClose onClick={onClose}>
          <img src={close} alt="Modal close" />
        </ModalButtonClose>
        {isOpen && <FirstModal onClose={onClose}/>}
      </ModalContainer>
    </ModalBackdrop>
  )
})
