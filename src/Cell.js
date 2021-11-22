import React, {useState, useEffect} from "react";

export default function Cell(props) {

    if (props.state) {
        props.setColor("white")
    }

    const [yCoordinates, setYCoordinates] = useState([])
    const [xCoordinates, setXCoordinates] = useState([])


    function handleActive(e) {
        const el = document.getElementById(props.id)
        if (el.style.backgroundColor === "white") {
            el.style.backgroundColor = "black"
        } else {
            el.style.backgroundColor = "white"
        }


        let rect = el.getBoundingClientRect();
        let xValue = rect.x
        let yValue = rect.y

        //TODO check addding coordinates add to array
        setXCoordinates(xPrev => [...xPrev, xValue])
        setYCoordinates(yPrev => [...yPrev, yValue])




    }

    console.log(xCoordinates, yCoordinates)


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