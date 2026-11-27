import { useCounter } from "../hooks/useCounter"


export const MyCounterApp = () => {

    const {count,handleAdd,handleSubtract,handleReset}= useCounter()


return (
    <div style={{display:"flex", flexDirection:"column",alignItems:"center"}}>
        <h1>Counter: {count}</h1>
            <div style={{display:"flex", gap:"10px"}}>
                <button onClick={handleAdd}>+1</button>
                <button onClick={handleSubtract}>-1</button>
                <button onClick={handleReset}>Reset</button>
            </div>
    </div>
)
}
