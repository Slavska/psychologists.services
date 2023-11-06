import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

const { tablet, desktop } = breakpoints;

export const ImgUser = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 15px;
`;

export const NameCard = styled.h3`
  color: #191a15;

  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;
export const UserWrapper = styled.div`
  display: flex;
`;
export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 14px;
`;
export const Text = styled.p`
  color: #8a8a89;

  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
`;
