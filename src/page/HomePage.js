import React, {Component, Fragment} from 'react';
import TopNavigation from "../component/TopNavigation/TopNavigation";
import TopBanner from "../component/TopBanner/TopBanner";
import Footer from "../component/Footer/Footer";
import Course from "../component/Course/Course";


class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <TopBanner/>
                <Course/>
                <Footer/>
            </Fragment>
        );
    }
}

export default HomePage;