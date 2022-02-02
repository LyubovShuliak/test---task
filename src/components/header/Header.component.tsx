import React, { useEffect, useRef } from "react";
import "./Header.scss";
import citySearch from "../../assets/images/city-search.svg";
import search from "../../assets/images/search.svg";
import { useAppDispatch } from "../../app/hooks";
import { fetchUsers } from "../../app/users/usersFetch";
import { filterBy, filteredUsers } from "../../app/users/usersSlice";

const Header = () => {
  const dispatch = useAppDispatch();
  const input = useRef<HTMLInputElement>(null);
  useEffect(() => {}, [input]);
  return (
    <div className="head">
      <header className="title_block">
        <h2 className="subtitle">
          Find city people to hang out with in foreign country
        </h2>
      </header>

      <div className="search_candidate">
        <img src={search} className="search_candidate__icon" />
        <input
          ref={input}
          onChange={() =>
            null !== input.current &&
            dispatch(filterBy(input.current.value))
          }
          type="text"
          placeholder="Search by name, country, nationality..."
          className="search_candidate__input"
        />
      </div>
    </div>
  );
};

export default Header;
