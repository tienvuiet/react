const initiaState = {
  users: [
    {
      id: 1,
      name: "Minh Thu",
    },
    {
      id: 2,
      name: "Minh Minh Nguyen",
    },
    {
      id: 3,
      name: "Lan Hong",
    },
  ],
};
export const reducerStudent = (state = initiaState, action:any) => {  
  switch (action.type) {
    case "ADD":
        return state
    case "EDIT":    
        return state
    case "DELETE":
        return state     
    default:
        return state
  }
}
