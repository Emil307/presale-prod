import styled from "styled-components";

export const Section = styled.section`
  max-width: 100%;
  width: 100%;
`;

export const Container = styled.div`
  width: 632px;
  display: flex;
  flex-wrap: wrap;
  margin: 108px auto 95px;
  padding: 0 16px;

  @media screen and (max-width: 998px) {
    width: 358px;
    margin: 16px auto 96px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  width: 100%;
  font-family: 'Permanent Marker', sans-serif;
  font-size: 40px;
  letter-spacing: -0.01em;
  line-height: 40px;
  font-weight: 400;
  text-transform: uppercase;
`;

export const Text = styled.p`
  color: var(--text-black);
  font-family: 'Roboto Mono', monospace;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.28px;
  line-height: 22px;
  text-align: center;
  margin-top: 11px;
`;

export const TabWrapper = styled.div`
  width: 100%;
  padding: 15px 16px;
  border: 1px solid var(--border-gray);
  background: var(--addable-gray);
  border-radius: 12px;
  margin-top: 31px;
`;

export const TabButtons = styled.div`
  width: 100%;
  border-radius: 12px;
  display: flex;
  overflow: hidden;
`;

export const TabButtonsItem = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  font-family: 'Roboto Mono', monospace;
  font-weight: 500;
  font-size: 15px;
  letter-spacing: 0.15px;
  line-height: 19.78px;
  text-transform: uppercase;
  background: var(--tab-button-bg);
  color: var(--tab-color);
  padding: 12px;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &.active {
    background: var(--main-black);
    color: var(--text-white);
    svg:not(.stroke) {
      fill: var(--text-white);
    }
    .stroke {
      stroke: var(--text-white);
    }
  }
  svg:not(.stroke) {
    fill: var(--tab-color);
    transition: 0.2s ease-in-out;
  }
  .stroke {
    stroke: var(--tab-color);
    transition: 0.2s ease-in-out;
  }
`;

export const TabContent = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  margin-top: 16px;
  padding-top: 18px;
  border-top: 1px solid var(--border-gray);
  position: relative;
`;


export const TabContentItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  transition: opacity 0.2s ease-in-out;
  transition-delay: 0.2s;
  opacity: 1;
  z-index: 1;
`;

export const TabContentItemTop = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  height: fit-content;
`;

export const SubTitle = styled.span`
  font-size: 15px;
  font-weight: 700;
  line-height: 18.75px;
  letter-spacing: 0.15px;
  color: rgb(var( --main-black-rgb));
  display: inline-block;
  text-transform: uppercase;
`;

export const Count = styled.span`
  font-size: 15px;
  font-weight: 500;
  line-height: 19.78px;
  letter-spacing: 0.15px;
  color: var(--tab-color);
  margin-left: auto;
  text-transform: uppercase;
`;

export const Part = styled.span`
  font-size: 15px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0.15px;
  color: var(--tab-color);
  text-transform: uppercase;
  display: inline-block;
  padding: 0 8px;
  border: 1px solid var(--border);
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: rgba(var( --main-black-rgb), 0.03);
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  margin-top: 3px;
  margin-bottom: 32px;
`;

export const Input = styled.input`
  width: 100%;
  height: 70px;
  text-align: right;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.48px;
  color: rgb(var( --main-black-rgb));
  padding: 20px;
  padding-left: 124px;
  background: var(--tab-button-bg);
  border-radius: 8px;
  border: 1px solid var(--border-gray);
`;

export const Label = styled.div`
  width: fit-content;
  height: 40px;
  border-radius: 4px;
  background: var(--main-black);
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  font-size: 15px;
  font-weight: 500;
  line-height: 18.75px;
  letter-spacing: 0.15px;
  color: var(--text-white);
  padding: 0 12px;
  .svgWrap {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--main-white);
    border-radius: 100%;
    flex-shrink: 0;
  }
  svg {
    transition: 0.2s ease-in-out;
    max-width: 21px;
    &:not(.stroke) {
      fill: var(--main-black);
    }
    &.stroke {
      stroke: var(--main-black);
    }
    &.arbitrum {
      fill: var(--main-black);
    }
  }
`;

export const AddressContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  padding-top: 32px;
  margin-bottom: 16px;
  border-top: 1px solid var(--border-gray);
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  input {
    color: rgba(var( --main-black-rgb), 0.5);
    text-align: left;
    padding-left: 20px;
    font-size: 15px;
    letter-spacing: 0.3px
  }
