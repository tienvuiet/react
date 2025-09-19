const changeBackgroud  = {
    name: "sang",
    background: "white",
    color: "black"
}
type Action  = {type: "CHANGEBG"}
export const reducerChangeBG = (state = changeBackgroud, action : Action)=>{
    switch (action.type) {
        case "CHANGEBG":
            return {...state, name:"toi", background: "black", color: "white"}
            
    
        default:
            return state
    }
}