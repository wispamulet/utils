import React from 'react';
import Styled from 'styled-components';
import { GlobalStyle } from './styled/Global';

const PageContainer = Styled.div`
  padding: 0 ${props => props.theme.spaces.three};
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export default function Page({ children }: React.Props<any>): JSX.Element {
  return (
    <PageContainer className="App">
      <GlobalStyle />
      {children}
    </PageContainer>
  );
}
