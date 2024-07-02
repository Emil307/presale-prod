import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import close from '../../assets/icons/close.svg';
import {
  ModalBackdrop,
  ModalContainer,
  ModalButtonClose,
  ModalHeader,
  AllocationList,
  AllocationItem,
  AllocationItemName
} from './styles';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export const Allocation: React.FC<ModalProps> = observer(({ isOpen, onClose }) => {

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  const allocations = [
    { label: "Market + CEX Liquidity", percent: 15, background:"var(--main-black)"},
    { label: "Makers", percent: 15, background:"var(--modalItemBg1)" },
    { label: "LP Burnt", percent: 20, background:"var(--modalItemBg2)" },
    { label: "Airdrop", percent: 50, background:"var(--modalItemBg3)" },
    { label: "Team", percent: 0, background:"transparent" },
    { label: "Founder", percent: 0, background:"transparent" },
  ];
  if (!isOpen) return null;
  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <ModalButtonClose onClick={onClose}>
          <img src={close} alt="Modal close" />
        </ModalButtonClose>
        <ModalHeader>ALLOCATION</ModalHeader>
        <AllocationList>
          <AllocationItem percent={0} background='transparent'>
            <AllocationItemName>token distribution</AllocationItemName>
          </AllocationItem>
          {allocations.map(allocation => (
            <AllocationItem key={allocation.label} percent={allocation.percent} background={allocation.background}>
              <AllocationItemName>{allocation.label}</AllocationItemName>
              <span>{allocation.percent}%</span>
            </AllocationItem>
          ))}
        </AllocationList>
      </ModalContainer>
    </ModalBackdrop>
  )
})
