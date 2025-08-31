import { useReducer } from "react"

type Product = {
    id: number,
    name: string,
    description: string,
}
type State = {
    keyword: string,
}
type Action = { type: "SET_KEYWORD", payload: string }
const products: Product[] = [
    { id: 1, name: "Iphone 13", description: "smartphone mới nhất của Apple" },
    { id: 2, name: "Iphone 14", description: "smartphone mới nhất của Apple" },
    { id: 3, name: "Xiaomi 13", description: "smartphone của Xiaomi" },
    { id: 4, name: "Redmi Note 13 Pro 5G", description: "dòng Redmi giá rẻ" },
    { id: 5, name: "Siêu nhân Gao", description: "Đồ chơi siêu nhân" },
]
const initialState : State = {
    keyword: ""
}
const reducer = (state: State, action: Action): State =>{
    switch (action.type) {
        case "SET_KEYWORD":
            return {...state, keyword: action.payload}
    
        default:
            return state
    }
}
export default function Es9() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        dispatch({type: "SET_KEYWORD", payload: e.target.value.toLowerCase()})
    }
    const filtered = products.filter((pr)=> pr.name.toLowerCase().includes(state.keyword))
    return (
        <>
         <h3>Tim kiem san pham</h3>
         <input type="text " value={state.keyword} onChange={handleChange}/>
         <div>  
            {filtered.length>0?(    
                filtered.map((pr)=>(
                        <div key={pr.id}>   
                        <p style={{fontWeight:500}}>{pr.name}</p>
                        <p>{pr.description}</p>
                        </div>
                ))
            ):( 
                <div>   
                    khong tim thay san phm
                </div>
            )}
         </div>
        </>
    )
}
