import React from 'react';


const getInput = e => e.target.value; 
  
const SearchBar = ({filterText, onUserInput}) => (
  <input className="search_bar"
  type="search"
  placeholder="Search"
  value={filterText}
  onChange={e => onUserInput(getInput(e))}
  />
);


export default SearchBar;  


