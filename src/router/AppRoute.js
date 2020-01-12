import React, {Component, Fragment} from 'react';
import HomePage from "../page/HomePage";
import CoursePage from "../page/CoursePage";
import ContactPage from "../page/ContactPage";
import {Route, Switch} from "react-router-dom";
class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/available-courses" component={CoursePage}/>
                    <Route exact path="/contact" component={ContactPage}/>
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;