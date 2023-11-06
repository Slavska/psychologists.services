import { useState } from "react";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";

import { signin } from "../../../../redux/auth/operations.js";

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
} from "./Login.styled.jsx";

let schema = yup.object({
  password: yup
    .string()
    .required("Please enter a password")
    .min(8, "Min length 8 symbols")
    .max(64, "Max length 64 symbols")
    .matches(
      /^[a-zA-Z0-9!@#$%^&*()_+[\]{}|;':",.<>?`~\-=_]+$/,
      "Invalid characters in password"
    )
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
  email: "",
  password: "",
  showPassword: false,
};

function Login(onCloseModal) {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formikRef = React.useRef();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (values) => {
    const { email, password } = values;
    setIsLoading(true);
    const resultAction = await dispatch(signin({ email, password }));
    if (signin.fulfilled.match(resultAction)) {
      navigate("/");
      formikRef.current.resetForm();
      onCloseModal();
    } else if (signin.rejected.match(resultAction)) {
      console.log(resultAction.error.message);
    }
    setIsLoading(false);
  };

  return (
    <>
      <WrapperForm>
        <AuthWrapComponent>
          <TitleModal>Log In</TitleModal>
          <TextModal>
            Welcome back! Please enter your credentials to access your account
            and continue your search for a psychologist.
          </TextModal>
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={onSubmit}
            innerRef={formikRef}
          >
            <StyledFormAuth>
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
                    <StyledEyeIcon size={20} />
                  ) : (
                    <StyledEyeIconVis size={20} />
                  )}
                </AuthFormPasswordIcon>
              </StyledWrapInputAuth>
              <StyledWrapAuthBtn type="submit" disabled={isLoading}>
                Log In Now
              </StyledWrapAuthBtn>
            </StyledFormAuth>
          </Formik>
        </AuthWrapComponent>
      </WrapperForm>
    </>
  );
}

export default Login;
