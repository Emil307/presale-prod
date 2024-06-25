import styled from 'styled-components';

interface MenuButtonProps {
  open: boolean;
}

export const Page = styled.div`
  border-bottom: 1px solid var(--addable-gray);
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1368px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 84px;
  padding: 0 16px;


  @media screen and (max-width: 998px) {
    max-width: 358px;
  }
`;

export const Logo = styled.img`
  width: 144px;
  height: 22px;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;

  @media screen and (max-width: 998px) {
    position: fixed;
    top: 56px;
    right: 0;
    left: 0;
    bottom: 0;
    user-select: none;
    will-change: opacity, visibility;
    pointer-events: auto;
    text-align: center;
    opacity: 0;
    visibility: hidden;
    transition: visibility 600ms cubic-bezier(.4,0,.2,1), opacity 400ms cubic-bezier(.4,0,.2,1);
    padding-top: 60px;
    background: var(--main-white);
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    z-index: 0;
    width: 100%;
    height: calc(100vh - 56px);
    gap: 16px;
    &.open {
      visibility: visible;
      opacity: 1;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 40px;
  @media screen and (max-width: 998px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const Link = styled.a`
  color: inherit;
  font-family: 'Permanent Marker', sans-serif;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: -0.01em;
  @media screen and (max-width: 998px) {
    font-size: 32px;
    line-height: 44.8px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 12px;
  @media screen and (max-width: 998px) {
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
`;

export const WalletButton = styled.button`
  display: flex;
  align-items: center;
  height: 42px;
  padding: 0 12px;
  border-radius: 4px;
  background: var(--main-black);

  font-family: 'Roboto Mono', sans-serif;
  font-weight: 500;
  line-height: 125%;
  letter-spacing: 0.01em;
  color: inherit;
`;

export const ThemeButton = styled.button`
  display: flex;
  width: 42px;
  height: 42px;
  align-items: center;
  justify-content: center;
  background: var(--addable-gray);
  border-radius: 8px;
  border: 1px solid rgba(35, 31, 32, 0.08);
`;


export const LightImg = styled.img`
  width: 42px;
  height: 42px;
`;

export const MenuButton = styled.button<MenuButtonProps>`
  display: none;

  @media screen and (max-width: 998px) {
    display: block;
  }
`;
