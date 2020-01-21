import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Counter from "./components/Counter";
import Info from "./components/Info";
import Container from '@material-ui/core/Container'

const App = () => {
  return (
    <Provider store={store}>
      <div>
      <Container maxWidth="sm">
        <Info></Info>
        <Counter></Counter>
        </Container>
      </div>
    </Provider>
  );
};

export default App;
