import React, {useState, useEffect} from "react";

export default function Cell(props) {

    if (props.state) {
        props.setColor("white")
    }

    function handleActive(e) {
        const el = document.getElementById(props.id)
        if (el.style.backgroundColor === "white") {
            el.style.backgroundColor = "black"
        } else {
            el.style.backgroundColor = "white"
        }

    }


    return (
        <div id={props.id} style={{
            height: `${props.height}`,
            width: `${props.width}`,
            backgroundColor: `${props.color}`,
            border: "1px solid white",
            boxSizing: "border-box"
        }}

             onClick={handleActive}></div>
    )
}