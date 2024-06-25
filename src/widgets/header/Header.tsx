import React from 'react';
import logo from '../../assets/icons/logo.svg';
import logoWhite from '../../assets/icons/punks-white.svg';
import darkTheme from '../../assets/icons/dark-theme.svg';
import lightTheme from '../../assets/icons/light-theme.svg';
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
  LightImg,
  MenuButton,
} from './styles';
import themeState from '../../pages/Presale/store/themeState';
import { observer } from 'mobx-react-lite';

export const Header: React.FC = observer(() => {
  function handleSetTheme(theme: 'dark' | 'light') {
    themeState.setTheme(theme);
  }

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
        <Right>
          <Nav>
            <Link>Home</Link>
            <Link>Roadmap</Link>
            <Link>Punkinomics</Link>
            <Link>Presale</Link>
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
        <MenuButton><img src={menu} alt="open menu" /></MenuButton>
      </Container>
    </Page>
  )
});
