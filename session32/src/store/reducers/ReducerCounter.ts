//reducer ban chat la cai ham, muc cua ham de tinh toan tra ve state moi dua vao action
const initiaState = {
  count: 0,
  status: true,
};
export const reducerCounter: any = (state = initiaState, action: any) => {
  switch (action.type) {
    case "INCREMENT":
      state.count = state.count + 1;
      return { ...state };
    case "DECREMEN":
      state.count = state.count - 1;
      return { ...state };
    default:
      return state;
  }
};
