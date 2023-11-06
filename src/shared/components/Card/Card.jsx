import {
  BtnHeart,
  BtnRead,
  BtnStyled,
  CommentReview,
  IconReviewer,
  ImgDiv,
  ImgUser,
  LetterIcon,
  NameCard,
  NameReview,
  RaitingWrapper,
  RatingDiv,
  RatingReview,
  Review,
  ReviewerWrapper,
  ReviewList,
  SvgCircle,
  SvgHeart,
  SvgHeartColor,
  SvgStar,
  TextAbout,
  TextCondition,
  TextGreen,
  TextRight,
  TextValue,
  TitleCard,
  TitleWrapper,
  WrapperAbout,
  WrapperRight,
  WrapperText,
  WrapperValue,
} from "../PsychologistsList/PsychologistsList.styled.jsx";
import icons from "../../images/symbol-defs.svg";
import { useEffect, useState } from "react";
import { usersRef } from "../../../../config";
import { child, onValue } from "firebase/database";
import { useSelector } from "react-redux";
import { selectUid } from "../../../redux/auth/authSelectors";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../../redux/auth/operations";
import { toast } from "react-toastify";
import { useAuth } from "../../hooks/useAuth";
import { toggleFavoritePsychologist } from "../../../redux/auth/authSlice";
import { useDispatch } from "react-redux";
import { Modal } from "../Modal/Modal.jsx";
import Appointment from "../Modal/Appointment/Appointment.jsx";

const Card = (psychologist, index) => {
  const [like, setLikes] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState([]);
  const userId = useSelector(selectUid);
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();
  const [isModalAppointmentOpen, setModalAppointmentOpen] = useState(false);

  useEffect(() => {
    const userFavoritesRef = child(usersRef, `${userId}/favoritePsychologists`);
    onValue(userFavoritesRef, (snapshot) => {
      const data = snapshot.val() || [];
      setLikes(data);
    });
  }, [userId]);

  const handleReadMore = (index) => {
    if (expandedIndex.includes(index)) {
      setExpandedIndex(expandedIndex.filter((i) => i !== index));
    } else {
      setExpandedIndex([...expandedIndex, index]);
    }
  };

  const handleLike = async (psychologistKey) => {
    if (!isLoggedIn) {
      toast.error("Please Log In or Sign Up", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    let updatedFavorites;
    if (like.includes(psychologistKey)) {
      updatedFavorites = like.filter((i) => i !== psychologistKey);
      await removeFromFavorites(userId, psychologistKey);
    } else {
      updatedFavorites = [...like, psychologistKey];
    }

    setLikes(updatedFavorites);
    dispatch(toggleFavoritePsychologist(updatedFavorites));
    await addToFavorites(userId, updatedFavorites);
  };

  const handleAppointmentOpen = () => {
    if (!isLoggedIn) {
      toast.error("Please Log In or Sign Up", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }
    setModalAppointmentOpen(true);
  };

  const handleAppointmentClose = () => {
    setModalAppointmentOpen(false);
  };
  return (
    <>
      <ImgDiv>
        <SvgCircle>
          <use href={icons + "#icon-circle"}></use>
        </SvgCircle>
        <ImgUser
          src={psychologist.psychologist.psychologist.avatar_url}
          alt={psychologist.psychologist.psychologist.name}
        />
      </ImgDiv>
      <WrapperText>
        <TitleWrapper>
          <div>
            <TitleCard>Psychologist</TitleCard>
            <NameCard>{psychologist.psychologist.psychologist.name}</NameCard>
          </div>
          <WrapperRight>
            <RaitingWrapper>
              <SvgStar>
                <use href={icons + "#icon-star"}></use>
              </SvgStar>
              <TextRight>
                Rating: {psychologist.psychologist.psychologist.rating}
              </TextRight>
            </RaitingWrapper>
            <RaitingWrapper>
              <TextRight>Price / 1 hour:&nbsp;</TextRight>
              <TextGreen>
                {psychologist.psychologist.psychologist.price_per_hour}
              </TextGreen>
              <BtnHeart
                onClick={() =>
                  handleLike(psychologist.psychologist.psychologistsKey)
                }
              >
                {like.includes(psychologist.psychologist.psychologistsKey) &&
                isLoggedIn ? (
                  <SvgHeartColor>
                    <use href={icons + "#icon-heart"}></use>
                  </SvgHeartColor>
                ) : (
                  <SvgHeart>
                    <use href={icons + "#icon-heart"}></use>
                  </SvgHeart>
                )}
              </BtnHeart>
            </RaitingWrapper>
          </WrapperRight>
        </TitleWrapper>

        <WrapperAbout>
          <WrapperValue>
            <TextCondition>Experience:&nbsp; </TextCondition>
            <TextValue>
              {psychologist.psychologist.psychologist.experience}
            </TextValue>
          </WrapperValue>
          <WrapperValue>
            <TextCondition>License:&nbsp; </TextCondition>
            <TextValue>
              {psychologist.psychologist.psychologist.license}
            </TextValue>
          </WrapperValue>
          <WrapperValue>
            <TextCondition>Specialization:&nbsp; </TextCondition>
            <TextValue>
              {psychologist.psychologist.psychologist.specialization}
            </TextValue>
          </WrapperValue>
          <WrapperValue>
            <TextCondition>Initial_consultation:&nbsp; </TextCondition>
            <TextValue>
              {psychologist.psychologist.psychologist.initial_consultation}
            </TextValue>
          </WrapperValue>
        </WrapperAbout>
        <TextAbout>{psychologist.psychologist.psychologist.about}</TextAbout>
        {expandedIndex === index ? (
          <></>
        ) : (
          <BtnRead onClick={() => handleReadMore(index)}>Read More</BtnRead>
        )}
        {expandedIndex.includes(index) &&
          psychologist.psychologist.psychologist.reviews &&
          psychologist.psychologist.psychologist.reviews.length > 0 && (
            <ReviewList>
              {psychologist.psychologist.psychologist.reviews.map(
                (review, reviewIndex) => (
                  <Review key={reviewIndex}>
                    <ReviewerWrapper>
                      <IconReviewer>
                        <LetterIcon>{review.reviewer[0]}</LetterIcon>
                      </IconReviewer>
                      <div>
                        <NameReview>{review.reviewer}</NameReview>
                        <RatingDiv>
                          <SvgStar>
                            <use href={icons + "#icon-star"}></use>
                          </SvgStar>
                          <RatingReview>{review.rating}</RatingReview>
                        </RatingDiv>
                      </div>
                    </ReviewerWrapper>
                    <CommentReview>{review.comment}</CommentReview>
                  </Review>
                )
              )}
              <BtnStyled type="submit" onClick={handleAppointmentOpen}>
                Make an appointment
              </BtnStyled>
              {isLoggedIn && isModalAppointmentOpen ? (
                <Modal onClose={handleAppointmentClose}>
                  <Appointment
                    psychologist={psychologist}
                    onCloseModal={handleAppointmentClose}
                  />
                </Modal>
              ) : null}
            </ReviewList>
          )}
      </WrapperText>
    </>
  );
};

Card.propTypes = {};

export default Card;
