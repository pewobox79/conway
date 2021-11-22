export default function Button(props){
    console.log(props)

    function findClosest(e){
        console.log(props.cells)


    }

    return(
        <button onClick={findClosest}>find</button>
    )
}