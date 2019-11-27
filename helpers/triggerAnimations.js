import React, { useEffect, useState } from "react";
import styled from "styled-components";
import anime from "animejs";

const EaseInLeft = ({ target, children, triggerEaseIn, style }) => {
  triggerEaseIn &&
    useEffect(() => {
      anime({
        targets: `.${target}`,
        translateX: [-100, 0],
        easing: "easeOutQuad",
        duration: 700,
        loop: false,
        autoplay: true,
        opacity: 1,
        delay: anime.stagger(150, { start: 600 })
      });
    }, [target]);

  return (
    <>
      {children.length > 1 ? (
        children.map(child => {
          return (
            <StyledEaseInWrapper
              style={style}
              key={child.props.children}
              className={target}
            >
              {child}
            </StyledEaseInWrapper>
          );
        })
      ) : (
        <StyledEaseInWrapper className={target}>{children}</StyledEaseInWrapper>
      )}
    </>
  );
};

const EaseInRight = ({ target, children, triggerEaseIn, style }) => {
  triggerEaseIn &&
    useEffect(() => {
      anime({
        targets: `.${target}`,
        translateX: [150, 0],
        easing: "easeOutQuad",
        duration: 700,
        loop: false,
        autoplay: true,
        opacity: 1,
        delay: anime.stagger(150, { start: 600 })
      });
    }, [target]);

  return (
    <>
      {children.length > 1 ? (
        children.map(child => {
          return (
            <StyledEaseInWrapper
              style={style}
              key={child.props.children || child.props.name}
              className={target}
            >
              {child}
            </StyledEaseInWrapper>
          );
        })
      ) : (
        <StyledEaseInWrapper className={target}>{children}</StyledEaseInWrapper>
      )}
    </>
  );
};

const EaseInBottom = ({
  beginAnimation,
  children,
  triggerEaseIn,
  style,
  className
}) => {
  const triggerAnimation = () => {
    triggerEaseIn &&
      anime({
        targets: ".ease-in-bottom",
        translateY: [100, 0],
        easing: "easeOutQuad",
        duration: 700,
        autoplay: false,
        loop: false,
        opacity: [0, 1],
        delay: anime.stagger(150, { start: 600 })
      }).play();
  };

  useEffect(triggerAnimation, [beginAnimation, triggerEaseIn]);

  return (
    <div style={style} className={className}>
      {children.length > 1 ? (
        children.map(child => {
          return (
            <StyledEaseInWrapper
              style={style}
              key={child.props.children}
              className="ease-in-bottom"
            >
              {child}
            </StyledEaseInWrapper>
          );
        })
      ) : (
        <StyledEaseInWrapper className="ease-in-bottom">
          {children}
        </StyledEaseInWrapper>
      )}
    </div>
  );
};

export { EaseInLeft, EaseInBottom, EaseInRight };

const StyledEaseInWrapper = styled.div`
  opacity: 0;
  ${props => (props.style ? props.style : null)}
`;
