import React,{useRef} from 'react'
import input from './Input'
import Input from './Input'

const cssStyle = {
    width : "100%",
    height : "100%",
    display : "flex",
    justifyContent : "center",
    flexDirection : "column",
    alignItems : "center",
    marginTop : "20%"
}

function RefContent() {
    const inputOneRef =  useRef()
    const inputTwoRef =  useRef()
    const submitRef =  useRef()

    React.useEffect(() =>{
        inputOneRef.current.focus()
    })

    const inputOneHandle = (e) =>{
        if(e.key === "Enter"){
            inputTwoRef.current.focus()
        } 
    }
    const inputTwoHandle = (e) =>{
        if(e.key === "Enter"){
            submitRef.current.focus()
        } 
    }
    const submitHandle = (e) =>{
        if(e.key === "Enter"){
           alert("Form Submitted!")
        }        
    }

    return (
        <div style= {cssStyle}>
            <Input type="text" placeholder = "Enter First Name" onKeyDown={inputOneHandle} ref={inputOneRef} />
            <Input type="text" placeholder = "Enter Last Name" onKeyDown={inputTwoHandle} ref={inputTwoRef} />
            <Input type="submit" onKeyDown={submitHandle} ref={submitRef} />
        </div>
    )
}

export default RefContent
