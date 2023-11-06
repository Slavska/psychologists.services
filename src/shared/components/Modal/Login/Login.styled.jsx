import { Field, Form } from "formik";
import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Button } from "../../Button/Button";

const { tablet } = breakpoints;

export const StyledInputAuth = styled(Field)`
  border-radius: 12px;
  border: 1px solid rgba(25, 26, 21, 0.1);
  &.no-bottom-padding {
    margin-bottom: 0;
  }
  transition: all 250ms linear;
  background: transparent;
  padding: 18px 16px;
  min-width: 300px;
  outline: none;

  &::placeholder {
    font-family: Inter;
    color: #191a15;
  }
  &:hover,
  &:focus {
    border: 1px solid rgba(52, 112, 255, 0.7);
    transition: all 250ms linear;
  }

  @media screen and (min-width: ${tablet}) {
    min-width: 438px;
  }
`;

export const StyledFormAuth = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const StyledBtnAuthAccent = styled.button`
  display: flex;
  width: calc(100vw - 88px);
  padding: 14px 0px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: none;
  background: #bedbb0;
  transition: background-color 250ms linear;
  font-family: Poppins;
  font-size: 14px;
  margin-top: 24px;
  font-weight: 500;
  letter-spacing: -0.28px;
  &:hover,
  &:focus {
    background: #9dc888;
  }
  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 344px;
  }
`;
export const StyledLinkAuth = styled.a`
  width: 182px;
  height: 44px;
  border: none;
  border-radius: 30px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.21;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.04em;
  color: black;
  background: black;
  border: 2px solid black;
`;
export const StyledWrapAuthBtn = styled(Button)`
  margin-top: 40px;
  width: 100%;
`;
export const StyledWrapInputAuth = styled.div`
  position: relative;
  margin-top: 18px;
`;
export const StyledLabelAuth = styled.span`
  position: absolute;
  top: 20px;
  left: 0;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.21;
  letter-spacing: 0.04em;
  color: black;
  pointer-events: none;
  transition: all 250ms linear;
`;
export const StyledHeaderAuth = styled.h3`
  font-weight: 700;
  margin-bottom: 40px;
  font-size: 14px;
  text-align: center;
  line-height: 1.21;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: black;
  @media screen and (min-width: ${breakpoints.tablet}) {
    text-align: left;
  }
`;

export const StyledErrorAuth = styled.div`
  position: absolute;
  top: -13px;
  right: 5px;
  font-size: 10px;
  font-weight: 400;
  color: #3470ff;
`;

export const AuthWrapComponent = styled.div`
  padding: 32px;
  border-radius: 15px;
  background: #fbfbfb;
  align-items: start;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${breakpoints.tablet}) {
    padding: 64px;
    border-radius: 30px;
  }
`;

export const WrapperForm = styled.div`
  display: flex;
  justify-content: center;
`;

export const AuthFormPasswordIcon = styled.span`
  position: absolute;
  bottom: 10px;
  right: 18px;
  color: #fff;
  opacity: 0.4;
  cursor: pointer;
`;

export const StyledEyeIcon = styled(AiOutlineEyeInvisible)`
  color: rgb(25, 26, 21);
  &:hover,
  &:focus {
    color: rgba(52, 112, 255, 0.7);
    transition: all 250ms linear;
  }
`;

export const StyledEyeIconVis = styled(AiOutlineEye)`
  color: rgb(25, 26, 21);
  &:hover,
  &:focus {
    color: rgba(52, 112, 255, 0.7);
    transition: all 250ms linear;
  }
`;

export const TitleModal = styled.h2`
  color: #191a15;

  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: 48px; /* 120% */
  letter-spacing: -0.8px;
  margin-bottom: 20px;
`;

export const TextModal = styled.p`
  color: rgba(25, 26, 21, 0.5);
  text-align: start;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 40px;
`;
