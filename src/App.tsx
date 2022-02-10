import styled from "styled-components";
import { StylesProvider } from "@material-ui/core";

import GlobalStyle from "./globalStyles";
import TodoScreen from "./screens/TodoScreen";

const Container = styled.div`
  margin: 0;
  padding: 0;
  background-color: #f0f2f5;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => (
  <StylesProvider injectFirst>
    <Container>
      <GlobalStyle />
      <TodoScreen />
    </Container>
  </StylesProvider>
);

export default App;
