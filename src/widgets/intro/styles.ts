import styled from "styled-components";

export const Container = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  gap: 64px;
  margin: 0 auto;
  padding: 32px 0 95px;

  @media screen and (max-width: 998px) {
    width: 358px;
    padding: 16px 0 96px;
  }
`;

export const Img = styled.img`
  border-radius: 8px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Title = styled.h1`
  text-align: center;
  font-family: 'Permanent Marker', sans-serif;
  font-size: 40px;
  letter-spacing: -0.01em;
`;

export const Body = styled.div` 
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const H3 = styled.h3`
  color: inherit;
  font-family: 'Permanent Marker', sans-serif;
  font-size: 24px;
  line-height: 125%;
  letter-spacing: 0.01em;
`;

export const Links = styled.div`
  display: flex;
  gap: 10px;
  width: fit-content;
  margin: 0 auto;
`;

export const Link = styled.a`
  color: var(--main-black);
  font-family: 'Roboto Mono', sans-serif;
  font-size: 15px;
  font-weight: 500;
  line-height: 125%;
  letter-spacing: 0.01em;
  text-transform: uppercase;

  padding: 8px 12px;
  border-radius: 32px;
  background: var(--addable-gray);
`;