`;

export const Btn = styled.button`
  width: 100%;
  height: 75px;
  line-height: 75px;
  border-radius: 8px;
  text-transform: uppercase;
  padding: 0 20px;
  background-color: var(--main-black);
  color: var(--text-white);
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 0.15px;
  text-align: center;
  transition: background 0.2s ease-in-out;
  &:hover {
    background-color: rgba(var( --main-black-rgb), 0.9);
  }

  &.disabled {
    opacity: 50%;
    pointer-events: none;
  }
`;

export const Filters = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
`;

export const FiltersItem = styled.div`
  height: 40px;
  padding: 0 12px;
  background: var(--tab-button-bg);
  border-radius: 4px;
  font-size: 15px;
  font-weight: 500;
  line-height: 18.75px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  cursor: pointer;
  &.active, &.selected {
    background: var(--main-black);
    color: var(--text-white);
    svg {
      &:not(.stroke) {
        fill: var(--main-black);
      }
      &.stroke {
        stroke: var(--main-black);
      }
      &.arbitrum {
        fill: var(--main-black);
      }
    }
    .svgWrap {
      background: var(--main-white);
    }
  }
  .svgWrap {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--tab-color);
    border-radius: 100%;
    flex-shrink: 0;
  }
  svg {
    transition: 0.2s ease-in-out;
    &:not(.stroke) {
      fill: var(--main-white);
    }
    &.stroke {
      stroke: var(--main-white);
    }
    &.arbitrum {
      fill: var(--tab-color);
    }
  }
`;

export const FiltersItemClose = styled.button`
  width: 24px;
  height: 24px;
  cursor: pointer;
  background: transparent;
  padding: 0;
  box-shadow: none;
`;

export const FilterSearchWrap = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 4px;
  img {
    position: absolute;
    top: 50%;
    left: 23px;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;
  }
`;

export const FilterSearch = styled.input`
  width: 100%;
  height: 70px;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.48px;
  color: rgb(var( --main-black-rgb));
  padding: 20px;
  padding-left: 56px;
  background: var(--tab-button-bg);
  border-radius: 8px;
  border: 1px solid var(--border-gray);
  font-weight: 500;
`;

export const Dropdown = styled.div`
  position: absolute;
  width: fit-content;
  height: fit-content;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
`;

export const DropdownButton = styled.button`
  padding: 8px 16px;
  background: black;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  font-size: 15px;
  font-weight: 500;
  line-height: 18.75px;
  letter-spacing: 0.15px;
  color: var(--text-white);
  border-radius: 4px;
  background: var(--tab-selector-bg);

  svg {
    fill: var(--text-white);
  }
  .caret {
    transform: rotate(180deg);
  }
  &.show {
    .caret {
      transform: rotate(0);
    }
  }
`;

export const DropdownContent = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  background: var(--main-white);
  z-index: 1000;
  padding: 4px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const DropdownItem = styled.button`
  padding: 8px 12px;
  width: 100%;
  text-align: left;
  background: transparent;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  line-height: 18.75px;
  letter-spacing: 0.15px;
  font-size: 15px;
  &:hover {
    background-color: var(--tab-selector-hover-rgba);
  }
  &.active {
    background: var(--main-black);
    pointer-events: none;
    color: var(--text-white);
    svg {
      fill: var(--text-white);
    }
  }
`;


export const FilterSearchList = styled.ul`
  display: flex;
  flex-direction: column;
`;


export const FilterSearchListItem = styled.li`
  width: 100%;
  padding: 16px 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 8px;
  &:hover {
    background-color: rgba(var( --main-black-rgb), 0.03);
  }
  &:not(:last-child) {
    border-bottom: 1px solid var(--border-gray);
  }

  .svgWrap {
    width: 42px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;background: var(--main-white);
    border-radius: 100%;
    flex-shrink: 0;
    margin-right: 16px;
  }
  svg {
    transform: scale(1.7);
    &:not(.stroke) {
      fill: var(--main-black);
    }
    &.stroke {
      stroke: var(--main-black);
    }
    &.arbitrum {
      fill: var(--main-black);
    }
  }
`;

export const FilterSearchListNameAndId = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 6px;
`;

export const FilterSearchListName = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 0.18px;
  display: inline-block;
