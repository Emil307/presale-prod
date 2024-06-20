import React, { useState, useEffect } from 'react';
import logo from '../../assets/icons/logo.svg';
import darkTheme from '../../assets/icons/dark-theme.svg';
import menu from '../../assets/icons/menu.svg';
import close from '../../assets/icons/close.svg';
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
  MenuButton,
} from './styles';


export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow= 'hidden';
    } else {
      document.body.style.overflow= '';
    }
  }, [isOpen]);

  return (
    <Page>
      <Container>
        <Logo src={logo} alt='punks'/>
        <Right className={isOpen ? 'open': ''}>
          <Nav>
            <Link>Home</Link>
            <Link>Roadmap</Link>
            <Link>Punkinomics</Link>
            <Link>Presale</Link>
          </Nav>
          <Buttons>
            <WalletButton>CONNECT WALLET</WalletButton>
            <ThemeButton><img src={darkTheme} alt="Dark theme" /></ThemeButton>
          </Buttons>
        </Right>
        <MenuButton open={isOpen} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <img src={close} alt="close menu" /> : <img src={menu} alt="open menu" />}
        </MenuButton>
      </Container>
    </Page>
  )
}
