import React from 'react';
import { Header } from '../../widgets/header';
import { Intro } from '../../widgets/intro';
import { Faq } from '../../widgets/faq';
import { Footer } from '../../widgets/footer';
import { Chart } from '../../widgets/chart';

export const Presale: React.FC = () => {
  return (
    <>
      <Header/>
      <Intro/>
      <Chart/>
      <Faq/>
      <Footer/>
    </>
  )
}
