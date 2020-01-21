//snippet rsc - componente funcional
import React from "react";
import { connect } from "react-redux"; //snippet rx
import { increment, decrement } from "../redux/actions/counterActions";
import Button from '@material-ui/core/Button';


const Counter = props => {
  console.log(props);

  return (
    <div>
      <Button onClick={props.increment} variant="outlined"> + </Button>
      <Button onClick={props.decrement} variant="outlined" color="primary"> - </Button>
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
      <h1>{props.counter}</h1>
      <p>{props.name}</p>
    </div>
  );
};

//snippets rxmap
const mapStateToProps = state => {
  console.log(state);
  //antes
  //   return { state };
  //despues
  return { name: state.user.name, counter: state.counter };
};
const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
