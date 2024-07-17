import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Cell, TooltipProps } from 'recharts';
import { data, dataMobile } from './ChartData';
import {
  Page,
  Section,
  ChartContainer,
  Container,
  Title,
  StyledResponsiveContainer,
  TooltipWrapper,
  BlockTitle,
  BlockText,
  ChartMiddleBlock,
  BlocksContainer,
  Block
} from './styles';
import themeState from '../../pages/Presale/store/themeState';
import { observer } from 'mobx-react-lite';


const getColor = (price: number) => {
  if (price <= 0.05) return 'var(--orange)';
  if (price <= 0.06) return 'var(--orange-dark)';
  if (price <= 0.07) return 'var(--yellow)';
  if (price <= 0.08) return 'var(--red)';
  return 'var(--gray)';
};

const getBorderCells = (data: any) => {
  return data.map((entry: any, index: number) => (
    <Cell key={`cell-${index}`} fill={getColor(entry.price)} stroke="var(--main-black)" strokeWidth={2} />
  ));
};

const CustomTickFormatter = (width: number) => (value: any, index: number) => {
  if(width > 998) {
    return index % 2 !== 0 ? value : '';
  } else {
    return value;
  }
};

const CustomTooltip = ({ active, payload }: TooltipProps<any, any>) => {
  if (active && payload && payload.length) {
    return (
      <TooltipWrapper>
        <BlockTitle>Price</BlockTitle>
        <BlockText>{payload[0].value.toFixed(2)}</BlockText>
        <BlockTitle>#PUNKS</BlockTitle>
        <BlockText>38.167,37</BlockText>
        <BlockTitle>USDC</BlockTitle>
        <BlockText>0,00</BlockText>
      </TooltipWrapper>
    );
  }
  return null;
};

export const Chart: React.FC = observer(() => {
  const { width } = useWindowSize();

  let displayData = [];
  let margin = {};
  if (width > 998) {
    displayData = data;
    margin = {top: 0, right: 6, left: 14, bottom: 20}
  } else {
    displayData = dataMobile;
    margin = {top: 0, right: 0, left: 0, bottom: 17}
  }


  const maxY = Math.max(...displayData.map((item) => item.price));
  const yAxisDomain = [0, maxY * 2];


  return (
    <Page style={{background: themeState.theme === 'light' ? 'var(--main-white)' : 'var(--main-black)'}}>
      <Container>
        <Section id="presale">
          <Title>PRE-SALE INFO</Title>
          <ChartContainer>
            <ChartMiddleBlock>
              <BlockTitle>Current Price</BlockTitle>
              <BlockText>0.5040 USDC</BlockText>
            </ChartMiddleBlock>
            <StyledResponsiveContainer width="100%" >
              <BarChart data={displayData}
                        margin={margin}>
                <XAxis dataKey="date"
                      axisLine={false}
                      tickLine={false}
                      angle={-45}
                      textAnchor="end"
                      tickMargin={10}
                      tickFormatter={CustomTickFormatter(width)}
                      style={{ fontSize: '10px' }}/>
                <YAxis tick={false}
                      axisLine={false}
                      stroke="var(--main-black)"
                      width={0}
                      domain={yAxisDomain}/>
                <Tooltip cursor={{ fill: 'transparent' }} content={<CustomTooltip />} />
                <Bar dataKey="price"
                    fill="var(--orange)"
                    radius={[4, 4, 4, 4]}>
                  {getBorderCells(data)}
                </Bar>
              </BarChart>
            </StyledResponsiveContainer>
            <BlocksContainer>
              <Block>
                <BlockTitle>DEPOSIT</BlockTitle>
                <BlockText>N SOL</BlockText>
              </Block>
              <Block>
                <BlockTitle>Time to completion</BlockTitle>
                <BlockText>DAY:HOUR:MIN:Sec:milisec</BlockText>
              </Block>
            </BlocksContainer>
          </ChartContainer>
        </Section>
      </Container>
    </Page>
  )
});
