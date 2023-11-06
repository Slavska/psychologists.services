import styled from "styled-components";
import { Button } from "../Button/Button";
import Select from "react-select";
import { breakpoints } from "../styles/breakpoints";

const { tablet, desktop } = breakpoints;

export const Wrapper = styled.div`
  background: #f3f3f3;
  padding: 16px 32px 16px 32px;
  min-height: 100vh;
  min-width: 100wv;
  @media screen and (min-width: ${tablet}) {
    padding: 32px 64px 32px 64px;
  }
  @media screen and (min-width: ${desktop}) {
    padding: 64px 128px 100px 128px;
  }
`;

export const WrapperCard = styled.li`
  border-radius: 24px;
  background: #fbfbfb;
  padding: 24px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${tablet}) {
    flex-direction: row;
  }
`;

export const ImgUser = styled.img`
  border-radius: 15px;
  min-width: 96px;
  height: 96px;
`;

export const ImgDiv = styled.div`
  min-width: 120px;
  max-width: 120px;
  height: 120px;
  border-radius: 30px;
  border: 2px solid rgba(84, 190, 150, 0.2);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WrapperText = styled.div`
  margin-left: 24px;
`;

export const TitleCard = styled.h2`
  color: #8a8a89;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
`;

export const NameCard = styled.h3`
  color: #191a15;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 24px;
  margin-top: 4px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  align-items: flex-start;
  flex-direction: column;
  @media screen and (min-width: ${tablet}) {
    flex-direction: row;
  }
`;

export const TextRight = styled.p`
  color: #191a15;

  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

export const WrapperRight = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (min-width: ${tablet}) {
    flex-wrap: nowrap;
  }
`;

export const TextCondition = styled.p`
  color: #8a8a89;

  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;
export const TextValue = styled.p`
  color: #191a15;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

export const WrapperValue = styled.div`
  display: flex;
  padding: 8px 16px;

  align-items: center;
  ustify-content: flex-start
  border-radius: 24px;
  background: #f3f3f3;
  flex-wrap: wrap;
  @media screen and (min-width: ${tablet}) {
    flex-wrap: nowrap;
    justify-content: center;
  }
`;

export const WrapperAbout = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 8px 4px;
`;

export const TextAbout = styled.p`
  color: rgba(25, 26, 21, 0.5);

  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-top: 24px;
`;

export const BtnRead = styled.button`
  color: #191a15;
  padding: 0;
  margin-top: 14px;
  background: transparent;
  border: none;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  text-decoration-line: underline;
  &:hover,
  &:focus {
    color: rgba(52, 112, 255, 0.8);
    transition: all 250ms linear;
  }
`;

export const NameReview = styled.p`
  color: #191a15;

  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

export const RatingReview = styled.p`
  color: #191a15;

  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  margin-top: 4px;
`;

export const CommentReview = styled.p`
  color: rgba(25, 26, 21, 0.5);

  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-top: 16px;
`;

export const ReviewList = styled.ul`
  margin-top: 48px;
`;

export const Review = styled.li`
  &:not(:first-child) {
    margin-top: 25px;
  }
`;

export const SvgStar = styled.svg`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;

export const RatingDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const SvgCircle = styled.svg`
  width: 14px;
  height: 14px;
  position: absolute;
  stroke: rgba(251, 251, 251, 1);
  fill: rgba(56, 205, 62, 1);
  top: 8px;
  right: 6px;
`;

export const TextGreen = styled.p`
  color: #38cd3e;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

export const RaitingWrapper = styled.div`
  display: flex;
  align-items: center;

  &:last-child::before {
    content: "";
    display: inline-block;
    width: 1px;
    height: 16px;
    background-color: rgba(25, 26, 21, 0.2);
    margin-left: 16px;
    margin-right: 16px;
  }
`;

export const SvgHeart = styled.svg`
  width: 26px;
  height: 26px;
  stroke: rgba(25, 26, 21, 1);
  fill: rgba(251, 251, 251, 1);
  margin-left: 28px;
  cursor: pointer;
  &:hover,
  &:focus {
    stroke: rgba(52, 112, 255, 1);

    transition: all 250ms linear;
  }
`;

export const SvgHeartColor = styled.svg`
  width: 26px;
  height: 26px;
  fill: #3470ff;
  stroke: #3470ff;
  margin-left: 28px;
  cursor: pointer;
`;

export const IconReviewer = styled.div`
  border-radius: 100px;
  background: rgba(52, 112, 255, 0.2);
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
`;

export const LetterIcon = styled.p`
  color: #3470ff;

  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

export const ReviewerWrapper = styled.div`
  display: flex;
`;

export const BtnStyled = styled(Button)`
  margin-top: 48px;
`;

export const BtnHeart = styled.button`
  background: transparent;
  border: none;
  padding: 0;
`;
export const LoadMoreButton = styled(Button)`
  font-size: 20px;
  margin-right: auto;
  margin-left: auto;
`;

export const SelectStyled = styled(Select)`
  margin-bottom: 32px;
`;

export const TextFilter = styled.p`
  color: #8a8a89;

  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 8px;
`;

export const WrapperFavorites = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
