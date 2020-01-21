//snippet rsc - componente funcional
import React from "react";
import { connect } from "react-redux"; //snippet rx

const Counter = () => {
  return (
    <div>
      <button>+</button>
      <button>-</button>
    </div>
  );
};

//snippets rxmap
const mapStateToProps = state => {
  return { state };
};
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps)(Counter);
