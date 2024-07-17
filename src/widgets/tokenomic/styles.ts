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
  width: calc(100% - 40px);
  max-height: 100%;
  max-width: 1368px;
  background-color: var(--main-white);
  padding: 36px 16px;
  border-radius: 12px;
  position: relative;
  animation: ${slideIn} 0.3s ease-out forwards;
  @media screen and (max-width: 998px) {
    width: 358px;
  }
  @media screen and (max-width: 998px) and (orientation: landscape) {
    width: 100%;
    overflow-y: auto;
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

export const ModalText = styled.p`
  text-align: center;
  max-width: 536px;
  margin: 16px auto;
  font-size: 14px;
  letter-spacing: -0.28px;
  line-height: 22.4px;
  font-weight: 400;
`;

export const ZoomableContainer = styled.div`
  width: 100%;
  height: 526px;
  touch-action: none;
  @media screen and (max-width: 998px) {
    height: 127px;
  }
  @media screen and (max-width: 998px) and (orientation: landscape) {
    height: 247px;
  }
  img {
    width: 100%;
    max-width: 1336px;
    height: 100%;
    object-fit: contain;
    transition: 0.2s ease-in-out;
  }
`;





