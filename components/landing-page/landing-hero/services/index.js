import React, { useState } from "react";
import { Container, Body, Button, ButtonLink } from "../../../../styles/common";
import ScrollIntoView from "../../../render-props/scroll-into-view";
import { EaseInBottom } from "../../../../helpers/triggerAnimations";
import {
  StyledBoxesRow,
  StyledServiceBox,
  StyledServiceIcon,
  StyledBoxSubheader,
  StyledServicesContainer
} from "./styles";
import Link from "next/link";
import { services } from "../../../../content/home-page.json";

const Services = props => {
  const [easeUpBoxesAnimation, easeUpBoxesAnimationFunc] = useState(false);
  return (
    <StyledServicesContainer>
      <ScrollIntoView returnFunc={easeUpBoxesAnimationFunc}>
        <StyledBoxesRow>
          <EaseInBottom triggerEaseIn={easeUpBoxesAnimation}>
            <StyledServiceBox columns={2}>
              <StyledServiceIcon>
                <img
                  src="/images/icons/money.svg"
                  alt="revenue-cycle-management"
                />
              </StyledServiceIcon>
              <StyledBoxSubheader>{services[0].service}</StyledBoxSubheader>
              <Body>{services[0].desc}</Body>
              <br />
              <Link href={services[0].button.link}>
                <ButtonLink type="link-btn-inverted">
                  {services[0].button.text}
                </ButtonLink>
              </Link>
            </StyledServiceBox>
          </EaseInBottom>

          <EaseInBottom>
            <StyledServiceBox columns={2}>
              <StyledServiceIcon>
                <img
                  src="/images/icons/cloud.svg"
                  alt="revenue-cycle-management"
                />
              </StyledServiceIcon>
              <StyledBoxSubheader>{services[1].service}</StyledBoxSubheader>
              <Body>{services[1].desc}</Body>
              <br />
              <Link href={services[1].button.link}>
                <ButtonLink type="link-btn-inverted">
                  {services[1].button.text}
                </ButtonLink>
              </Link>
            </StyledServiceBox>
          </EaseInBottom>

          <EaseInBottom>
            <StyledServiceBox columns={2}>
              <StyledServiceIcon>
                <img
                  src="/images/icons/gear.svg"
                  alt="revenue-cycle-management"
                />
              </StyledServiceIcon>
              <StyledBoxSubheader>{services[2].service}</StyledBoxSubheader>
              <Body>{services[2].desc}</Body>
              <br />
              <Link href={services[2].button.link}>
                <ButtonLink type="link-btn-inverted">
                  {services[2].button.text}
                </ButtonLink>
              </Link>
            </StyledServiceBox>
          </EaseInBottom>

          <EaseInBottom>
            <StyledServiceBox columns={2}>
              <StyledServiceIcon>
                <img
                  src="/images/icons/medical.svg"
                  alt="revenue-cycle-management"
                />
              </StyledServiceIcon>
              <StyledBoxSubheader>{services[3].service}</StyledBoxSubheader>
              <Body>{services[3].desc}</Body>
              <br />
              <Link href={services[3].button.link}>
                <ButtonLink type="link-btn-inverted">
                  {services[3].button.text}
                </ButtonLink>
              </Link>
            </StyledServiceBox>
          </EaseInBottom>
        </StyledBoxesRow>
      </ScrollIntoView>
    </StyledServicesContainer>
  );
};
export default Services;
