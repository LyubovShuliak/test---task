import { createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const API_URL =
  "https://randomuser.me/api/?page=3&results=150&?gender,name,gb,picture,cell,dob,location&?nat=us,uk,de";

export const fetchUsers = createAsyncThunk("users/fetchAll", async () => {
  const response: any = await fetch(API_URL);
  const data = await response.json();
  return data.results.map((user: any) => ({
    ...user,
    picture: user.picture.large,
    location: { city: user.location.city, country: user.location.country },
    name:` ${user.name.title}.${user.name.first} ${user.name.last} `,
    id: uuidv4()
  }));
});
