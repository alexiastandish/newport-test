import React from "react";
import {
  Hero,
  Header,
  Subheader,
  Body,
  Row,
  Column
} from "../../../styles/common";
import { ThemeProvider, leftAlign } from "../../../styles/theme";

const RevenueCycleManagement = props => {
  return (
    <ThemeProvider>
      <Hero layout={leftAlign}>
        <Row>
          <Column>
            <Header>Revenue Cycle Management (RCM)</Header>
          </Column>
          <Column>
            <Body>
              We do not fit in the “Billing Service” box as we are much more
              than a key punching, low hanging fruit grabbing, data entry shop.
              Our goal with our RCM offering is to bring your entity to a higher
              level and provide expertise beyond submitting a claim and posting
              a payment. You should know that we rarely accept “that’s the way
              we’ve always done it” from our teams, our partners and our
              clients. We let revenue and data play a major role in the way we
              work with our clients. Analytics, AI, Denial Reporting are all
              buzz words that are meaningless if they don’t drive actions,
              changes, refinement and better outcomes. From our coding expertise
              to our team of analysts we are always looking to maximize revenue,
              decrease denials, lower days in AR and influence change within our
              client’s teams. Proving financial impacts and positive financial
              effects of change is one of our most meaningful steps on the road
              to “ensuring the financial health of the practices we serve.”
            </Body>
          </Column>
        </Row>
      </Hero>
    </ThemeProvider>
  );
};
export default RevenueCycleManagement;
