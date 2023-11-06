import { useEffect, useCallback } from "react";
import icon from "../../images/symbol-defs.svg";
import PropTypes from "prop-types";

import {
  StyledModal,
  StyledOverlay,
  StyledCloseButton,
  Svg,
} from "./Modal.styled";

export const Modal = ({ onClose, children }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeydown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeydown);
    };
  });

  const handleKeydown = ({ code }) => {
    if (code === "Escape") {
      onClose();
    }
  };

  const handleBackdropClick = ({ currentTarget, target }) => {
    if (currentTarget === target) {
      onClose();
    }
  };

  return (
    <StyledOverlay onClick={handleBackdropClick}>
      <StyledModal>
        <div>
          <StyledCloseButton onClick={onClose}>
            <Svg width="18" height="18">
              <use href={icon + "#icon-x"} />
            </Svg>
          </StyledCloseButton>
        </div>
        {children}
      </StyledModal>
    </StyledOverlay>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
