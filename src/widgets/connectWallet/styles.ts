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
  width: 409px;
  background-color: var(--walletConnectBg);
  border: 1px solid rgba(var(--walletConnectBr-rgb), 0.08);
  padding: 24px;
  border-radius: 12px;
  position: relative;
  overflow-y: auto;
  max-height: 100%;
  animation: ${slideIn} 0.3s ease-out forwards;
`;

export const ModalButtonClose = styled.button`
  background: transparent;
  width: 24px;
  height: 24px;
  cursor: pointer;
  position: absolute;
  top: 12px;
  right: 12px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Title = styled.span`
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.24px;
  font-weight: 700;
  color: rgb(var(--walletConnectColor-rgb));
  text-transform: uppercase;
  display: block;
  margin-bottom: 12px;
  text-align: center;
`;


export const Text = styled.p`
  font-size: 14px;
  line-height: 22.4px;
  letter-spacing: -0.3px;
  font-weight: 400;
  color: rgba(var(--walletConnectText-rgb), 0.9);
  text-align: center;
`;

export const ButtonPanel = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 24px;
`;

export const Button = styled.button`
  background: rgb(var(--walletConnectField-rgb));
  width: 100%;
  height: 64px;
  line-height: 64px;
  border-radius: 8px;
  text-transform: uppercase;
  color: rgb(var(--walletConnectText-rgb));
  font-weight: 700;
  font-size: 15px;
  transition: background 0.2s ease-in-out;
  &:hover {
    background: rgba(var(--walletConnectField-rgb), 0.6);
  }
  &.black {
    background: rgb(var(--walletConnectColor-rgb));
    color: rgb(var(--walletConnectColorLight-rgb));
    &:hover {
      background: rgba(var(--walletConnectColor-rgb), 0.85);
    }
  }
`;


export const Field = styled.div`
  background: rgb(var(--walletConnectField-rgb));
  width: 100%;
  height: 64px;
  line-height: 64px;
  font-size: 18px;
  letter-spacing: 0.36px;
  font-weight: 500;
  border-radius: 8px;
  color: rgb(var(--walletConnectText-rgb));
  margin-top: 24px;
  padding: 0 51px;
  border: 1px solid rgba(var(--walletConnectText-rgb), 0.08)

`;

