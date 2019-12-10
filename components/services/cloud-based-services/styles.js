import styled from "styled-components";
import { Body, Column } from "../../../styles/common";
import { StyledServiceHeadingColumn } from "../styles";
import { colors } from "../../../styles/_variables";
import media from "../../../styles/_media";

const StyledCloudBasedServicesColumn = styled(StyledServiceHeadingColumn)`
  max-width: 100%;
  flex: 0 0 100%;

  h1 {
    margin-bottom: 10px;
  }
`;

const StyledCloudBasedServicesBody = styled(Column)`
  max-width: 100%;
  flex: 0 0 100%;
`;

export { StyledCloudBasedServicesColumn, StyledCloudBasedServicesBody };
