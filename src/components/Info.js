import React from "react";
import { connect } from "react-redux"; //snippet rx
import LinearProgress from "@material-ui/core/LinearProgress";
import { TextField } from "@material-ui/core";
import { updateName } from "../redux/actions/userActions";


const Info = props => {
  console.log(props);

  const handlerChange = e => {
    console.log(e.target.value);
    const name = e.target.value;
    props.updateName(name);
  };

  return (
    <div>
      <h3>
        {props.user.name} - {props.user.country}
      </h3>
      <LinearProgress variant="determinate" value={props.counter} />
      <br />
      <TextField label="Nombre" onChange={handlerChange} />
      <br />
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return { user: state.user, counter: state.counter };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateName: (name) =>
      dispatch(updateName(name))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Info);
