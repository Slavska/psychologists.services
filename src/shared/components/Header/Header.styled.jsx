import styled from "styled-components";
import { Button } from "../Button/Button";
import { breakpoints } from "../styles/breakpoints";

const { tablet, desktop } = breakpoints;

export const Menu = styled.div`
  display: block;
  position: absolute;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 18px 32px 18px 32px;
  /* padding: 10px; */
  z-index: 1;
  width: 100%;
  height: 100%;

  /* @media screen and (min-width: ${tablet}) {
    display: none;
    position: absolute;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 10px;
    z-index: 1;
  } */
`;
export const MenuHeader = styled.div`
  display: block;
  @media screen and (min-width: 767px) {
    display: none;
  }
`;
export const SvgBurger = styled.svg`
  storke: #3470ff;
  fill: #3470ff;
  width: 32px;
  height: 32px;
  &:hover,
  &:focus {
    storke: rgba(52, 112, 255, 0.7);
    fill: rgba(52, 112, 255, 0.7);
    transition: all 250ms linear;
  }
`;
export const WrapperMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 32px 18px 32px;
`;
export const BtnBurger = styled.button`
  background-color: transparent;
  border: none;
`;
export const WrapperHeader = styled.div`
  display: none;
  @media screen and (min-width: 767px) {
    display: flex;
    align-items: center;
    justify-content: center;
    background: inherit;
    width: 100%;
    padding: 18px 64px 18px 64px;
    transition: width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms,
      margin 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
    border-bottom: 1px solid rgba(25, 26, 21, 0.1);
  }
  @media screen and (min-width: ${desktop}) {
    padding: 24px 128px 24px 128px;
  }
`;

// export const Wrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background: inherit;
//   width: 100%;
//   padding: 10px 32px 10px 32px;
//   transition: width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms,
//     margin 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
//   border-bottom: 1px solid rgba(25, 26, 21, 0.1);
//   @media screen and (min-width: ${tablet}) {
//     padding: 18px 64px 18px 64px;
//   }
//   @media screen and (min-width: ${desktop}) {
//     padding: 24px 128px 24px 128px;
//   }
// `;

export const ModalDiv = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 0;
`;
export const RegisterButton = styled(Button)`
  padding: 14px 20px;
  margin-left: 5px;
  @media screen and (min-width: ${desktop}) {
    padding: 14px 40px;
  }
`;
export const LoginButton = styled(Button)`
  padding: 14px 20px;
  color: #191a15;

  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 125% */
  letter-spacing: -0.16px;
  background: #fbfbfb;
  border-radius: 30px;
  border: 1px solid rgba(25, 26, 21, 0.2);

  @media screen and (min-width: ${desktop}) {
    padding: 14px 39px;
  }
  &:hover,
  &:focus {
    background: rgba(52, 112, 255, 0.2);
    transition: all 250ms linear;
  }
`;

export const SvgUser = styled.svg`
  width: 24px;
  height: 24px;
  stroke: rgba(251, 251, 251, 1);
  fill: rgba(251, 251, 251, 1);
`;
export const SvgWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: #3470ff;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-right: 7px;
  @media screen and (min-width: 767px) {
    margin-right: 14px;
  }
`;

export const NameText = styled.p`
  margin-right: 14px;
  color: #191a15;

  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 125% */
  letter-spacing: -0.16px;
  @media screen and (min-width: 767px) {
    margin-right: 28px;
  }
`;
export const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const WrapperRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 20px;

  @media screen and (min-width: 767px) {
    flex-direction: row;
    margin-top: 0px;
    gap: 0px;
  }
`;
