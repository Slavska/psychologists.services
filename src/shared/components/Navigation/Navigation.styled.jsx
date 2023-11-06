import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { breakpoints } from "../styles/breakpoints";

const { tablet, desktop } = breakpoints;

export const NavItemLogIn = styled(NavLink)`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.28px;

  color: #161616;
  font-style: normal;

  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.28px;
  transition: all 250ms linear;

  &:hover,
  &:focus {
    color: rgba(52, 112, 255, 0.7);
    transition: all 250ms linear;
  }

  @media screen and (min-width: ${tablet}) {
    &:last-child {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
    }
  }
`;
export const NavItem = styled(NavLink)`
  color: #191a15;

  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
  letter-spacing: -0.16px;
  cursor: pointer;
  transition: all 250ms linear;

  &:hover,
  &:focus {
    color: rgba(52, 112, 255, 0.7);
    transition: all 250ms linear;
  }
  &.active {
    color: rgba(52, 112, 255, 1);
  }
`;
export const NavItemHome = styled(NavLink)`
  color: #3470ff;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.4px;
  cursor: pointer;
  transition: all 250ms linear;
  &:hover,
  &:focus {
    opacity: 0.8;
    transition: opacity 250ms linear;
  }
`;
export const NavItemColor = styled(NavLink)`
  color: #191a15;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.4px;
  cursor: pointer;
  transition: all 250ms linear;
  margin-right: 14px;

  @media screen and (min-width: ${tablet}) {
    margin-right: 60px;
  }
  @media screen and (min-width: ${desktop}) {
    margin-right: 226px;
  }
  &:hover,
  &:focus {
    color: rgba(52, 112, 255, 0.7);
    transition: all 250ms linear;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: ${tablet}) {
    flex-direction: row;
  }
`;
export const NavDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  @media screen and (min-width: ${tablet}) {
    flex-direction: row;
    gap: 10px;
  }
  @media screen and (min-width: ${tablet}) {
    flex-direction: row;
    gap: 40px;
  }
`;
export const WrapperLogo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 20px;
  @media screen and (min-width: ${tablet}) {
    margin-bottom: 0px;
  }
`;
