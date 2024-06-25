import styled from 'styled-components';
import { ResponsiveContainer } from 'recharts';


export const StyledResponsiveContainer = styled(ResponsiveContainer)`
  height: 487.28px !important;
  margin: 0 auto;
  max-width: 1368px !important;
  @media screen and (max-width: 998px) {
    height: 374px !important;
  }
`;

export const ChartContainer = styled.div`
  overflow: hidden;
  position: relative;
`;

export const Section = styled.section`
  background: var(--main-black);
  border-radius: 12px;
  padding: 32px 32px 9px;
  width: 100%;
  overflow: hidden;
`;

export const Container = styled.div`
  max-width: 1888px;
  width: 100%;
  margin: 48px auto 87px;
  padding: 0 16px;
  @media screen and (max-width: 998px) {
    width: 390px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-family: 'Permanent Marker', sans-serif;
  font-size: 40px;
  letter-spacing: -0.01em;
  line-height: 40px;
  font-weight: 400;
  color: var(--main-white);
  margin: 0 auto 32px;
  @media screen and (max-width: 998px) {
    width: 294px;
  }
`;


export const TooltipWrapper = styled.div`
  background-color: var(--chart-block-bg);
  padding: 16px;
  border: 1px solid var(--chart-block-br);
  border-radius: 12px;
`;

export const BlockTitle = styled.span`
  display: block;
  color: var(--chart-block-title);
  text-transform: uppercase;
  margin-bottom: 4px;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.14px;
  line-height: 18.46px;
  @media screen and (max-width: 998px) {
    font-size: 12px;
    letter-spacing: 0.12px;
    line-height: 15.83px;
    margin-bottom: 2px;
  }
`;

export const BlockText = styled.span`
  display: block;
  color: var(--text-white);
  font-weight: 500;
  letter-spacing: 0.18px;
  font-size: 18px;
  line-height: 23.74px;
  font-family: 'Roboto Mono', monospace;
  text-transform: uppercase;
  &:not(:last-child) {
    margin-bottom: 12px;
  }
  @media screen and (max-width: 998px) {
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 0.16px;
    line-height: 21.1px
  }
`;


export const ChartMiddleBlock = styled.div`
  background-color: var(--chart-block-bg);
  padding: 16px 11px;
  border: 1px solid var(--chart-block-br);
  border-radius: 12px;
  top: 59px;
  left: 0;
  right: 0;
  margin: 0 auto;
  position: absolute;
  width: 151px;
  @media screen and (max-width: 998px) {
    top: 0;
    text-align: center;
    padding: 12px;
    width: 152px;
  }
`;

export const BlocksContainer = styled.div`
  display: flex;
  padding: 32px 0 23px;
  gap: 8px;
  margin: 0 auto;
  max-width: 1368px !important;
  @media screen and (max-width: 998px) {
    flex-direction: column;
  }
`;

export const Block = styled.div`
  background-color: var(--chart-block-bg);
  padding: 19px 23px;
  border: 1px solid var(--chart-block-br);
  border-radius: 8px;
  width: 100%;
  overflow: hidden;
  @media screen and (max-width: 998px) {
    top: 0;
    padding: 11px 11px 13px;
  }
  span:first-child {
    margin-bottom: 12px;
    @media screen and (max-width: 998px) {
      margin-bottom: 2px;
    }
  }
  span:nth-child(2) {
    font-size: 24px;
    letter-spacing: 0.24px;
    line-height: 31.65px;
    @media screen and (max-width: 998px) {
      font-size: 16px;
      line-height: 21.1px;
      letter-spacing: 0.16px;
    }
  }
`;
