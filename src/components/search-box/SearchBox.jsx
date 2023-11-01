import React, { Component } from "react";

class SearchBox extends Component {
  render() {
    console.log('render from searchbox');
    
    const { onSearchChange, placeholder, className } = this.props;

    return (
      <div>
        <input
          className={className}
          type="search"
          placeholder={placeholder}
          onChange={onSearchChange}
        />
      </div>
    );
  }
}

export default SearchBox;
