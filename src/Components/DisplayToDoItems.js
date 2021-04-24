import React from "react"
import DltButton from "./DltButton"

const DisplayToDoItems = React.memo((props) =>{
    props.cb()

    console.log("Check Display ToDo Items COMPONENT");
const styles = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
}

    // console.log(props);
    return(
        <>
        <ol>
            {props.storeInput.map( (item , index) => {
                return( 
                <div className ="parent-div">               
                   <div className="one list"> 
                   <li className="listItem" style = { props.check && props.idS === index? styles : null}
                                    key = {index}>{item}</li></div>
                    <div className="one dlt">
                    <DltButton  id = {index}
                                    input={props.input}
                                    storeInput = {props.storeInput}
                                    setStoreInput = {props.setStoreInput}/>
                    </div>
                        
                </div>
            )})}
        </ol>
       
        </>
    )
})
export default DisplayToDoItems;