import React from "react";
import { StyledHamburgerButton } from "./styles";
import { colors } from "../../../../styles/_variables";

const HamburgerMenu = props => {
  const styles = {
    container: {
      height: "32px",
      width: "32px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      padding: "4px",
      zIndex: "200"
    },
    line: {
      height: "2px",
      width: "20px",
      background: colors.blue,
      transition: "all 200ms ease"
    },
    lineTop: {
      transform: props.menuOpen ? "rotate(45deg)" : "none",
      transformOrigin: "top left",
      marginBottom: "5px"
    },
    lineMiddle: {
      opacity: props.menuOpen ? 0 : 1,
      transform: props.menuOpen ? "translateX(-16px)" : "none"
    },
    lineBottom: {
      transform: props.menuOpen ? "translateX(-1px) rotate(-45deg)" : "none",
      transformOrigin: "top left",
      marginTop: "5px"
    }
  };
  return (
    <StyledHamburgerButton
      style={styles.container}
      onClick={() => props.onClick(!props.menuOpen)}
    >
      <div style={{ ...styles.line, ...styles.lineTop }} />
      <div style={{ ...styles.line, ...styles.lineMiddle }} />
      <div style={{ ...styles.line, ...styles.lineBottom }} />
    </StyledHamburgerButton>
  );
};
export default HamburgerMenu;
