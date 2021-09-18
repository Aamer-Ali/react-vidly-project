import React, { Component } from "react";

const Like = (props) => {
  let heartDecorClasses = "fa fa-heart";
  if (!props.liked) heartDecorClasses += "-o";
  return (
    <i
      onClick={props.onClick}
      className={heartDecorClasses}
      style={{ cursor: "pointer" }}
    ></i>
  );
};

export default Like;
