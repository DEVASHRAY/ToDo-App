import React from "react"

const AddButton = (props) =>{

console.log("CHECK ADD BUTTON COMPONENT");

const handleClick = () => {
    props.setStoreInput( (prev) => {
        return [ ...prev , props.input]
    })
    props.setInput("")
}

    return( 
        <>
            <button className = "AddBtn" onClick={ () => {handleClick()}}> + </button>
        </>
    )
}
export default AddButton;