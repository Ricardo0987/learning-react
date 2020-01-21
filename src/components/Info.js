import React from "react";
import { connect } from "react-redux"; //snippet rx
import LinearProgress from "@material-ui/core/LinearProgress";

const Info = props => {
  console.log(props);

  return (
    <div>
      <h1>
        {props.name} {props.counter}
      </h1>
      <LinearProgress variant="determinate" value={props.counter} />
      <br></br>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return { name: state.user.name, counter: state.counter };
};
const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Info);
