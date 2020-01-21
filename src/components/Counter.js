//snippet rsc - componente funcional
import React from "react";
import { connect } from "react-redux"; //snippet rx
import { increment, decrement } from "../store";

const Counter = props => {
  console.log(props);

  //se reemplaza por mapDispatchToProps
  //   const inc = () => {
  //     // props.dispatch({ type: "INCREMENT" });
  //     props.dispatch(increment());
  //   };
  //   const dec = () => {
  //     props.dispatch(decrement());
  //   };
  return (
    <div>
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
      <h1>{props.count}</h1>
    </div>
  );
};

//snippets rxmap
const mapStateToProps = state => {
  return { count: state };
};
const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
