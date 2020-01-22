import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import store from "./redux/store";
import Info from "./components/Info";
import Counter from "./components/Counter";

const navStyle = {
  display: "flex",
  justifyContent: "space-around"
};

const Hola = props => {
  console.log("props de hola",props)
  return (<h1>hola {props.location.state.name}</h1>)};
const Home = () => <h1>Home</h1>;
const Navigation = () => (
  <nav style={navStyle}>
    <Link to="/"> Home </Link>
    <Link
      to={{
        pathname: "/hola",
        search: "?ordenar=nombre",
        hash: "#hash-otro",
        state: { name: "Ricardo O.", age: "30" }
      }}>Hola</Link>
    <Link to="/INFO"> Info </Link>
    <Link to="/counter" replace>
      {" "}
      Counter{" "}
    </Link>
    <br />
    <br />
  </nav>
);

const App = () => {
  return (
    <Provider store={store}>
      <div>
        Header
        <BrowserRouter>
          <Navigation />
          <Route path="/" exact component={Home} />
          <Route path="/hola" strict component={Hola} />
          <Route path="/Info" sensitive={false} component={Info} />
          <Route path="/counter" component={Counter} />
        </BrowserRouter>
        {/* <Container maxWidth="sm">
        <Info></Info>
        <Counter></Counter>
        </Container> */}
      </div>
    </Provider>
  );
};

export default App;
