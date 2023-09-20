import React from "react";
import ballondor from "../Pictures/BallondorImage.jpeg"
const Top = () => {
  return (
    <div className="topImagediv">
      <div className="TopWord"> Ballon D'or Players since Year 2000</div>
       <img className="topImage" src={ballondor} alt="Ballon D'or" />
       
    </div>
   
   
  )
}


export default Top;