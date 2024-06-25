import React from 'react';
import intro from '../../assets/img/intro.jpg';
import {
  Container,
  Img,
  Content,
  Title,
  Body,
  Text,
  H3,
  Links,
  Link,
} from './styles';
import themeState from '../../pages/Presale/store/themeState';
import { observer } from 'mobx-react-lite';

export const Intro: React.FC = observer(() => {
  return (
    <div style={{ background: themeState.theme === 'light' ? 'var(--main-white)' : 'var(--main-black)' }}>
      <Container>
        <Img src={intro} alt="pizzas" />
        <Content>
          <Title style={{color: themeState.theme === 'light' ? 'var(--text-black)' : 'var(--text-white)'}}>$PIZZAS by Punkinomics</Title>
          <Body>
              <Text style={{color: themeState.theme === 'light' ? 'var(--text-black)' : 'var(--text-white)'}}>
                <p>We are "PUNKS" and we believe that everyone on this planet deserves equal access to capital when they need it most. At any time, every time.</p>
                <p>We see the promise of crypto and peer-to-peer (P2P) economies as the new wave, not just in redistributing wealth but also in creating new fortunes by supporting the underserved.</p>
                <p>Our mission? To eliminate barriers and make capital truly global, linking the world as seamlessly as the internet itself. And you—the game-changers, the visionaries, the "PUNKS"—are a crucial part of this mission.</p>
              </Text>
              
              <Text style={{color: themeState.theme === 'light' ? 'var(--text-black)' : 'var(--text-white)'}}>
                <H3>$PIZZAS Today</H3>
                <p>We are the #1 NFT lending protocol on Solana, boasting a 90% market share! We've set a world record for the total number of loans issued across all blockchain networks.</p>
              </Text>

              <Text style={{color: themeState.theme === 'light' ? 'var(--text-black)' : 'var(--text-white)'}}>
                <H3>$PIZZAS Tomorrow</H3>
                <p>Taking the lead in NFT finance on Ordinals and pioneering liquidity for consumer Real-World Assets (RWAs). Picture us as the PayPal of the web3 world. Whether it's an online marketplace or a future eBay of web3, PUNKS will offer “buy now, pay later” services without the headaches of traditional credit agencies. Here, your loan or even house mortgage will be competitively priced by the open market, ensuring you clinch the best possible rates.</p>
              </Text>

              <Text style={{color: themeState.theme === 'light' ? 'var(--text-black)' : 'var(--text-white)'}}>
                <H3>$PIZZAS Day After Tomorrow</H3>
                <p>Aspiring to become the world’s foremost brand in P2P lending and borrowing for every conceivable consumer asset. From fungible tokens and NFTs to uncollateralized loans for people around the globe, our vision is all-encompassing. A large portion of the world currently relies on pawnshops or peers for loans, and we are here to transform this dynamic. We aim to provide secure, instant, and fairly priced financial opportunities, especially in developing countries. It's an ambitious goal, but we’ve got the grit to make it happen.</p>
                <p>Don’t just witness our journey—become an integral part of it.</p>
                <p>Together, we will revolutionize the world! 🫶🎸✊</p>
              </Text>
          </Body>
          <Links>
            <Link>telegram</Link>
            <Link>twitter(x)</Link>
            <Link>pokenomics</Link>
          </Links>
        </Content>
      </Container>
    </div>
  )
});
