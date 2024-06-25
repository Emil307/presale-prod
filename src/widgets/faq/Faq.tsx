import React from 'react';
import {
  Section,
  Container,
  Title,
  FaqList,
  FaqListItem,
  FaqItemTitle,
  FaqItemDescrib,
  FaqItemLink,
  FaqItemList,
  FaqItemListItem
} from './styles';
import themeState from '../../pages/Presale/store/themeState';
import { observer } from 'mobx-react-lite';

export const Faq: React.FC = observer(() => {
  return (
    <Section style={{background: themeState.theme === 'light' ? 'var(--main-white)' : 'var(--main-black)'}}>
      <Container>
        <Title style={{color: themeState.theme === 'light' ? 'var(--text-black)' : 'var(--text-white)'}}>FAQ</Title>
        <FaqList>
          <FaqListItem>
            <FaqItemTitle>What is LFG?</FaqItemTitle>
            <FaqItemDescrib>
              <p>
                LFG is Jupiter’s new method of launching and bootstrapping a token on-chain, with fully transparent on-chain MM and no shenanigans.
                <br/>
                <br/>
                This launch-style was used for $WEN and $JUP, and will continued to be used by projects applying to use the Jupiter launchpad.
                <br/>
                <br/>
                More information 
                <FaqItemLink >here.</FaqItemLink>
              </p>
            </FaqItemDescrib>
          </FaqListItem>
          <FaqListItem>
            <FaqItemTitle>Why should I care about LFG?</FaqItemTitle>
            <FaqItemDescrib>
              <p>
                LFG has 2 components, consisting of an Airdrop to existing community members and also an on-chain single-sided DLMM pool.
                <br/>
                <br/>
                The airdrop, usually decided by the project team is a reward mechanism for their community and sometimes Jupiter’s voters/stakers/users. This reward is separate and in addition to the Active Staking Rewards (ASR) for JUP stakers.
                <br/>
                <br/>
                The DLMM Pool also allows Jupiter users to Swap or set DCA and Limit Orders to acquire the token at launch, immediately on Jup.ag or this LFG site.
              </p>
            </FaqItemDescrib>
          </FaqListItem>
          <FaqListItem>
            <FaqItemTitle>Should I use a Limit Order or DCA?</FaqItemTitle>
            <FaqItemDescrib>
              <FaqItemList>
                <FaqItemListItem>
                Limit Orders -&gt; You know exactly the price you want to buy at, and want to be filled at that price specifically or none at all.
                </FaqItemListItem>
                <FaqItemListItem>DCAs -&gt; Spread out your orders over-time and accumulate $SHARK without being particular about price!</FaqItemListItem>
              </FaqItemList>
              <p>
                If you’re new to Jupiter’s DCAs & LOs, ask us in <FaqItemLink >Discord!</FaqItemLink>
              </p>
            </FaqItemDescrib>
          </FaqListItem>
          <FaqListItem>
            <FaqItemTitle>How do I use priority feeson Jupiter & Solana?</FaqItemTitle>
            <FaqItemDescrib>
              <p>
                View the current fees others are paying for various actions on Jupiter. You can then set a Max Fee, and Jupiter will intelligently change the fee to land your transactions.
                <br/>
                <br/>
                You can even set an Exact Fee override to default to the fee you chose.
                <br/>
                <br/>
                Take note for LO & DCA, these fees only apply for opening and not filling orders.
              </p>
            </FaqItemDescrib>
          </FaqListItem>
          <FaqListItem>
            <FaqItemTitle>What’s this DLMM pool?</FaqItemTitle>
            <FaqItemDescrib>
              <p>
                We are using a custom single-sided Meteora DLMM pool as a novel mechanism to bootstrap early liquidity. It has a low inital price for rapid price discovery and to attract immediate USDC liquidity for paper paws to dump.
                <br/>
                <br/>
                It also provides early backstop liquidity that the team cannot withdraw for the first 3 days. 100% transparent and on chain, no drama. Learn more <FaqItemLink >here.</FaqItemLink>
              </p>
            </FaqItemDescrib>
          </FaqListItem>
        </FaqList>
      </Container>
    </Section>
  )
});
