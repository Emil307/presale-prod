import styled from 'styled-components';

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
    display: none;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 40px;
`;

export const Link = styled.a`
  color: var(--main-black);
  font-family: 'Permanent Marker', sans-serif;
  font-size: 20px;
  line-height: 100%;
letter-spacing: -0.01em;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 12px;
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
  color: var(--main-white);
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

export const MenuButton = styled.button`
  display: none;

  @media screen and (max-width: 998px) {
    display: block;
  }
`;
