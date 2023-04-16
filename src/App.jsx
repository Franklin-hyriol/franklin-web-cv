import GlobalStyle from "./Global.styled";
import styled, { ThemeProvider } from "styled-components";
import { light, dark } from "./Theme";
import { useState } from "react";
import SideBar from "./layout/SideBar";
import Content from "./layout/Content";


function App() {

  const [theme, setTheme] = useState('light');

  const ToggleTheme = (curentTheme) => {
    return theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <Container>
        <GlobalStyle />
        <SideBar curentTheme={theme} toggleTheme={ToggleTheme} />
        <Content />
      </Container>
    </ThemeProvider>
  )
}

export default App;

const Container = styled.div`
  width: 100vw;
  height: auto;
  background-color: ${props => props.theme.bgColor};
  display: flex;
  flex-direction: row;
`;
