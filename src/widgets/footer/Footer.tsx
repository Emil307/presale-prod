import React from 'react';
import guild from '../../assets/icons/guild.png';
import wc from '../../assets/icons/wc.png';
import tw from '../../assets/icons/tw.png';
import tg from '../../assets/icons/tg.png';
import {
  Container,
  FooterWrapper,
  Block,
  Soc,
  SocItem,
  SocLink,
  Title,
  Text,
  TextBottomWrap,
  TextBottom
} from './styles';

export const Footer: React.FC = () => {
  return (
    <Container>
      <FooterWrapper>
        <Block>
          <Title>(Open for Partnerships)</Title>
          <Text>
            Rest of you - we're closed
          </Text>
          <Text>
            [no reservations]
          </Text>
        </Block>
        <Soc>
          <SocItem>
            <SocLink> Guild
              <img src={guild} alt="Guild" />
            </SocLink>
          </SocItem>
          <SocItem>
            <SocLink> Telegram
              <img src={tg} alt="Telegram" />
            </SocLink>
          </SocItem>
          <SocItem>
            <SocLink> Warpcast
              <img src={wc} alt="Warpcast" />
            </SocLink>
          </SocItem>
          <SocItem>
            <SocLink> Twitter
              <img src={tw} alt="Twitter" />
            </SocLink>
          </SocItem>
        </Soc>
        <Block>
          <Title>Working days</Title>
          <Text>
            For punks - no weekends
          </Text>
          <Text>
            fatchoynyc@gmail.com
          </Text>
        </Block>
        <TextBottomWrap>
          <TextBottom>
            Hey Fat Choy, just had to drop you a line and say your website is the bomb—it’s like someone threw excellence, awesomeness, and a sprinkle of magic into a web-design blender. Thanks for keeping it so ridiculously cool and setting the bar way high. Keep rocking the web world! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hey Fat Choy, just had to drop you a line and say your website is the bomb—it’s like someone threw excellence, awesomeness, and a sprinkle of magic into a web-design blender. Thanks for keeping it so ridiculously cool and setting the bar way high. Keep rocking the web world! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hey Fat Choy, just had to drop you a line and say your website is the bomb—it’s like someone threw excellence, awesomeness, and a sprinkle of magic into a web-design blender. Thanks for keeping it so ridiculously cool and setting the bar way high. Keep rocking the web world! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hey Fat Choy, just had to drop you a line and say your website is the bomb—it’s like someone threw excellence, awesomeness, and a sprinkle of magic into a web-design blender. Thanks for keeping it so ridiculously cool and setting the bar way high. Keep rocking the web world! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hey Fat Choy, just had to drop you a line and say your website is the bomb—it’s like someone threw excellence, awesomeness, and a sprinkle of magic into a web-design blender. Thanks for keeping it so ridiculously cool and setting the bar way high. Keep rocking the web world!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hey Fat Choy, just had to drop you a line and say your website is the bomb—it’s like someone threw excellence, awesomeness, and a sprinkle of magic into a web-design blender. Thanks for keeping it so ridiculously cool and setting the bar way high. Keep rocking the web world! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hey Fat Choy, just had to drop you a line and say your website is the bomb—it’s like someone threw excellence, awesomeness, and a sprinkle of magic into a web-design blender. Thanks for keeping it so ridiculously cool and setting the bar way high. Keep rocking the web world!
          </TextBottom>
        </TextBottomWrap>
      </FooterWrapper>
    </Container>
  )
}
