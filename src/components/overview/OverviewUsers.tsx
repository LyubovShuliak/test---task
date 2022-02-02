import { Card } from "@material-ui/core";
import React, { FC, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchUsers } from "../../app/users/usersFetch";
import {
  countries,
  filterBy,
  filteredUsers,
  User,
  users,
} from "../../app/users/usersSlice";
import CardItem from "../Card/Card.component";

import "./OverviewUsers.scss";

interface Props {
  country: string;
  users: User[];
}

const Overview = (props: Props) => {
  const dispatch = useAppDispatch();
  const { country, users } = props;

  return (
    <div className="overview">
      <a href="#" className="title">People from {country} </a>
      <div className="users_overview">
        {users
          .filter((user) => user.location.country === country)
          .slice(0, 4)
          .map((user) => (
            <CardItem
              image={user.picture}
              title={user.name}
              description={`${user.location.city}, ${user.location.country}`}
            />
          ))}
      </div>
    </div>
  );
};

export default Overview;
