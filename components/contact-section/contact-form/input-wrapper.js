import React, { Component } from "react";
import styled from "styled-components";
import media from "../../../styles/_media";
import { Body } from "../../../styles/common";
import { colors } from "../../../styles/_variables";

const StyledFormInputWrapper = styled.div`
  min-height: 80px;
  width: 100%;
  input {
    background: #ffffff;
  }
  textarea {
    background: #ffffff;
  }

  ${media.lg`
  width: 100%;
`} ${props => props.stretch && `width: 100%`};
`;

const StyledFormChildren = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  ${props => props.stretch && `width: 100%`}
`;

class FormWrapper extends Component {
  render() {
    const { title, description, component, error, stretch } = this.props;
    return (
      <StyledFormInputWrapper stretch={stretch}>
        <>
          {component ? (
            component
          ) : (
            <>
              {!error ? (
                <Body
                  style={{
                    marginBottom: 3,
                    color: error ? colors.red : colors.black
                  }}
                >
                  {title}
                </Body>
              ) : (
                <Body
                  style={{
                    marginBottom: 3,
                    color: error ? colors.red : colors.black
                  }}
                >
                  {error}
                </Body>
              )}
              <Body style={{ marginTop: -3, fontSize: 15, fontWeight: 300 }}>
                {description}
              </Body>
            </>
          )}
        </>
        <StyledFormChildren error={!!error} stretch={stretch}>
          {this.props.children}
        </StyledFormChildren>
      </StyledFormInputWrapper>
    );
  }
}

export default FormWrapper;
