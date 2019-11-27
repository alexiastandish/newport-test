import React from "react";
import { ThemeProvider, lightGradient, base, centered } from "../styles/theme";
import {
  Hero,
  Container,
  Header,
  Column,
  Row,
  Subheader,
  Body
} from "../styles/common";
import Layout from "../components/layouts";
import { StyledNMEImg } from "../components/process/styles";

const Process = props => {
  //
  return (
    <Layout>
      <ThemeProvider theme={lightGradient(base)}>
        <Hero layout={centered}>
          <Container>
            <Header>
              Our goal is to increase client revenue and decrease wasteful
              processes.
            </Header>
            <Subheader>
              The latest technology and proprietary processes are used to ensure
              all charges are captured, documented, submitted and paid.
            </Subheader>
            <Body>
              The latest technology and proprietary processes are used to ensure
              all charges are captured, documented, submitted and paid. We rank
              in the top 5% in all of the most important MGMA benchmarks, and we
              continue to make strides in the areas of accuracy, turnaround time
              and revenue maximization. We believe in doing it right the first
              time!
            </Body>
          </Container>
        </Hero>
      </ThemeProvider>
      <ThemeProvider theme={base}>
        <Hero layout={centered}>
          <Container>
            <Header>The NewportMed Effect</Header>
            <Subheader>
              We never stop refining and improving operations, products and
              services.
            </Subheader>
            <StyledNMEImg
              src="/images/process/newportmed-effect-process.jpg"
              alt="newportmed-effect"
            />
          </Container>
        </Hero>
      </ThemeProvider>
    </Layout>
  );
};
export default Process;
