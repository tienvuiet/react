import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//ham lay du lieu trwn server (json-server);
export const getAllUser = createAsyncThunk("getAllUser", async () => {
  try {
    const response = await axios.get("http://localhost:8080/users");
    return response.data;
  } catch (error) {
    console.log("Error: ", error);
  }
});
export const deleteUser = createAsyncThunk(
  "get/deleteUser",
  async (id: number) => {
    try {
      await axios.delete(`http://localhost:8080/users/${id}`);
      return id;
    } catch (error) {
      console.log("Error", error);
    }
  }
);

export const editUser = createAsyncThunk(
  "get/editUser",
  async (newUser: any) => {
    console.log("new", newUser);

    try {
      const res = await axios.put(
        `http://localhost:8080/users/${newUser.id}`,
        newUser
      );
      console.log("111", res);
      return res.data;
    } catch (error) {
      console.log("Error", error);
    }
  }
);
const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUser.pending, () => {
        console.log("Dang xu ly qua trinh !");
      })
      .addCase(getAllUser.fulfilled, (state, action) => {
        state.users = action.payload;
        // console.log("Lay du lieu thanh cong !", state);
      })
      .addCase(getAllUser.rejected, () => {
        console.log("Qua trinh lay du lieu that bai !");
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter((u: any) => u.id !== action.payload);
        // console.log("Lay du lieu thanh cong !", state);
      })
      .addCase(editUser.fulfilled, (state: any, action) => {
        const index = state.users.findIndex(
          (item: any) => item.id == action.payload.id
        );
        state.users[index] = action.payload;
      });
  },
});
export default userSlice.reducer;
