import React, { useState } from "react";
import { Waypoint } from "react-waypoint";

import { StyledNavWrapper } from "./styles";
import { withRouter } from "next/router";

import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";

const Header = ({
  menuOpen,
  handleMenuToggle,
  navLight,
  router,
  user,
  ...props
}) => {
  const [stickyNav, setStickyNav] = useState(false);

  const getPosition = ({ currentPosition, previousPosition }) => {
    if (previousPosition === "above") {
      return setStickyNav(false);
    }
    if (previousPosition === "inside" || currentPosition === "above") {
      return setStickyNav(true);
    }
    return;
  };

  return (
    <Waypoint onPositionChange={getPosition}>
      <div style={{ position: "relative", zIndex: 5 }}>
        <StyledNavWrapper menuOpen={menuOpen} stickyNav={stickyNav || navLight}>
          <DesktopNav
            stickyNav={stickyNav}
            navLight={navLight}
            router={router}
          />
          <MobileNav
            menuOpen={menuOpen}
            handleMenuToggle={handleMenuToggle}
            stickyNav={stickyNav}
            navLight={navLight}
            router={router}
          />
        </StyledNavWrapper>
      </div>
    </Waypoint>
  );
};
export default withRouter(Header);
