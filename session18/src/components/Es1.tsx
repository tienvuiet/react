import { useReducer } from "react"
const initiaState = 0;
type  Action = {type : "increase"}
const reducer = (count: number, action : Action)=>{
    switch (action.type) {
        case "increase":
            return count +=1
        default:
            return count
    }
}
export default function Es1() {
    const [count, dispatch] = useReducer(reducer, initiaState)
    const handleChange = ()=>{
        dispatch({type: "increase"  })
    }
  return (
    <div>
      <p>count : {count}</p>
      <button onClick={handleChange}>Increase</button>
    </div>
  )
}
