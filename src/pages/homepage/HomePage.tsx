import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchUsers } from "../../app/users/usersFetch";
import { users, User, filteredUsers, countries } from "../../app/users/usersSlice";
import Header from "../../components/header/Header.component";
import Overview from "../../components/overview/OverviewUsers";

function Homepage() {
  const params = useParams();
  const dispatch = useAppDispatch();
  const allUsers = useAppSelector(users);
  const selectCountry: string[] = useAppSelector(countries);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);


  return (
    <div className="App">
      <Header />
      {selectCountry.map((country) => (
        <Overview country={country} users={allUsers} />
      ))}
    </div>
  );
}

export default Homepage;