import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Search } from "semantic-ui-react";

import "./SearchBar.css";

class SearchBar extends Component {
  state = {};

  render() {
    return <Search result={[]} value={""} />;
  }
}

export default SearchBar;
