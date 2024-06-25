import { FC, useState } from 'react';
import { ETH, BNB, Polygon, Arbitrum, Avalanche, Linea, OP, Neon, Gnosis} from '../../iconComponents/TabIcons';
import searchIcon from '../../assets/icons/search.svg';
import filterCloseIcon from '../../assets/icons/filter-close.svg';
import { TabContentStandart } from './TabContentStandart';
import {
  Filters,
  FiltersItem,
  FiltersItemClose,
  TabContentItem,
  FilterSearchWrap,
  FilterSearch,
  FilterSearchList,
  FilterSearchListItem,
  FilterSearchListNameAndId,
  FilterSearchListName,
  FilterSearchListId,
  FilterSearchFinance,
  FilterSearchBalance,
  FilterSearchPrice
} from './styles';

type TabContentEvmProps = {
  activeFilter: {name: string, Icon: FC<{}>};
  setActiveFilter: (filter: {name: string, Icon: FC<{}>}) => void;
  inputValue: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};


const tokens = [
  { name: 'ETH', id: 'ETH', balance: 0, price: 1.235 },
  { name: 'USD COIN', id: 'USDC 0x8335...2913', balance: 0, price: 1.235 },
  { name: 'USD BASE COIN', id: 'USDbC 0x8335...2913', balance: 0, price: 1.235 },
  { name: 'WRAPPED ETHER', id: 'WETH 0x8335...2913', balance: 0, price: 1.235 },
]

const filters = [
  { name: 'ETHEREUM', icon: ETH },
  { name: 'BNB CHAIN', icon: BNB },
  { name: 'Polygon', icon: Polygon },
  { name: 'Arbitrum', icon: Arbitrum },
  { name: 'AVALANCHE', icon: Avalanche },
  { name: 'Linea', icon: Linea },
  { name: 'OPTIMISM', icon: OP },
  { name: 'BASE', icon: Neon },
  { name: 'Neon', icon: Neon },
  { name: 'GNOSIS', icon: Gnosis }
];

export const TabContentEvm: FC<TabContentEvmProps> = ({ activeFilter, setActiveFilter, handleInputChange, inputValue }) => {
  const [search, setSearch] = useState('');
  const [currentComponent, setCurrentComponent] = useState<'list' | 'details'>('list');
  const [selectedToken, setSelectedToken] = useState<{name: string, icon: FC<{}>} | null>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleChooseToken = (token: { name: string, icon: FC<{}> }) => {
    setSelectedToken(token);
    setCurrentComponent('details');
  };

  const filteredTokens = tokens.filter(token =>
    token.name.toLowerCase().includes(search.toLowerCase()) ||
    token.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    {currentComponent === 'list' ? (
      <TabContentItem className='active'>
        <Filters>
          {filters.map(filter => (
            <FiltersItem key={filter.name}
                        className={activeFilter.name === filter.name ? 'active' : ''}
                        onClick={() => setActiveFilter({name: filter.name, Icon: filter.icon})}>
              <div className="svgWrap">
                <filter.icon />
              </div>
              {filter.name}
            </FiltersItem>
          ))}
        </Filters>
        <FilterSearchWrap>
          <FilterSearch
            type="text"
            placeholder="SELECT A TOKEN"
            value={search}
            onChange={handleSearch}
          />
          <img src={searchIcon} alt="search" />
        </FilterSearchWrap>
        {activeFilter.name ? (
          <>
            <FiltersItem className='selected'>
              <div className="svgWrap">
                <activeFilter.Icon/>
              </div>
              {activeFilter.name}
              <FiltersItemClose onClick={() => setActiveFilter({...activeFilter, name: ''})}>
                <img src={filterCloseIcon} alt="close" />
              </FiltersItemClose>
            </FiltersItem>
            <FilterSearchList>
                {filteredTokens.map(token => (
                  <FilterSearchListItem key={token.name} onClick={() => handleChooseToken({name: token.name, icon: activeFilter.Icon})}>
                    <div className="svgWrap">
                      <activeFilter.Icon/>
                    </div>
                    <FilterSearchListNameAndId>
                      <FilterSearchListName>{token.name}</FilterSearchListName>
                      <FilterSearchListId>{token.id}</FilterSearchListId>
                    </FilterSearchListNameAndId>
                    <FilterSearchFinance>
                      <FilterSearchBalance>
                        {token.balance}
                      </FilterSearchBalance>
                      <FilterSearchPrice>
                        ${token.price}
                      </FilterSearchPrice>
                    </FilterSearchFinance>
                  </FilterSearchListItem>
                ))}
            </FilterSearchList>
          </>
        ) : ''}
      </TabContentItem>
    ): (
      selectedToken && <TabContentStandart inputValue={inputValue} handleInputChange={handleInputChange} name={selectedToken.name} Icon={selectedToken.icon}/>
    )}
    </>
  )
};
