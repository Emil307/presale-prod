import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import {
  ModalBackdrop,
  ModalContainer,
  Title,
  Text,
  Field,
  ButtonPanel,
  Button
} from './styles';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConnectWallet: React.FC<ModalProps> = observer(({ isOpen, onClose}) => {

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
        <Title>Is that your wallet?</Title>
        <Text>
          If you specify an incorrect wallet, the funds will be lost. Please double-check it
        </Text>
        <Field>2v8dhFoY2Pes2EYZsHh8G...</Field>
        <ButtonPanel>
          <Button>back</Button>
          <Button className='black' onClick={onClose}>confirm</Button>
      </ButtonPanel>
      </ModalContainer>
    </ModalBackdrop>
  )
})
