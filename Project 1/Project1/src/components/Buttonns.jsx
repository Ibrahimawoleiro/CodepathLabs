import React from "react";
const Buttons = (props) => {
  return (
    <div className="details">
      <p>Name: {props.name}</p>
      <p>Year: {props.year}</p>
      <a href={props.biography} target="_blank"><button>Biography</button></a>
    </div>

  )
}


export default Buttons;