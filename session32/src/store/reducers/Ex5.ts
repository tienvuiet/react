const changeState = {
  name: "Rikkei Academy",
};
type Action = { type: "CHANGE" };
export const reducerChangeName: any = (state = changeState, action : Action) =>{
    switch (action.type) {
        case "CHANGE":
            
            return {...state, name: "Rikkei Soft"}
        default:
            return state
    }
}
