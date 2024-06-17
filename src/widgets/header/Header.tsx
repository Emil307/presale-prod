import React from 'react';
import logo from '../../assets/icons/logo.svg';
import darkTheme from '../../assets/icons/dark-theme.svg';
import menu from '../../assets/icons/menu.svg';
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
  return (
    <Page>
      <Container>
        <Logo src={logo} alt='punks'/>
        <Right>
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
        <MenuButton><img src={menu} alt="open menu" /></MenuButton>
      </Container>
    </Page>
  )
}