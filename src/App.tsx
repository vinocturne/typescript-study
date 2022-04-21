import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  align-items: center;
  //ThemeProvider로 설정하게 되면 해당 properties를 받아올 수 있다.
  //props.theme.속성명으로 해당 값을 css에 적용시킬 수 있다.
  background-color: ${(props) => props.theme.backgroundColor}
`

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`

function App() {
  return (
    <Wrapper>
      <Title>Hello</Title>
    </Wrapper>
  );
}

export default App;
