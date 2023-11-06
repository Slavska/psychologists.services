import React from "react";
import { useState } from "react";

import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";

import {
  StyledInputAuth,
  StyledFormAuth,
  StyledWrapInputAuth,
  StyledLabelAuth,
  StyledErrorAuth,
  StyledWrapAuthBtn,
  AuthWrapComponent,
  WrapperForm,
  TitleModal,
  TextModal,
} from "../Login/Login.styled";
import {
  ImgUser,
  NameCard,
  NameWrapper,
  Text,
  UserWrapper,
} from "./Appointment.styled.jsx";
import { child, push, ref, set } from "firebase/database";
import { data } from "../../../../../config";
import { useSelector } from "react-redux";
import { selectUid } from "../../../../redux/auth/authSelectors";

let schema = yup.object({
  name: yup
    .string()
    .required("Please enter your name")
    .min(2, "Min length 2 symbols")
    .max(32, "Max length 32 symbols")
    .matches(
      /^[a-zA-Z0-9!@#$%^&*()_+[\]{}|;':",.<>?`~\-=_]+$/,
      "Use valid characters"
    ),
  comment: yup
    .string()
    .required("Please enter comment")
    .min(2, "Min length 2 symbols")
    .max(200, "Max length 200 symbols")
    .matches(
      /^[a-zA-Z0-9!@#$%^&*()_+[\]{}|;':",.<>?`~\-=_]+$/,
      "Use valid characters"
    ),

  phone: yup
    .string()
    .required("Please enter a number")
    .min(13, "Min length 13 symbols")
    .max(13, "Max length 13 symbols")
    .matches(/^\+380\d{9}$/, "Enter number like +380XXXXXXXXX")
    .test(
      "no-spaces",
      "Password cannot contain spaces",
      (value) => !/\s/.test(value)
    ),

  email: yup
    .string()
    .required("Please enter an email")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Enter a valid email address"
    ),
});
const initialValues = {
  name: "",
  email: "",
  comment: "",
  phone: "",
};

function Appointment(psychologist, onCloseModal) {
  const [isLoading, setIsLoading] = useState(false);
  const formikRef = React.useRef();
  const userId = useSelector(selectUid);

  const onSubmit = async (values) => {
    setIsLoading(true);
    const psychologistRef = ref(
      data,
      `psychologists/${psychologist.psychologist.psychologist.psychologistsKey}`
    );
    const newAppointmentRef = push(child(psychologistRef, "appoiments"));
    const appointmentData = {
      ...values,
      userId: userId,
    };

    try {
      await set(newAppointmentRef, appointmentData);
      formikRef.current.resetForm();
      onCloseModal();
    } catch (error) {
      console.error("Error while adding appointment:", error);
    }

    setIsLoading(false);
  };

  return (
    <>
      <WrapperForm>
        <AuthWrapComponent>
          <TitleModal>Make an appointment with a psychologists</TitleModal>
          <TextModal>
            You are on the verge of changing your life for the better. Fill out
            the short form below to book your personal appointment with a
            professional psychologist. We guarantee confidentiality and respect
            for your privacy.
          </TextModal>
          <UserWrapper>
            <ImgUser
              src={
                psychologist.psychologist.psychologist.psychologist.avatar_url
              }
              alt={psychologist.psychologist.psychologist.psychologist.name}
            />
            <NameWrapper>
              <Text>Your psichologists</Text>
              <NameCard>
                {psychologist.psychologist.psychologist.psychologist.name}
              </NameCard>
            </NameWrapper>
          </UserWrapper>
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={onSubmit}
            innerRef={formikRef}
          >
            <StyledFormAuth>
              <StyledWrapInputAuth>
                <StyledInputAuth type="text" name="name" placeholder="Name" />
                <StyledLabelAuth></StyledLabelAuth>
                <ErrorMessage name="name">
                  {(m) => <StyledErrorAuth>{m}</StyledErrorAuth>}
                </ErrorMessage>
              </StyledWrapInputAuth>
              <StyledWrapInputAuth>
                <StyledInputAuth type="tel" name="phone" placeholder="+380" />
                <StyledLabelAuth></StyledLabelAuth>
                <ErrorMessage name="phone">
                  {(m) => <StyledErrorAuth>{m}</StyledErrorAuth>}
                </ErrorMessage>
              </StyledWrapInputAuth>
              <StyledWrapInputAuth>
                <StyledInputAuth
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <StyledLabelAuth></StyledLabelAuth>
                <ErrorMessage name="email">
                  {(m) => <StyledErrorAuth>{m}</StyledErrorAuth>}
                </ErrorMessage>
              </StyledWrapInputAuth>
              <StyledWrapInputAuth>
                <StyledInputAuth
                  type="text"
                  name="comment"
                  placeholder="Comment"
                />
                <StyledLabelAuth></StyledLabelAuth>
                <ErrorMessage name="comment">
                  {(m) => <StyledErrorAuth>{m}</StyledErrorAuth>}
                </ErrorMessage>
              </StyledWrapInputAuth>

              <StyledWrapInputAuth></StyledWrapInputAuth>
              <StyledWrapAuthBtn type="submit" disabled={isLoading}>
                Send
              </StyledWrapAuthBtn>
            </StyledFormAuth>
          </Formik>
        </AuthWrapComponent>
      </WrapperForm>
    </>
  );
}

export default Appointment;
