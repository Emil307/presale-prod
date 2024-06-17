import React from 'react';
import { Header } from '../../widgets/header';
import { Intro } from '../../widgets/intro';
import { Faq } from '../../widgets/faq';
import { Footer } from '../../widgets/footer';

export const Presale: React.FC = () => {
  return (
    <>
      <Header/>
      <Intro/>
      <Faq/>
      <Footer/>
    </>
  )
}
