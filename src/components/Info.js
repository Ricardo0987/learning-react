import React from "react";
import { connect } from "react-redux"; //snippet rx
import {} from "../store";

const Info = props => {
  console.log(props);

  return (
    <div>
      <h1>
        {props.name} {props.counter}
      </h1>
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
