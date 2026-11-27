import { useState } from "react"


export function useCounter(initialValued = 10) {

    
    const [count, setCounter] = useState(initialValued)

    const handleAdd = ()=>{
        setCounter(count + 1)
    }
    const handleSubtract = ()=>{
        setCounter(count - 1)
    }
    const handleReset = ()=>{
        setCounter(initialValued)
    }



  return{
    //Values
    count,
    //Methods /Actions
    handleAdd,
    handleSubtract,
    handleReset
  }
}

