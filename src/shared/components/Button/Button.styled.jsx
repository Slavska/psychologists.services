import styled from "styled-components";

export const StyledButton = styled.button`
  border-radius: 30px;
  background: #3470ff;
  display: flex;
  padding: 18px 50px;
  justify-content: center;
  align-items: center;
  gap: 18px;
  border: none;
  color: #fbfbfb;

  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 120% */
  letter-spacing: -0.2px;
  &:hover,
  &:focus {
    background: rgba(52, 112, 255, 0.7);
    transition: all 250ms linear;
  }
`;
