const initialState = {
  users: [
    {
      id: 1,
      name: "Nguyen van nam",
      gender: "Name",
      date: "20/2/3231",
      address: "Thanh xuan, ha dong",
    },
    {
      id: 2,
      name: "Vu Viet Tien",
      gender: "nu",
      date: "19/1/2006",
      address: "Mo Lao",
    },
  ],
};
export const reducerUsers: any = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
