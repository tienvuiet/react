import { useReducer} from "react"
type ActionTypes = {
    type?: "increase" | "decrease"|"random"|"reset"
    payload?: number
}
const initiaState = 10

const reducer = (state: number, action: ActionTypes) => {
    console.log("State", state);
    console.log("Action", action);

    switch (action.type) {
        case "increase":
            return (state += 1)
        case "decrease":
            return (state -= 1)
        case "random":    
            return action.payload? action.payload: state
        case "reset":    
            return 0
        default:
            return state
    }
    
}

export default function DemoUseReducer() {
    // const [count, setCount] = useState<number>(0)
    const [count, dispatch] = useReducer(reducer, initiaState)
    const handleIncreate = (): void => {
        // setCount((prev)=>prev+1)
        dispatch({ type: "increase" })
    }
    const handleDecreate = () => {
        // setCount((prev)=>prev-1)
        dispatch({ type: "decrease" })
    }
    const handleRandom = () => {
        // setCount((prev)=>prev-1)
        dispatch({ type: "random" , payload: Math.ceil(Math.random()*1000)})
    }
    const handleReset = () => {
        // setCount((prev)=>prev-1)
        dispatch({ type: "reset" })
    }
    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={handleIncreate}>Increate</button>
            <button onClick={handleDecreate}>Decreate</button>
            <button onClick={handleRandom}>Random</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}
