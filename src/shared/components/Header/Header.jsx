import {
  BtnBurger,
  LoginButton,
  Menu,
  MenuHeader,
  ModalDiv,
  NameText,
  RegisterButton,
  SvgBurger,
  SvgUser,
  SvgWrapper,
  UserWrapper,
  WrapperHeader,
  WrapperMenu,
  WrapperRight,
} from "./Header.styled";
import { useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";
import Login from "../Modal/Login/Login";
import Registration from "../Modal/Registration/Registration";
import { Modal } from "../Modal/Modal";
import { useAuth } from "../../hooks/useAuth";
import { signout } from "../../../redux/auth/operations.js";
import { useDispatch } from "react-redux";
import { selectUserName } from "../../../redux/auth/authSelectors";
import { useSelector } from "react-redux";
import icon from "../../images/symbol-defs.svg";
import { NavItemColor, NavItemHome } from "../Navigation/Navigation.styled";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const [isModalLoginOpen, setModalLoginOpen] = useState(false);
  const [isModalRegistrationOpen, setModalRegistrationOpen] = useState(false);
  const { isLoggedIn } = useAuth();
  const [loggedIn, setLoggedIn] = useState(false);
  const dispatch = useDispatch();
  const [displayName, setDisplayName] = useState("");
  const name = useSelector(selectUserName);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLoginOpen = () => {
    setModalLoginOpen(true);
  };

  const handleLoginClose = () => {
    setModalLoginOpen(false);
  };

  const handleRegistrationOpen = () => {
    setModalRegistrationOpen(true);
  };

  const handleRegistrationClose = () => {
    setModalRegistrationOpen(false);
  };

  const handleLogout = async () => {
    try {
      setModalLoginOpen(false);
      setModalRegistrationOpen(false);
      setLoggedIn(false);
      await dispatch(signout());
      navigate("/");
    } catch (error) {
      console.error("Failed to sign out:", error);
    }
  };

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setLoggedIn(isLoggedIn);
    if (isLoggedIn) {
      setDisplayName(name);
    }
  }, [isLoggedIn, name]);

  return (
    <div>
      <WrapperHeader>
        <Navigation />
        <ModalDiv>
          {loggedIn && displayName ? (
            <WrapperRight>
              <SvgWrapper>
                <SvgUser>
                  <use href={icon + "#icon-user"}></use>
                </SvgUser>
              </SvgWrapper>
              <NameText>{displayName}</NameText>
              <LoginButton type="button" onClick={handleLogout}>
                Log Out
              </LoginButton>
            </WrapperRight>
          ) : (
            <WrapperRight>
              <LoginButton type="button" onClick={handleLoginOpen}>
                Log In
              </LoginButton>
              {!loggedIn && isModalLoginOpen ? (
                <Modal onClose={handleLoginClose}>
                  <Login onCloseModal={handleLoginClose} />
                </Modal>
              ) : null}
              <RegisterButton type="button" onClick={handleRegistrationOpen}>
                Registration
              </RegisterButton>
              {!loggedIn && isModalRegistrationOpen ? (
                <Modal onClose={handleRegistrationClose}>
                  <Registration onCloseModal={handleRegistrationClose} />
                </Modal>
              ) : null}
            </WrapperRight>
          )}
        </ModalDiv>
      </WrapperHeader>
      <MenuHeader>
        <WrapperMenu>
          <div>
            <NavItemHome to="/" replace>
              psychologists.
            </NavItemHome>
            <NavItemColor to="/" replace>
              services
            </NavItemColor>
          </div>
          <BtnBurger onClick={handleMenuToggle}>
            <SvgBurger>
              <use href={icon + "#icon-menu"}></use>
            </SvgBurger>
          </BtnBurger>
        </WrapperMenu>
        {isMenuOpen ? (
          <Menu>
            <Navigation />
            {!loggedIn && (
              <WrapperRight>
                <LoginButton type="button" onClick={handleLoginOpen}>
                  Log In
                </LoginButton>
                {!loggedIn && isModalLoginOpen ? (
                  <Modal onClose={handleLoginClose}>
                    <Login onCloseModal={handleLoginClose} />
                  </Modal>
                ) : null}
                <RegisterButton type="button" onClick={handleRegistrationOpen}>
                  Registration
                </RegisterButton>
                {!loggedIn && isModalRegistrationOpen ? (
                  <Modal onClose={handleRegistrationClose}>
                    <Registration onCloseModal={handleRegistrationClose} />
                  </Modal>
                ) : null}
              </WrapperRight>
            )}
            {loggedIn && (
              <WrapperRight>
                <UserWrapper>
                  <SvgWrapper>
                    <SvgUser>
                      <use href={icon + "#icon-user"}></use>
                    </SvgUser>
                  </SvgWrapper>
                  <NameText>{displayName}</NameText>
                </UserWrapper>
                <LoginButton type="button" onClick={handleLogout}>
                  Log Out
                </LoginButton>
              </WrapperRight>
            )}
          </Menu>
        ) : null}
      </MenuHeader>
    </div>
  );
};
