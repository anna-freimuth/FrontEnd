import React from "react";

export default ({sender,text,rate})=>{
    return(
        <div>
        <h6>{sender}</h6>
        <p>{text}</p>
        <h6>{rate}</h6>
        </div>
    )

}