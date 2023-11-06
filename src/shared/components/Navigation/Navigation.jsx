import { useAuth } from "../../hooks/useAuth";
import {
  StyledNav,
  NavItemHome,
  NavItem,
  NavItemColor,
  NavDiv,
  WrapperLogo,
} from "./Navigation.styled";

function Navigation() {
  const { isLoggedIn } = useAuth();
  return (
    <>
      {isLoggedIn ? (
        <StyledNav>
          <WrapperLogo>
            <NavItemHome to="/" replace>
              psychologists.
            </NavItemHome>
            <NavItemColor to="/" replace>
              services
            </NavItemColor>
          </WrapperLogo>
          <NavDiv>
            <NavItem to="/" replace>
              Home
            </NavItem>
            <NavItem to="/psychologists" replace>
              Psychologists
            </NavItem>
            <NavItem to="/favorites" replace>
              Favorites
            </NavItem>
          </NavDiv>
        </StyledNav>
      ) : (
        <StyledNav>
          <WrapperLogo>
            <NavItemHome to="/" replace>
              psychologists.
            </NavItemHome>
            <NavItemColor to="/" replace>
              services
            </NavItemColor>
          </WrapperLogo>
          <NavDiv>
            <NavItem to="/" replace>
              Home
            </NavItem>
            <NavItem to="/psychologists" replace>
              Psychologists
            </NavItem>
          </NavDiv>
        </StyledNav>
      )}
    </>
  );
}
export default Navigation;
