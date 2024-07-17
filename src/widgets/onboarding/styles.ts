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
  background-color: var(--onboardingBg);
  border: 1px solid rgba(var(--onboardingBr-rgb), 0.08);
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
  color: rgb(var(--onboardingColor-rgb));
  text-transform: uppercase;
  display: block;
  margin-bottom: 12px;
`;


export const Text = styled.p`
  font-size: 14px;
  line-height: 22.4px;
  letter-spacing: -0.3px;
  font-weight: 400;
  color: rgba(var(--onboardingColor-rgb), 0.9);
  text-align: left;
`;

export const ButtonPanel = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 24px;
`;

export const Button = styled.button`
  background: transparent;
  border: 1px solid rgba(var(--onboardingBr-rgb), 0.15);
  width: 100%;
  height: 64px;
  line-height: 64px;
  border-radius: 8px;
  text-transform: uppercase;
  color: rgb(var(--onboardingColor-rgb));
  font-weight: 700;
  font-size: 15px;
  transition: background 0.2s ease-in-out;
  &:hover {
    background: rgba(var(--onboardingButtonBg-rgb), 0.3);
  }
  &.white {
    background: rgb(var(--onboardingButtonBg-rgb));
    color: rgb(var(--onboardingColorDark-rgb));
    &:hover {
      background: rgba(var(--onboardingButtonBg-rgb), 0.7);
    }
  }

`;


