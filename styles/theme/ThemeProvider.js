import React from 'react';
import { base } from './_theme';
import { ThemeProvider as Root } from 'styled-components';

import GlobalStyle from './_global';

const ThemeProvider = props => {
  const theme = {
    ...base,
    ...props.theme
  };

  return (
    <Root theme={theme}>
      <>
        <GlobalStyle {...props.global} />
        {props.children}
      </>
    </Root>
  );
};

export { ThemeProvider };
