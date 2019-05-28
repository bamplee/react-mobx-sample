import React from 'react';

import SearchInput from "./SearchInput";
import SearchList from "./SearchList";

function SearchContainer(props) {
    return (
        <React.Fragment>
            <SearchInput/>
            <SearchList/>
        </React.Fragment>
    );
}

export default SearchContainer;
