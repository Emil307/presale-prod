import styled, { keyframes } from 'styled-components';


export const FooterWrapper = styled.footer`
  background: var(--main-black);
  border-radius: 12px;
  padding: 32px 32px 9px;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  justify-content: center;
  flex-wrap: wrap;
  @media screen and (max-width: 1440px) {
    align-items: center;
    padding: 32px;
    width: 100%;
  }
  @media screen and (max-width: 998px) {
    display: block;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1888px;
  margin: 0 auto;
  padding: 0 16px 16px;
  @media screen and (max-width: 998px) {
    width: 390px;
  }
`;

export const Soc = styled.ul`
  display: flex;
  justify-content: center;
  margin: 43px 204px;
  @media screen and (max-width: 1440px) {
    margin: 64px 0;
  }
`;

export const SocItem = styled.li`
  margin: 0 8px;
  width: 56px;
  height: 56px;
`;

export const SocLink = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  font-size: 0;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Block = styled.div`
  width: 336px;
  text-align: center;
  margin-top: 23px;
  @media screen and (max-width: 1440px) {
    width: 250px;
    margin-top: 0;
  }
  @media screen and (max-width: 998px) {
    width: 100%;
  }
`;

export const Title = styled.span`
  display: block;
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  color: var(--text-white);
  font-size: 16px;
  line-height: 22.4px;
  letter-spacing: -0.8px;
  font-family: 'Roboto Mono', monospace;
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 22.4px;
  letter-spacing: -0.8px;
  font-weight: 400;
  font-family: 'Roboto Mono', monospace;
  margin-bottom: 31px;
  color: var(--text-white);
`;


const slider = keyframes`
  0% {
    transform: translateX(100px);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export const TextBottom = styled.p`
  width: fit-content;
  white-space: nowrap;
  animation: 140s linear 0s infinite ${slider};
  color: var(--text-white);
  opacity: 0.6;
`;

export const TextBottomWrap = styled.div`
  width: calc(100% + 32px);
  margin-right: -32px;
  margin-top: 35px;
  order: 4;
  @media screen and (max-width: 998px) {
    margin-top: 75px;
    margin-bottom: 8px;
  }
`;
