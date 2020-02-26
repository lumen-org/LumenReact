import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import "./SearchBar.css";

import SearchField from "react-search-field";

class SearchBar extends Component {
  state = {};

  render() {
    return (
      <SearchField
        className="appToolbar-searchBar"
        placeholder="Search..."
        //onChange={onChange}
        searchText="This is initial search text"
      />
    );
  }
}

export default SearchBar;
