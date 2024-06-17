import styled from 'styled-components';


export const Section = styled.section`
  max-width: 100%;
  width: 100%;
`;

export const Container = styled.div`
  max-width: 632px;
  width: 100%;
  margin: 48px auto 87px;
  padding: 0 16px;
`;

export const Title = styled.h2`
  text-align: center;
  font-family: 'Permanent Marker', sans-serif;
  font-size: 40px;
  letter-spacing: -0.01em;
  line-height: 40px;
  font-weight: 400;
`;

export const FaqList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  list-style: none;
  margin: 32px 0;
  @media screen and (max-width: 998px) {
    margin: 30px 0;
  }
`;

export const FaqListItem = styled.li`
  background: var(--addable-gray);
  border: 1px solid var(--border-faq);
  border-radius: 12px;
  padding: 16px 16px;
  margin-bottom: 8px;
`;

export const FaqItemTitle = styled.h3`
  font-family: 'Permanent Marker', sans-serif;
  font-size: 24px;
  letter-spacing: 0.24px;
  line-height: 30px;
  font-weight: 400;
  margin-bottom: 16px;
  text-transform: uppercase;
  max-width: 508px
`;

export const FaqItemDescrib = styled.div`
  width: 100%;
  p {
    letter-spacing: -0.28px;
    text-align: justify;
    line-height: 1.55;
    @media screen and (max-width: 998px) {
      letter-spacing: -0.4px;
      line-height: 1.56;
    }
  }
`;

export const FaqItemLink = styled.a`
  text-decoration: underline;
  color: var(--text-black);
  font-weight: 400;
  font-family: 'Roboto Mono', monospace;
  font-size: 14px;
`;

export const FaqItemList = styled.ul`
  color: var(--text-black);
  font-size: 14px;
  letter-spacing: -0.28px;
  text-align: justify;
  line-height: 22.4px;
`;

export const FaqItemListItem = styled.li`
  position: relative;
  padding-left: 15px;
  margin-bottom: 24px;
  @media screen and (max-width: 998px) {
    margin-bottom: 22px;
  }
  &:before {
    content: ' · ';
    position: absolute;
    left: 0;
    top: 0;
    font-size: 26px;
    line-height: 22.4px;
  }
`;
