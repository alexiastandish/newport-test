import React, { useState } from "react";
import { StyledBodyWrapper, StyledLayoutWrapper } from "./styles";
import Head from "../head";
import Header from "../header";
import Footer from "../footer";
import ContactSection from "../contact-section";

const Layout = props => {
  const { navLight, children } = props;

  const [state, setState] = useState({
    menuOpen: false
  });

  const handleMenuToggle = () => {
    setState(prevState => ({
      ...prevState,
      menuOpen: !prevState.menuOpen
    }));
  };

  return (
    <StyledLayoutWrapper menuOpen={state.menuOpen}>
      <Head {...props} />
      <Header
        handleMenuToggle={handleMenuToggle}
        menuOpen={state.menuOpen}
        navLight={navLight}
      />
      <StyledBodyWrapper menuOpen={state.menuOpen}>
        {children}
      </StyledBodyWrapper>
      <ContactSection />
      <Footer />
    </StyledLayoutWrapper>
  );
};

export default Layout;
