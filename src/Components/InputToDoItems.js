import React from "react"

const InputToDoItems = (props) =>{

    console.log("CHECK INPUTTODOITEMS COMPONENT");

const handleChange = (event) => {
    props.setInput(event.target.value)
}

    return(
        <input type="text" required
                placeholder="Add an Item"
                
                value = {props.input}
                onChange = {(event) => {handleChange(event)}}
                />
    )
}
export default InputToDoItems;
