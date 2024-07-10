import React  from 'react';
import { Header } from '../../widgets/header';
import { Intro } from '../../widgets/intro';
import { Faq } from '../../widgets/faq';
import { Footer } from '../../widgets/footer';
import { Chart } from '../../widgets/chart';
import { Order } from '../../widgets/order';
import themeState from './store/themeState';
import { observer } from 'mobx-react-lite';

export const Presale: React.FC = observer(() => {
  return (
    <div style={{background: themeState.theme === 'light' ? 'var(--main-white)' : 'var(--main-black)'}}>
      <Header/>
      <Intro/>
      <Chart/>
      <Order/>
      <Faq/>
      <Footer/>
    </div>
  )
});
