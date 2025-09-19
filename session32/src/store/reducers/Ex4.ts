type RandomState = {
  count: number;
  arr: number[];
};
const initalState: RandomState = {
  count: 0,
  arr: [],
};
type Action = { type: "RANDOM" } | { type: "CLEAR" };
export const reducerRandom: any = (state = initalState, action: Action):RandomState => {
  switch (action.type) {
    case "RANDOM":
       const n = Math.floor(Math.random()*1000)
       return { 
        count: state.count+1,
        arr: [...state.arr, n]
       }
    case "CLEAR":
      return initalState
    default:
      return state;
  }
};
