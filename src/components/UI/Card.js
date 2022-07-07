import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    //    Here we are using two style properties inside className using `${}`
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
