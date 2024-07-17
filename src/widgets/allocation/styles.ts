import styled, { keyframes } from 'styled-components';
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

interface AllocationItemProps {
  percent: number;
  background: string
}

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(var(--main-black-rgb), 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  animation: ${fadeIn} 0.2s ease-out forwards;
`;

export const ModalContainer = styled.div`
  width: 632px;
  background-color: var(--main-white);
  padding: 36px 16px;
  border-radius: 12px;
  position: relative;
  overflow-y: auto;
  max-height: 100%;
  animation: ${slideIn} 0.3s ease-out forwards;
  @media screen and (max-width: 998px) {
    width: 358px;
  }
`;

export const ModalButtonClose = styled.button`
  background: transparent;
  width: 36px;
  height: 36px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const ModalHeader = styled.h2`
  text-align: center;
  font-family: 'Permanent Marker', sans-serif;
  font-size: 40px;
  letter-spacing: -0.01em;
  line-height: 40px;
  font-weight: 400;
`;

export const AllocationList = styled.ul`
  list-style: none;
  padding: 8px;
  margin: 36px 0 0;
  background: var(--addable-gray);
  border-radius: 8px;
  border: 1px solid rgba(var(--main-black-rgb), 0.08);
`

export const AllocationItem = styled.li<AllocationItemProps>`
  background-color: ${props => props.background};
  color: ${props => props.background === 'var(--main-black)' ? 'var(--text-white)': 'rgb(var(--main-black-rgb))'};
  padding: 10px 16px;
  margin-bottom: 4px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 16px;
  min-height: 40px;
  height: ${props => props.percent === 0 ? 'auto' : `${props.percent * 5.04}px`};
  border-radius: 8px;
  border: ${props => props.percent === 0 ? '1px solid var(--modalItemBr)' : `none`};
  @media screen and (max-width: 998px) {
    height: ${props => props.percent === 0 ? 'auto' : `${props.percent * 3.04}px`};

  }
  &:last-child {
    margin-bottom: 0;
  }
  &:first-child {
    border: none;
  }
  span:nth-child(2) {
    opacity: 0.5;
  }
`;


export const AllocationItemName = styled.span`
  font-weight: 500;
  font-size: 15px;
  line-height: 18.75px;
  letter-spacing: 0.15px;
  text-transform: uppercase;
`;
