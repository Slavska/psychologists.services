import PropTypes from "prop-types";
import { StyledButton } from "./Button.styled";

export const Button = ({
  type = "submit",

  children,
  ...allyProps
}) => {
  return (
    <StyledButton type={type} {...allyProps}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
};
