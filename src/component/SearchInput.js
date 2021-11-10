import React from "react";
import iconSearch from "../images/icon-arrow.svg";

const SearchInput = ({ ...props }) => {
  return (
    <div id="input">
      <input
        onChange={props.onChange}
        value={props.value}
        type="text"
        placeholder="Search any IP address of domain"
      />
      <button type="submit" id="search-btn">
        <img className="icon-search" src={iconSearch} alt="search-icon" />
      </button>
    </div>
  );
};

export default SearchInput;
