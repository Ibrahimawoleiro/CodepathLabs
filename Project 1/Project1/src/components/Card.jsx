import React from "react";
import Buttons from "./Buttonns.jsx";
const Card = (props) => {
    return (
        <div className="item">
            <img src ={props.person}  alt={props.face}/>
            <Buttons year = {props.year} biography={props.Biography} name={props.name}></Buttons>
        </div>
    )

}

export default Card;