`;

export const FilterSearchListId = styled.span`
  font-weight: 500;
  font-size: 15px;
  line-height: 23px;
  letter-spacing: 0.18px;
  border-radius: 4px;
  display: inline-block;
  color: var(--tab-color);
  background: var(--tab-button-bg);
  padding: 0 2px;
`;

export const FilterSearchFinance = styled.div`
  margin-left: auto;
  color: rgba(var( --main-black-rgb), 1);
  font-size: 18px;
  line-height: 22.5px;
  letter-spacing: 0.36px;
  font-weight: 500;
`;

export const FilterSearchBalance = styled.span`
  display: inline-block;
  margin-right: 42px;
`;

export const FilterSearchPrice = styled.span`
  display: inline-block;
`;


export const OrderPrice = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-top: 8px;
  .orderLabel {
    position: static;
    transform: translateY(0);
  }
`;

export const OrderCount = styled.span`
  color: rgba(var( --main-black-rgb), 1);
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.48px;
`;

export const OrderAddressConteiner = styled.div`
  width: 100%;
  margin-top: 32px;
`;

export const OrderAddress = styled.div`
  border: 1px solid rgba(var( --main-black-rgb), 0.08);
  background: var(--tab-button-bg);
  border-radius: 8px;
  padding: 12px 20px;
  display: flex;
  margin-top: 8px;
`;

export const OrderAddressQR = styled.img`
  width: 81px;
  height: 81px;
`;

export const OrderAddressWallet = styled.p`
  width: 220px;
  margin-left: 32px;
  font-size: 15px;
  line-height: 18.75px;
  letter-spacing: 0.15px;
  font-weight: 500;
`;

export const OrderAddressButtons = styled.div`
  margin-left: auto;
  display: flex;
  gap: 8px;
`;

export const OrderAddressButton = styled.button`
  width: 42px;
  height: 42px;
  padding: 9px;
  border-radius: 4px;
  background: rgba(var( --main-black-rgb), 1);
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  font-size: 0;
  &:hover {
    background: rgba(var( --main-black-rgb), 0.9);
  }
`;

export const OrderStatusWrap = styled.ul`
  width: 100%;
  padding: 32px 0;
  display: flex;
  justify-content: space-between;
`;

export const OrderStatus = styled.li`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  &:not(:last-child) {
    &:after {
      content: '';
      width: 48px;
      height: 1px;
      background: rgba(var( --main-black-rgb), 0.08);
      position: absolute;
      left: calc(100% + 24px);
      top: 50%;
    }
  }
`;

export const OrderStatusImg = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 4px;
  border: 1px solid rgba(var( --main-black-rgb), 0.08);
  background: var(--tab-button-bg);
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease-in-out;
  &.done {
    background: rgba(var( --main-black-rgb), 1);
  }
`;

export const OrderStatusName = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.12px;
  color: var(--tab-button-bg);
  text-transform: uppercase;
  margin-top: 8px;
  transition: color 0.2s ease-in-out;
  &.done {
    color: rgba(var( --main-black-rgb), 1);
  }
`;

export const OrderInfo= styled.div`
  border: 1px solid rgba(var( --main-black-rgb), 0.08);
  background: var(--tab-button-bg);
  border-radius: 8px;
  padding: 12px 20px;
  display: flex;
  img {
    width: 24px;
    height: 24px;
  }
`;

export const OrderInfoContent= styled.p`
  color: rgba(var( --main-black-rgb), 1);
  text-transform: uppercase;
  font-size: 15px;
  line-height: 18.75px;
  letter-spacing: 0.15px;
  margin-left: 20px;
  font-weight: 500;
`;

export const OrderInfoBtn= styled.button`
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  border-radius: 4px;
  margin-left: auto;
  &:hover {
    background: rgba(var( --main-black-rgb), 0.08);
  }
`;

export const OrderBottom= styled.button`
  .addressContainer {
    border-top: none;
    padding-top: 0;
    margin-top: 16px;
    margin-bottom: 0;
  }
`;

export const OrderBottomText= styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 18.75px;
  letter-spacing: 0.15px;
  padding: 15px 0;
  text-align: center;
  text-transform: uppercase;
  color: rgba(var( --main-black-rgb), 1);
`;

export const OrderTop= styled.div`
  height: 233px;
`;

export const OrderConfirmed= styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  height: 100%;
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0.24px;
  text-align: center;
  color: var(--confirmed-color);
  text-transform: uppercase;
`;


