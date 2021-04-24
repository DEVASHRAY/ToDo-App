import React , {useCallback, useState} from "react"
import InputToDoItems from "./InputToDoItems"
import AddButton from "./AddButton"
import DisplayToDoItems from "./DisplayToDoItems"


const UI = () => {
    const [input, setInput] = useState("");
    const [storeInput , setStoreInput] = useState([])
    const [check , setCheck] = useState(false)
    const [id , setId] = useState()

    // const DisplayToDoItemsCallBack = useCallback(<DisplayToDoItems  storeInput = {storeInput}
    //     setStoreInput = {setStoreInput}
    //     check = {check}
    //     setCheck = {setCheck}
    //     idS = {id}
    //     setId = {setId} /> , [storeInput])

const cb = useCallback( () => {} , [storeInput])


    return(
        <div className = "main">
            <div className = "centre">
                <br/>
                <h1>ToDo App</h1>
                <br/>
            <InputToDoItems input={input} 
                        setInput={setInput}/>

            <AddButton input = {input}
                    setInput={setInput} 
                    storeInput = {storeInput}
                    setStoreInput = {setStoreInput}
                    cb = {cb}/>
                    
            <DisplayToDoItems storeInput = {storeInput}
                                setStoreInput = {setStoreInput}
                                check = {check}
                                setCheck = {setCheck}
                                idS = {id}
                                setId = {setId} 
                                cb = {cb}/>
            </div>
        </div>      
    )
}

export default UI