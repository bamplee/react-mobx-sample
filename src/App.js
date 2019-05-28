import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import SearchContainer from "./components/SearchContainer";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Route exact path="/" component={SearchContainer}/>
            </React.Fragment>
        )
    }
}

export default (App);
