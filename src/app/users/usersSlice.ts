import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { fetchUsers } from "./usersFetch";

export type User = {
  cell: string;
  dob: { date: string; age: number };
  gender: "male" | "female";
  location: { city: string; country: string };
  nat: string;
  picture: string;
  name: string;
  id: string;
};

type UsersState = { users: User[]; filteredUsers: User[]; countries: string[] };

const initialState: UsersState = {
  users: [],
  filteredUsers: [],
  countries: [],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    filterBy: (state, action) => {
      state.filteredUsers = state.users.filter(
        (user: User) =>
          user.location.country.includes(action.payload) ||
          user.location.city.includes(action.payload)
      );
    },
    seeNext: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<User[]>) => {
        state.users = action.payload;
        state.countries = action.payload
          .map((user) => user.location.country)
          .filter((country, index, arr) => arr.indexOf(country) === index);
      }
    );
  },
});

export const users = (state: RootState) => state.users.users;
export const filteredUsers = (state: RootState) => state.users.filteredUsers;
export const countries = (state: RootState) => state.users.countries;

export const { filterBy } = userSlice.actions;

export const usersReducer = userSlice.reducer;

// export userSlice.reducer
