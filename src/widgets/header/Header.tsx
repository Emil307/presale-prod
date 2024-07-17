import React, { useState, useEffect } from 'react';
import logo from '../../assets/icons/logo.svg';
import logoWhite from '../../assets/icons/punks-white.svg';
import darkTheme from '../../assets/icons/dark-theme.svg';
import lightTheme from '../../assets/icons/light-theme.svg';
import menu from '../../assets/icons/menu.svg';
import close from '../../assets/icons/close.svg';
import { Allocation } from '../allocation';
import { Tokenomic } from '../tokenomic';
import {
  Page,
  Container,
  Logo,
  Right,
  Nav,
  Link,
  Buttons,
  WalletButton,
  ThemeButton,
  LightImg,
  MenuButton,
} from './styles';
import themeState from '../../pages/Presale/store/themeState';
import { observer } from 'mobx-react-lite';

export const Header: React.FC = observer(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAllocationOpen, setAllocationOpen] = useState<boolean>(false);
  const [isTokenomicOpen, setTokenomicOpen] = useState<boolean>(false);

  function handleSetTheme(theme: 'dark' | 'light') {
    themeState.setTheme(theme);
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow= 'hidden';
    } else {
      document.body.style.overflow= '';
    }
  }, [isOpen]);

  return (
    <Page
      style={{
        background: themeState.theme === 'light' ? 'var(--main-white)' : 'var(--main-black)',
        borderBottom: themeState.theme === 'light' ? '1px solid var(--addable-gray)' : '1px solid var(--main-black)',
        color: themeState.theme === 'light' ? 'var(--main-black)' : 'var(--main-white)',
      }}
    >
      <Container>
        <Logo src={themeState.theme === 'light' ? logo : logoWhite} alt='punks'/>
        <Right className={isOpen ? 'open': ''}>
          <Nav>
            <Link href="https://wepunks.wtf/" target='_blank'>Home</Link>
            <Link href="https://wepunks.wtf/#roadmap" target='_blank'>Roadmap</Link>
            <Link onClick={() => setTokenomicOpen(true)}>Punkinomics</Link>
            <Link onClick={() => setAllocationOpen(true)}>Allocation</Link>
            <Link href="/#presale" onClick={() => setIsOpen(false)}>Presale</Link>
          </Nav>
          <Buttons>
            <WalletButton
              style={{
                color: themeState.theme === 'light' ? 'var(--main-white)' : 'var(--main-black)',
                background: themeState.theme === 'light' ? 'var(--main-black)' : 'var(--main-white)',
              }}
            >
              CONNECT WALLET
            </WalletButton>
            {themeState.theme === 'light' &&
              <ThemeButton onClick={() => handleSetTheme('dark')}>
                <img src={darkTheme} alt="Dark theme" />
              </ThemeButton>
            }
            {themeState.theme === 'dark' &&
              <button onClick={() => handleSetTheme('light')}>
                <LightImg src={lightTheme} alt="Dark theme" />
              </button>
            }
          </Buttons>
        </Right>
        <MenuButton open={isOpen} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <img src={close} alt="close menu" /> : <img src={menu} alt="open menu" />}
        </MenuButton>
        <Tokenomic isOpen={isTokenomicOpen} onClose={() => setTokenomicOpen(false)}/>
        <Allocation isOpen={isAllocationOpen} onClose={() => setAllocationOpen(false)}/>
      </Container>
    </Page>
  )
});
