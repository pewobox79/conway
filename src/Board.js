import React, {useState} from "react";
import Cell from "./Cell";

export default function Board() {

    const [boardHeight, setBoardHeight] = useState("200")
    const [boardWidth, setBoardWidth] = useState("200")

    const [cellValue, setCellValue] = useState("20")

    const [cellState, setCellState] = useState(false)

    const [cellColor, setCellColor] = useState("black")

    //validate mapping of cells
    let cell = []
    //rows = CellsX
    const numberOfCellsX = boardWidth / cellValue
    //columns = CellsY
    const numberOfCellsY = boardWidth / cellValue
    const totalCells = numberOfCellsY * numberOfCellsX


    for (let x = 0; x < totalCells; x++) {
        cell.push(x)
    }
console.log(cell)
    const cellItems = cell.map((item) => {

     return (
         <Cell key={cell.id} id={item} width={cellValue + "px"} height={cellValue + "px"}
               state={cellState}
               setState={setCellState} color={cellColor} setColor={setCellColor}/>)

    })

function clearBoard(e){
        setCellState(false)
}

    return (
        <><div style={{
            height: `${boardHeight + "px"}`,
            width: `${boardWidth + "px"}`,
            display: "flex",
            flexFlow: "row wrap"
        }}>
            {cellItems}
        </div>

            </>
    )
}