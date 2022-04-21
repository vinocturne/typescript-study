import React, { useState } from "react";
import styled from 'styled-components';


//지정된 ThemeProvider에서 값을 가져와 css를 설정할 수 있다.
const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
`;
  
const H1 = styled.h1`
  color: ${props => props.theme.textColor};
`

function App() {
  
  return (
    <Container>
      <H1>protected</H1>
    </Container>
  );
}

export default App;
