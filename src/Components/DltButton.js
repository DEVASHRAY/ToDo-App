import React from "react"

const DltButton = (props) => {
    console.log("CHECK DLT BUTTON COMPONENT");

const handleClick = (id) => {
    props.setStoreInput( (prev) => {
        return prev.filter( (item , index) => {
            return index !== id
        }  
        )
    }

    )
}

       return ( <>
            <button className="DltBtn"
                    id={props.key} 
                    onClick = {() => {handleClick(props.id)}}
                    > X </button>
        </>
    )
}
export default DltButton;