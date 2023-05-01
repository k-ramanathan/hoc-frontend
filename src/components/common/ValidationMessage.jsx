import React from "react";

const ValidationMessage = ({ error, name }) => {
  var message = "";
  if(error.hasOwnProperty(name)) {
    message = error[name][0];
  }
  return <span className="text-danger">{ message }</span>;
};

export default ValidationMessage;
