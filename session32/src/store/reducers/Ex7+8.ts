
export type UserState = {
  email: string | null;
  password: string | null; 
  isAuthenticated: boolean;
};

const initialState: UserState = {
  email: null,
  password: null,
  isAuthenticated: false,
};

type RegisterAction = {
  type: "REGISTER_SUCCESS";
  payload: { email: string; password: string };
};

type LoginAction = {
  type: "LOGIN_SUCCESS";
  payload: { email: string };
};

type LogoutAction = { type: "LOGOUT" };

export type AuthAction = RegisterAction | LoginAction | LogoutAction;

export const reducerAuth = (
  state = initialState,
  action: AuthAction
): UserState => {
  switch (action.type) {
    case "REGISTER_SUCCESS":
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        email: action.payload.email,
        isAuthenticated: true,
      };
    case "LOGOUT":
      return { ...initialState };
    default:
      return state;
  }
};
