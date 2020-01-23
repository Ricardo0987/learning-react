import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import store from "./redux/store";
import Info from "./components/Info";
import Counter from "./components/Counter";
import { HashRouter } from 'react-router-dom'

const navStyle = {
  display: "flex",
  justifyContent: "space-around"
};

const navActive = {
  color: "red"
};

const Hola = props => {
  console.log("props de hola", props);
  return <h1>hola {props.location.state.name}</h1>;
};
const Home = () => <h1>Home</h1>;
const Navigation = () => (
  <nav style={navStyle}>
    <NavLink exact activeStyle={navActive} to="/">Home</NavLink>
    <NavLink exact activeStyle={navActive} to={{ pathname: "/hola", search: "?ordenar=nombre", hash: "#hash-otro", state: { name: "Ricardo O.", age: "30" }}}>Hola</NavLink>
    <NavLink exact activeStyle={navActive} to="/INFO"> Info </NavLink>
    <NavLink exact activeStyle={navActive} isActive={(match, location)=>{
console.log("isActive(counter) - match",match)
    }} to="/counter" replace>Counter</NavLink>
    <br />
    <br />
  </nav>
);

const App = () => {
  return (
    <Provider store={store}>
      <div>
        Header
        
        {/* <BrowserRouter > */}
        <HashRouter >
          <Navigation />
          <Route path="/" exact component={Home} />
          <Route path="/hola" strict component={Hola} />
          <Route path="/Info" sensitive={false} component={Info} />
          <Route path="/counter" component={Counter} />
        </HashRouter>
        {/* </BrowserRouter> */}
        {/* <Container maxWidth="sm">
        <Info></Info>
        <Counter></Counter>
        </Container> */}
      </div>
    </Provider>
  );
};

export default App;
