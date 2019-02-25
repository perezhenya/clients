import React from 'react';


const getInput = e => e.target.value;

export default const SearchBarOne = ({filterText, onUserInput}) => (
    <input 
     type="search"
     placeholder="Search"
     value={filterText}
     onChange = {e =>onUserInput(getInput(e)) }
     />
);
