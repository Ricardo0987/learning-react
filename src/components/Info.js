import React from "react";
import { connect } from "react-redux"; //snippet rx
import LinearProgress from "@material-ui/core/LinearProgress";
import { Button } from "@material-ui/core";
import { updateName } from "../redux/actions/userActions";

const Info = props => {
  console.log(props);

  return (
    <div>
      <h3>
        {props.user.name} - {props.user.country}
      </h3>
      <LinearProgress variant="determinate" value={props.counter} />
      <br></br>
      <Button onClick={props.updateName}>Actualizar nombre</Button>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return { user: state.user, counter: state.counter };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateName: () =>
      dispatch({
        type: "UPDATE_NAME",
        payload: { name: "oscar", age: 25 }
      })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Info);
