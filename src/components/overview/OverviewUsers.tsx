import { Card } from "@material-ui/core";
import React, { FC, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { AnimatedList } from "react-animated-list";
import { fetchUsers } from "../../app/users/usersFetch";
import {
  countries,
  filterBy,
  filteredUsers,
  User,
  users,
} from "../../app/users/usersSlice";
import { CardItem } from "../Card/Card.component";
import "./OverviewUsers.scss";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Fade } from "@mui/material";
interface Props {
  country: string;
}

const Overview = (props: Props) => {
  const allUsers = useAppSelector(users);
  const { country } = props;

  const [slicedUsers, setSlicedUsers] = useState<User[]>(
    allUsers.filter((user) => user.location.country === country).slice(0, 3)
  );

  const dispatch = useAppDispatch();

  console.log("slicedUsers: ", slicedUsers);

  return (
    <div className="overview">
      {/* <a href="#" className="title">
        People from {country}{" "}
      </a> */}
      <div className="users_overview">
        {/* <TransitionGroup> */}
        <CSSTransition  classNames="example" timeout={2000}>
              {/* <CardItem user={user} /> */}
              <p>hhh</p>
            </CSSTransition>
        {/* </TransitionGroup> */}
        {/* {allUsers.filter((user) => user.location.country === country).length >
          3 &&
          slicedUsers[2] && (
            <div
              className="nextBtn"
              onClick={() => {
                const indexOne =
                  allUsers
                    .filter((user) => user.location.country === country)
                    .findIndex(
                      (userFromCountry) =>
                        userFromCountry.id === slicedUsers[0].id
                    ) + 1;
                const indexLast =
                  allUsers
                    .filter((user) => user.location.country === country)
                    .findIndex(
                      (userFromCountry) =>
                        userFromCountry.id === slicedUsers[2].id
                    ) + 1;
                setSlicedUsers(
                  allUsers
                    .filter((user) => user.location.country === country)
                    .slice(indexOne, indexLast + 1)
                );
                console.log(
                  allUsers.filter((user) => user.location.country === country)
                );
              }}
            >
              {" "}
              <NavigateNextIcon sx={{ fontSize: 40, color: "#c893ea" }} />
            </div>
          )} */}
      </div>
    </div>
  );
};

export default Overview;
