import type { Products } from "../interface/interface";

//reducer la nhung ham

export type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  stock: number;
};
export type CartState = {
  cart: CartItem[];
};
type Action =
  | { type: "ADD"; payload: Products }
  | { type: "INCREASE"; payload: { id: number } }
  | { type: "REDUCE"; payload: { id: number } }
  | { type: "DELETE"; payload: { id: number } };
const LS_KEY = "CART_STATE_V1";
const loadState = (): CartState | undefined => {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return undefined;
    return JSON.parse(raw) as CartState;
  } catch {
    return undefined;
  }
};

const saveState = (state: CartState) => {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(state));
  } catch {}
};
// cai state mac dinh chua co du lieu
const defaultState: CartState = { cart: [] };
//state khoi tao lay tu local neu co khong thi no se dung  defaultState
const initialState: CartState = loadState() ?? defaultState;
// ?? loadState khac null or undefind thi tra ve con khong thi tra ve defaultState

export const reducerCarts = (
  state: CartState = initialState,
  action: Action
): CartState => {
  switch (action.type) {
    case "ADD": {
      const p = action.payload as Products;
      const stock = p.quantity ?? 0;
      //idx : san pham trong gio hang
      const idx = state.cart.findIndex((it) => it.id === p.id);

      if (idx > -1) {
        const item = state.cart[idx];
        const nextQty = (item.quantity += 1);
        if (nextQty > item.stock) {
          alert("So luong san pham vuot qua so luong trong kho");
          return state;
        }

        const nextState: CartState = {
          ...state,
          // ghi de cai quantity moi vao cai quantity cu
          cart: state.cart.map((it, i) =>
            i === idx ? { ...it, quantity: nextQty } : it
          ),
        };
        saveState(nextState);
        return nextState;
      }
      // san pham chua co trong gio them moi
      const newItem: CartItem = {
        id: p.id,
        title: p.title,
        price: p.price,
        quantity: 1,
        stock,
      };
      if (newItem.quantity > newItem.stock) {
        alert("So luong san pham vuot qua so luong trong kho");
        return state;
      }
      const nextState: CartState = { ...state, cart: [...state.cart, newItem] };
      saveState(nextState);
      return nextState;
    }

    case "INCREASE": {
      const { id } = action.payload as { id: number };
      const idx = state.cart.findIndex((it) => it.id === id);
      if (idx === -1) return state;

      const item = state.cart[idx];
      const nextQty = item.quantity + 1;
      if (nextQty > item.stock) {
        alert("So luong san pham da vuot qua so luong trong kho");
        return state;
      }

      const nextState: CartState = {
        ...state,
        cart: state.cart.map((item, index) =>
          index === idx ? { ...item, quantity: nextQty } : item
        ),
      };
      saveState(nextState);
      return nextState;
    }

    case "REDUCE": {
      const { id } = action.payload as { id: number };
      const idx = state.cart.findIndex((it) => it.id === id);
      if (idx === -1) return state;
      const item = state.cart[idx];
      const nextQty = item.quantity - 1;
      if (nextQty < 0) {
        alert("So luong san pham khong duoc nho hon 0");
        return state;
      }

      const nextCart =
        nextQty === 0
          ? state.cart.filter((it) => it.id !== id)
          : state.cart.map((item, index) =>
              index === idx ? { ...item, quantity: nextQty } : item
            );

      const nextState: CartState = { ...state, cart: nextCart };
      saveState(nextState);
      return nextState;
    }

    case "DELETE": {
      const { id } = action.payload as { id: number };
      const idx = state.cart.findIndex((it) => it.id === id);
      if (idx === -1) return state;
      const item = state.cart[idx];
      const confirm = window.confirm(`Ban co muon xoa san pham ${item.title} khong`);
      if (!confirm) {
        return state;
      }
      const nextCart = state.cart.filter((it) => it.id !== id);
      const nextState: CartState = { ...state, cart: nextCart };
      saveState(nextState);
      return nextState;
    }

    default:
      return state;
  }
};
