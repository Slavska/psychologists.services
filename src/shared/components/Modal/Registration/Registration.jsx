import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../../../../redux/auth/operations";

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
  AuthFormPasswordIcon,
  StyledEyeIcon,
  StyledEyeIconVis,
  TitleModal,
  TextModal,
} from "../Login/Login.styled";

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

  password: yup
    .string()
    .required("Please enter a password")
    .min(8, "Min length 8 symbols")
    .max(64, "Max length 64 symbols")
    .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])[\s\S]*$/, "Use characters and numbers")
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
  password: "",
  showPassword: false,
};

function Registration(onCloseModal) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const formikRef = React.useRef();

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const onSubmit = async (values) => {
    setIsLoading(true);
    const { email, password, name } = values;
    const resultAction = await dispatch(signup({ email, password, name }));
    if (signup.fulfilled.match(resultAction)) {
      formikRef.current.resetForm();
      onCloseModal();
    } else if (signup.rejected.match(resultAction)) {
      console.log(resultAction.error.message);
    }
    setIsLoading(false);
  };

  return (
    <>
      <WrapperForm>
        <AuthWrapComponent>
          <TitleModal>Registration</TitleModal>
          <TextModal>
            Thank you for your interest in our platform! In order to register,
            we need some information. Please provide us with the following
            information.
          </TextModal>
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
                  className="no-bottom-padding"
                  name="password"
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                />

                <StyledLabelAuth></StyledLabelAuth>

                <ErrorMessage name="password">
                  {(m) => <StyledErrorAuth>{m}</StyledErrorAuth>}
                </ErrorMessage>
                <AuthFormPasswordIcon onClick={handleTogglePassword}>
                  {showPassword ? (
                    <StyledEyeIcon size={18} />
                  ) : (
                    <StyledEyeIconVis size={18} />
                  )}
                </AuthFormPasswordIcon>
              </StyledWrapInputAuth>
              <StyledWrapAuthBtn type="submit" disabled={isLoading}>
                Sign Up
              </StyledWrapAuthBtn>
            </StyledFormAuth>
          </Formik>
        </AuthWrapComponent>
      </WrapperForm>
    </>
  );
}

export default Registration;
